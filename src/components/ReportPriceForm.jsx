"use client";

import { useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

const ReportPriceForm = ({ items = [] }) => {
  // Debugging line to check the items prop
  const [form, setForm] = useState({
    row_key: "",
    price: "",
    district: "",
    marketType: "retail",
    purchaseDate: "",
    note: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const [districtOpen, setDistrictOpen] = useState(false);
  const [districtSearch, setDistrictSearch] = useState("");

  const districts = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barishal",
    "Bhola",
    "Bogura",
    "Brahmanbaria",
    "Chandpur",
    "Chapainawabganj",
    "Chattogram",
    "Chuadanga",
    "Cox's Bazar",
    "Cumilla",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore",
    "Jhalokathi",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachhari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  const filteredDistricts = districts.filter((district) =>
    district.toLowerCase().includes(districtSearch.toLowerCase().trim()),
  );

  const minPrice = selectedItem?.price_min * 0.7;
  const maxPrice = selectedItem?.price_max * 1.3;

  const invalidPrice =
    form.price !== "" &&
    selectedItem &&
    (Number(form.price) < minPrice || Number(form.price) > maxPrice);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (invalidPrice || !selectedItem || submitting) return;

    setSubmitting(true);
    setMessage("");

    try {
      const res = await fetch("/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      setMessage(data.message);

      if (res.ok) {
        setForm({
          row_key: "",
          price: "",
          district: "",
          marketType: "retail",
          purchaseDate: "",
          note: "",
        });

        setSelectedItem(null);
        setDistrictSearch("");
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Heading */}
      <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Price details.
        </h2>

        <span className="text-xs text-neutral-500">* Required</span>
      </div>

      {/* Commodity */}
      <div className="mb-5">
        <label
          htmlFor="row_key"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-500"
        >
          01 — Select commodity *
        </label>

        <div className="relative">
          <select
            id="row_key"
            name="row_key"
            value={form.row_key}
            onChange={(e) => {
              setForm({ ...form, row_key: e.target.value, price: "" });
              setSelectedItem(
                items.find((item) => item.row_key === e.target.value),
              );
            }}
            required
            className="w-full appearance-none rounded-sm border border-neutral-200 bg-white px-4 py-3 pr-10 text-sm outline-none transition-colors focus:border-black"
          >
            <option value="" disabled>
              Select a commodity
            </option>

            {items.map((item) => (
              <option key={item.row_key} value={item.row_key}>
                {item.item}
              </option>
            ))}
          </select>

          <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Price and Unit */}
      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        {/* Price Paid */}
        <div className="sm:col-span-2">
          <label
            htmlFor="price"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-500"
          >
            02 — Price paid *
          </label>

          <div
            className={`flex items-center rounded-sm border bg-white transition-colors focus-within:border-black ${
              invalidPrice ? "border-red-600" : "border-neutral-200"
            }`}
          >
            <span className="shrink-0 pl-4 text-2xl font-medium">৳</span>

            <input
              id="price"
              type="number"
              name="price"
              min="0.01"
              step="0.01"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              placeholder="0.00"
              required
              aria-invalid={!!invalidPrice}
              className="min-w-0 w-full bg-transparent py-4 pl-2 pr-4 text-4xl font-semibold tracking-tight outline-none placeholder:text-neutral-300"
            />
          </div>

          {/* Validation Message */}
          <div className="mt-3" aria-live="polite">
            {invalidPrice ? (
              <div className="border-l-2 border-red-600 bg-red-50 px-4 py-3">
                <p className="text-sm font-semibold text-red-700">
                  Price outside the accepted range.
                </p>

                <p className="mt-1 text-xs text-red-600">
                  Accepted range: ৳{minPrice.toFixed(2)}–৳{maxPrice.toFixed(2)}
                </p>
              </div>
            ) : selectedItem && form.price ? (
              <p className="text-xs text-neutral-600">
                Price is within the accepted range.
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Unit
          </label>

          <div className="rounded-sm border border-neutral-200 bg-neutral-50 px-4 py-6 text-sm font-medium">
            {selectedItem?.unit || "Select item"}
          </div>
        </div>
      </div>

      {/* District */}

      {/* District */}
      <div className="relative mb-5">
        <label
          htmlFor="district"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-500"
        >
          03 — District *
        </label>

        <div className="relative">
          <input
            id="district"
            type="text"
            role="combobox"
            aria-expanded={districtOpen}
            aria-controls="district-options"
            aria-autocomplete="list"
            value={districtOpen ? districtSearch : form.district}
            onFocus={() => {
              setDistrictOpen(true);
              setDistrictSearch("");
            }}
            onChange={(e) => {
              setDistrictSearch(e.target.value);
              setForm({ ...form, district: "" });
              setDistrictOpen(true);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setDistrictOpen(false);
              }
            }}
            placeholder="Search or select district..."
            autoComplete="off"
            required
            className="w-full rounded-sm border border-neutral-200 bg-white px-4 py-3 pr-10 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
          />

          <FiChevronDown
            onClick={() => {
              setDistrictOpen(!districtOpen);
              setDistrictSearch("");
            }}
            className={`absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-neutral-500 transition-transform ${
              districtOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Dropdown */}
        {districtOpen && (
          <>
            {/* Outside click */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setDistrictOpen(false)}
            />

            <div
              id="district-options"
              role="listbox"
              className="absolute left-0 right-0 top-full z-20 mt-1 max-h-80 overflow-y-auto rounded-sm border border-neutral-200 bg-white py-1 shadow-lg"
            >
              {filteredDistricts.length > 0 ? (
                filteredDistricts.map((district) => (
                  <button
                    key={district}
                    type="button"
                    role="option"
                    aria-selected={form.district === district}
                    onClick={() => {
                      setForm({ ...form, district });
                      setDistrictSearch("");
                      setDistrictOpen(false);
                    }}
                    className={`flex w-full cursor-pointer items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-neutral-100 ${
                      form.district === district
                        ? "bg-neutral-100 font-semibold"
                        : ""
                    }`}
                  >
                    {district}

                    {form.district === district && (
                      <span className="text-xs text-neutral-500">Selected</span>
                    )}
                  </button>
                ))
              ) : (
                <p className="px-4 py-5 text-center text-sm text-neutral-500">
                  No district found.
                </p>
              )}
            </div>
          </>
        )}
      </div>

      {/* Market Type */}
      <fieldset className="mb-5">
        <legend className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-500">
          04 — Market type *
        </legend>

        <div className="grid grid-cols-3 gap-2">
          {["retail", "wholesale", "online"].map((type) => (
            <label
              key={type}
              className={`cursor-pointer rounded-sm border px-2 py-4 text-center text-xs font-medium capitalize transition-colors sm:px-4 ${
                form.marketType === type
                  ? "border-black bg-black text-white"
                  : "border-neutral-200 bg-white hover:border-black"
              }`}
            >
              <input
                type="radio"
                name="marketType"
                value={type}
                checked={form.marketType === type}
                onChange={(e) =>
                  setForm({
                    ...form,
                    marketType: e.target.value,
                  })
                }
                className="sr-only"
              />

              {type}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Purchase Date */}
      <div className="mb-5">
        <input
          id="purchaseDate"
          type="date"
          name="purchaseDate"
          value={form.purchaseDate}
          onFocus={(e) => {
            e.currentTarget.max = new Intl.DateTimeFormat("sv-SE", {
              timeZone: "Asia/Dhaka",
            }).format(new Date());
          }}
          onChange={(e) => setForm({ ...form, purchaseDate: e.target.value })}
          required
          className="w-full rounded-sm border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-black"
        />
      </div>

      {/* Additional Note */}
      <div className="mb-6">
        <label
          htmlFor="note"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-500"
        >
          06 — Additional details (optional)
        </label>

        <textarea
          id="note"
          name="note"
          rows={3}
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          placeholder="Market name, shop name or other details..."
          className="w-full resize-none rounded-sm border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-black"
        />
      </div>

      {/* Submit */}
      <div className="border-t border-neutral-200 pt-5">
        <button
          type="submit"
          disabled={!selectedItem || invalidPrice || submitting}
          className="group flex w-full cursor-pointer items-center justify-between rounded-sm border border-black bg-black px-6 py-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span>{submitting ? "Submitting..." : "Submit price report"}</span>

          <FiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {message && (
          <p
            role="status"
            className="mt-3 border-l-2 border-black bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
          >
            {message}
          </p>
        )}

        <p className="mt-3 text-xs leading-relaxed text-neutral-500">
          No account required. Your report may be reviewed before appearing
          publicly.
        </p>
      </div>
    </form>
  );
};

export default ReportPriceForm;
