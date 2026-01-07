"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { MoreDotIcon } from "@/icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { useState } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function EmployeeMonthlyChart() {
  const [isOpen, setIsOpen] = useState(false);

  const options: ApexOptions = {
    chart: {
      type: "bar",
      fontFamily: "Outfit, sans-serif",
      toolbar: { show: false },
      height: "100%",
    },
    colors: ["#f59e0b", "#22c55e", "#6366f1"], 
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 6,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec",
      ],
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    grid: {
      yaxis: {
        lines: { show: true },
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} Orang`,
      },
    },
  };

  const series = [
    {
      name: "Calon Karyawan",
      data: [20, 35, 25, 30, 22, 28, 32, 18, 26, 40, 34, 21],
    },
    {
      name: "Karyawan Tetap",
      data: [120, 140, 130, 150, 135, 145, 155, 125, 138, 160, 150, 140],
    },
    {
      name: "Magang",
      data: [15, 18, 12, 20, 16, 14, 19, 10, 13, 22, 18, 11],
    },
  ];

  return (
    <div className="h-[600px] w-full rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Daftar Seluruh Karyawan
        </h3>

        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)}>
            <MoreDotIcon />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            className="w-40 p-2"
          >
            <DropdownItem>Lihat Detail</DropdownItem>
            <DropdownItem>Export</DropdownItem>
          </Dropdown>
        </div>
      </div>

      {/* FULL WIDTH & HEIGHT */}
      <div className="h-[calc(100%-56px)] w-full">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
}
