"use client";

import { useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

const ReportPriceForm = ({ items = [] }) => {
  const [form, setForm] = useState({
    row_key: "",
    price: "",
    district: "",
    marketType: "retail",
    purchaseDate: "",
    note: "",
  });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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
              setForm({ ...form, row_key: e.target.value });
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
        <div className="sm:col-span-2">
          <label
            htmlFor="price"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-neutral-500"
          >
            02 — Price paid *
          </label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">
              ৳
            </span>

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
              className="w-full rounded-sm border border-neutral-200 bg-white py-4 pl-11 pr-4 text-4xl font-semibold tracking-tight outline-none placeholder:text-neutral-300 focus:border-black"
            />
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
          className="group flex w-full cursor-pointer items-center justify-between rounded-sm border border-black bg-black px-6 py-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >
          <span>Submit price report</span>

          <FiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <p className="mt-3 text-xs leading-relaxed text-neutral-500">
          No account required. Your report may be reviewed before appearing
          publicly.
        </p>
      </div>
    </form>
  );
};

export default ReportPriceForm;
