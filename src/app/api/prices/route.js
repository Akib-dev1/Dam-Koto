import { getDB } from "@/app/lib/mongodb";
import { revalidatePath } from "next/cache";

export const POST = async (req) => {
  try {
    if (
      !process.env.N8N_API_KEY ||
      req.headers.get("authorization") !== `Bearer ${process.env.N8N_API_KEY}`
    ) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const items = await req.json();
    const db = await getDB();

    await db
      .collection("prices")
      .replaceOne(
        { _id: "Data01" },
        { _id: "Data01", items },
        { upsert: true },
      );
    revalidatePath("/"); // Revalidate the home page after updating prices
    revalidatePath("/report"); // Revalidate the report page after updating prices
    return Response.json({
      success: true,
      message: "Prices updated successfully",
      total: items.length,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, message: "Failed to update prices" },
      { status: 500 },
    );
  }
};
