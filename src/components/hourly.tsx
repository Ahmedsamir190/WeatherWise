import Image from "next/image";
import Chart from "chart.js/auto";
import { useEffect, useMemo, useRef } from "react";

interface DataPoint {
  year: number;
  count: number;
}

function HourlyCom() {
  const data: DataPoint[] = useMemo(
    () => [
      { year: 10, count: 10 },
      { year: 15, count: 12 },
      { year: 20, count: 14 },
      { year: 25, count: 16 },
      { year: 30, count: 18 },
      { year: 35, count: 20 },
      { year: 40, count: 22 },
    ],
    []
  );

  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvas = document.getElementById(
      "acquisitions"
    ) as HTMLCanvasElement | null;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: data.map((row) => row.year),

            datasets: [
              {
                label: "Hourly forecast",
                data: data.map((row) => row.count),
                borderColor: "white",
                fill: false,
                pointBackgroundColor: "white",
                pointBorderColor: "white",
                pointRadius: 5,
                pointHoverRadius: 7,
              },
            ],
          },
          options: {
            scales: {
              x: {
                type: "linear",
                position: "bottom",
                grid: {
                  display: false,
                },
                ticks: {
                  color: "white",
                },
              },
              y: {
                beginAtZero: true,
                grid: {
                  display: false,
                },
                min: 0,
                max: 25,
                ticks: {
                  color: "white",
                },
              },
            },
          },
        });

        return () => {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        };
      }
    }
  }, [data]);

  return (
    <section className="rounded-2xl bg-[#dcdcdc3d] text-white col-start-1 col-end-[18] row-start-3 row-end-6 ">
      <div>
        <canvas id="acquisitions"></canvas>
      </div>
    </section>
  );
}

export default HourlyCom;
