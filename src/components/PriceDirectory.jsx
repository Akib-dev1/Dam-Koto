"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiSearch,
  FiChevronDown,
  FiArrowUpRight,
  FiArrowUp,
  FiArrowDown,
  FiArrowRight,
  FiX,
} from "react-icons/fi";
import { useLanguage } from "./LanguageContext";

const PriceDirectory = ({ items = [], communityReports = [] }) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const { language } = useLanguage();

  const filteredItems = items
    .filter(
      (item) =>
        item.item_en.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.item.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.item.localeCompare(b.item, "bn");

      if (sortBy === "price-low") return a.price_min - b.price_min;

      if (sortBy === "price-high") return b.price_max - a.price_max;

      return 0;
    });

  return (
    <section className="pt-10 sm:pt-14">
      {/* Section Heading */}
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#6B6B6B]">
            The price directory / 001
          </p>

          <h2 className="text-4xl font-medium leading-none tracking-tighter sm:text-6xl">
            Market index<span className="text-[#6B6B6B]">.</span>
          </h2>
        </div>

        <p className="hidden text-xs text-[#6B6B6B] sm:block">
          {filteredItems.length} of {items.length} commodities
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <FiSearch
          size={21}
          strokeWidth={1.5}
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#6B6B6B]"
        />

        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search চাল, তেল, ডাল..."
          aria-label="Search commodities"
          className="h-14 w-full rounded-full border border-[#DADADA] bg-white pl-14 pr-12 text-sm text-[#0A0A0A] outline-none transition-all placeholder:text-[#929292] focus:border-black focus:ring-1 focus:ring-black sm:h-16 sm:text-base [&::-webkit-search-cancel-button]:hidden"
        />

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#6B6B6B] hover:bg-[#F2F2F2] hover:text-black"
            aria-label="Clear search"
          >
            <FiX size={18} />
          </button>
        )}
      </div>

      {/* Sort */}
      <div className="mt-5 flex items-center justify-end gap-3">
        <span className="text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
          Sort
        </span>

        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort prices"
            className="min-w-40 cursor-pointer appearance-none rounded-sm border border-[#E5E5E5] bg-white py-2.5 pl-3 pr-9 text-xs font-medium outline-none hover:border-black focus:border-black sm:text-sm"
          >
            <option value="default">Default order</option>
            <option value="name">Name: A to Z</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>

          <FiChevronDown
            size={14}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* Table Heading */}
      <div className="mt-9 flex items-center justify-between border-b border-black pb-3">
        <p className="text-sm font-semibold">
          Price directory
          <span className="ml-2 font-normal text-[#6B6B6B]">
            ({filteredItems.length})
          </span>
        </p>

        <span className="text-xs uppercase tracking-wider text-[#6B6B6B]">
          BDT / ৳
        </span>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full table-fixed border-collapse text-left">
          <thead>
            <tr className="border-b border-[#E5E5E5]">
              <th className="w-[27%] py-5 pr-4 text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                Commodity / unit
              </th>

              <th className="w-[20%] py-5 pr-4 text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                Current price
              </th>

              <th className="w-[19%] py-5 pr-4 text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                Weekly range
              </th>

              <th className="w-[20%] py-5 pr-4 text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                People paying avg.
              </th>

              <th className="w-[14%] py-5 text-right text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                Movement
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.map((item, index) => {
              const weeklyChange =
                item.week_min + item.week_max
                  ? ((item.price_min +
                      item.price_max -
                      item.week_min -
                      item.week_max) /
                      (item.week_min + item.week_max)) *
                    100
                  : 0;

              const monthlyChange =
                item.month_min + item.month_max
                  ? ((item.price_min +
                      item.price_max -
                      item.month_min -
                      item.month_max) /
                      (item.month_min + item.month_max)) *
                    100
                  : 0;

              return (
                <tr
                  key={item.row_key}
                  className="group border-b border-[#E5E5E5] transition-colors duration-200 hover:bg-[#F7F7F7]"
                >
                  {/* Commodity */}
                  <td className="py-7 pr-4">
                    <span className="block">
                      <div className="flex items-start gap-4">
                        <span className="pt-1 text-xs text-[#999999]">
                          {index + 1}
                        </span>

                        <div>
                          <p className="text-base font-semibold tracking-tight">
                            {language === "bn" ? item.item : item.item_en}
                          </p>

                          <p className="mt-1 text-xs text-[#6B6B6B]">
                            {item.unit}
                          </p>
                        </div>
                      </div>
                    </span>
                  </td>

                  {/* Current Price */}
                  <td className="py-7 pr-4">
                    <p className="text-lg font-medium tracking-tight tabular-nums">
                      ৳{item.price_min}–{item.price_max}
                    </p>

                    <p className="mt-1 text-xs text-[#6B6B6B]">
                      Monthly ৳{item.month_min}–{item.month_max}
                    </p>
                  </td>

                  {/* Weekly Range */}
                  <td className="py-7 pr-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="text-xl font-medium tracking-tighter tabular-nums lg:text-2xl">
                        ৳{item.week_min}–{item.week_max}
                      </span>

                      <FiArrowUpRight
                        size={17}
                        className="shrink-0 text-[#999999] transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                      />
                    </span>
                  </td>

                  {/* People Paying Average */}
                  <td className="py-7 pr-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="text-3xl font-medium tracking-tighter tabular-nums">
                        {(() => {
                          const report = communityReports.find(
                            (report) => report.commodity === item.item,
                          );

                          return report ? `৳${report.average}` : "—";
                        })()}
                      </span>

                      <FiArrowUpRight
                        size={17}
                        className="shrink-0 text-[#999999] transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                      />
                    </span>
                  </td>

                  {/* Movement */}
                  <td className="py-7 text-right">
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium ${
                          weeklyChange > 0 ? "text-[#C00000]" : "text-[#0A0A0A]"
                        }`}
                      >
                        {weeklyChange > 0 ? (
                          <FiArrowUp />
                        ) : weeklyChange < 0 ? (
                          <FiArrowDown />
                        ) : (
                          "—"
                        )}
                        {Math.abs(weeklyChange).toFixed(1)}%
                        <span className="font-normal text-[#6B6B6B]">7d</span>
                      </span>

                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium ${
                          monthlyChange > 0
                            ? "text-[#C00000]"
                            : "text-[#0A0A0A]"
                        }`}
                      >
                        {monthlyChange > 0 ? (
                          <FiArrowUp />
                        ) : monthlyChange < 0 ? (
                          <FiArrowDown />
                        ) : (
                          "—"
                        )}
                        {Math.abs(monthlyChange).toFixed(1)}%
                        <span className="font-normal text-[#6B6B6B]">30d</span>
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Table */}
      <div className="md:hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[#E5E5E5]">
              <th className="w-1/2 py-4 text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                Commodity
              </th>

              <th className="w-1/2 py-4 text-right text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                Current price
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.map((item) => {
              const weeklyChange =
                item.week_min + item.week_max
                  ? ((item.price_min +
                      item.price_max -
                      item.week_min -
                      item.week_max) /
                      (item.week_min + item.week_max)) *
                    100
                  : 0;

              const monthlyChange =
                item.month_min + item.month_max
                  ? ((item.price_min +
                      item.price_max -
                      item.month_min -
                      item.month_max) /
                      (item.month_min + item.month_max)) *
                    100
                  : 0;

              return (
                <tr key={item.row_key} className="border-b border-[#E5E5E5]">
                  <td className="py-6 pr-2 align-top">
                    <span>
                      <p className="text-base font-semibold leading-tight">
                        {language === "bn" ? item.item : item.item_en}
                      </p>

                      <p className="mt-1 text-xs text-[#6B6B6B]">{item.unit}</p>

                      <p className="mt-4 text-xs text-[#6B6B6B]">
                        Weekly range
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        ৳{item.week_min}–{item.week_max}
                      </p>
                    </span>
                  </td>

                  <td className="py-6 text-right align-top">
                    <span className="inline-flex items-center justify-end gap-1">
                      <span className="text-xl font-medium leading-none tracking-tighter tabular-nums sm:text-2xl">
                        ৳{item.price_min}–{item.price_max}
                      </span>

                      <FiArrowRight
                        size={15}
                        className="shrink-0 text-[#6B6B6B]"
                      />
                    </span>

                    <div className="mt-3 flex flex-wrap justify-end gap-x-3 gap-y-1">
                      <span
                        className={`inline-flex items-center gap-1 text-xs ${
                          weeklyChange > 0 ? "text-[#C00000]" : "text-black"
                        }`}
                      >
                        {weeklyChange > 0 ? (
                          <FiArrowUp />
                        ) : weeklyChange < 0 ? (
                          <FiArrowDown />
                        ) : (
                          "—"
                        )}
                        {Math.abs(weeklyChange).toFixed(1)}%
                        <span className="text-[#6B6B6B]">7d</span>
                      </span>

                      <span
                        className={`inline-flex items-center gap-1 text-xs ${
                          monthlyChange > 0 ? "text-[#C00000]" : "text-black"
                        }`}
                      >
                        {monthlyChange > 0 ? (
                          <FiArrowUp />
                        ) : monthlyChange < 0 ? (
                          <FiArrowDown />
                        ) : (
                          "—"
                        )}
                        {Math.abs(monthlyChange).toFixed(1)}%
                        <span className="text-[#6B6B6B]">30d</span>
                      </span>
                    </div>

                    <p className="mt-4 text-xs text-[#6B6B6B]">
                      Monthly ৳{item.month_min}–{item.month_max}
                    </p>

                    <div className="mt-4">
                      <p className="text-xs text-[#6B6B6B]">
                        People paying avg.
                      </p>

                      <p className="mt-1 text-lg font-semibold tracking-tight">
                        {(() => {
                          const report = communityReports.find(
                            (report) => report.commodity === item.item,
                          );

                          return report ? `৳${report.average}` : "—";
                        })()}
                      </p>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="flex flex-col items-center justify-center border-b border-[#E5E5E5] py-20 text-center">
          <FiSearch size={28} strokeWidth={1} className="mb-5 text-[#6B6B6B]" />

          <h3 className="text-xl font-medium tracking-tight">
            No commodities found.
          </h3>

          <p className="mt-2 text-sm text-[#6B6B6B]">Try another search.</p>

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setSortBy("default");
            }}
            className="mt-6 border-b border-black pb-1 text-sm font-medium hover:opacity-50"
          >
            Clear search
          </button>
        </div>
      )}

      {/* Table Footer */}
      {filteredItems.length > 0 && (
        <div className="flex items-center justify-between py-5">
          <p className="text-xs text-[#6B6B6B]">
            Showing {filteredItems.length} commodities
          </p>

          <p className="text-xs uppercase tracking-wider text-[#6B6B6B]">
            End of index
          </p>
        </div>
      )}
    </section>
  );
};

export default PriceDirectory;
