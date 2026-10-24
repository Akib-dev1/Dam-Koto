import { getDB } from "@/app/lib/mongodb";
import { revalidatePath } from "next/cache";

export const POST = async (req) => {
  try {
    const form = await req.json();
    const db = await getDB();

    const data = await db.collection("prices").findOne({
      _id: "Data01",
    });

    const item = data?.items?.find((item) => item.row_key === form.row_key);

    if (!item) {
      return Response.json(
        { message: "Commodity not found." },
        { status: 400 },
      );
    }

    const price = Number(form.price);

    if (
      !Number.isFinite(price) ||
      price < item.price_min * 0.7 ||
      price > item.price_max * 1.3
    ) {
      return Response.json(
        { message: "Price is outside the accepted range." },
        { status: 400 },
      );
    }

    const purchaseDate = new Date(`${form.purchaseDate}T00:00:00+06:00`);
    const now = new Date();

    if (
      !form.purchaseDate ||
      !Number.isFinite(purchaseDate.getTime()) ||
      purchaseDate > now ||
      purchaseDate < new Date(now.getTime() - 7 * 86400000)
    ) {
      return Response.json(
        { message: "Please select a date within the last 7 days." },
        { status: 400 },
      );
    }

    if (
      typeof form.district !== "string" ||
      !form.district.trim() ||
      !["retail", "wholesale", "online"].includes(form.marketType)
    ) {
      return Response.json(
        { message: "Invalid report details." },
        { status: 400 },
      );
    }

    await db.collection("reports").insertOne({
      commodity: item.item,
      unit: item.unit,
      price,
      district: form.district.trim(),
      marketType: form.marketType,
      purchaseDate: form.purchaseDate,
      note: typeof form.note === "string" ? form.note.trim().slice(0, 500) : "",
      createdAt: now,
    });

    revalidatePath("/");

    return Response.json({
      success: true,
      message: "Price reported successfully.",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { message: "Failed to submit report." },
      { status: 500 },
    );
  }
};

export const GET = async () => {
  try {
    const db = await getDB();

    const reports = await db
      .collection("reports")
      .aggregate([
        {
          $group: {
            _id: {
              commodity: "$commodity",
              unit: "$unit",
            },
            average: { $avg: "$price" },
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            commodity: "$_id.commodity",
            unit: "$_id.unit",
            average: { $round: ["$average", 2] },
            count: 1,
          },
        },
      ])
      .toArray();

    return Response.json({ reports });
  } catch (error) {
    console.error(error);

    return Response.json(
      { message: "Failed to fetch reports." },
      { status: 500 },
    );
  }
};
