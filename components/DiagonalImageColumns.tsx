"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// Replace these sample URLs with your own
const initialColumns = [
  [
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11066F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/IMG_2458.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11155F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1092499.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/iwbdi.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1-21.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11343F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1-20.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/0.webp",
  ],
  [
    "https://neonpigeon.in/wp-content/uploads/2024/11/1092499.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/iwbdi.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11066F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/IMG_2458.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11155F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1092499.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/iwbdi.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1-21.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11343F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1-20.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/0.webp",
  ],
  [
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11066F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/IMG_2458.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11155F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1092499.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/iwbdi.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1-21.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11343F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1-20.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/0.webp",
  ],
  [
    "https://neonpigeon.in/wp-content/uploads/2024/11/1-20.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/0.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11066F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/IMG_2458.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11155F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1092499.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/iwbdi.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1-21.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11343F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1-20.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/0.webp",
  ],
  [
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11066F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/IMG_2458.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11155F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1092499.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/iwbdi.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1-21.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/BB_Day11343F.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/1-20.webp",
    "https://neonpigeon.in/wp-content/uploads/2024/11/0.webp",
  ],
];

const speeds = [15, 11, 18, 13, 21];

export default function DiagonalImageColumns() {
  const [columns, setColumns] = useState(initialColumns);

  // Initial flips are all false for SSR/CSR sync
  const [flipStates, setFlipStates] = useState(
    initialColumns.map((col) => col.map(() => false))
  );

  // Randomize flips after mount
  useEffect(() => {
    setFlipStates(
      initialColumns.map((col) => col.map(() => Math.random() < 0.5))
    );
    const interval = setInterval(() => {
      setFlipStates((prev) =>
        prev.map((col) => col.map(() => Math.random() < 0.5))
      );
    }, 1600);
    return () => clearInterval(interval);

  }, []);

  // Infinite scroll logic (per column)
  const columnRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    columnRefs.current.forEach((columnDiv, columnIdx) => {
      if (!columnDiv) return;
      const handleScroll = () => {
        if (
          columnDiv.scrollHeight - columnDiv.scrollTop - columnDiv.clientHeight < 10
        ) {
          setColumns((prev) => {
            const newPrev = [...prev];
            // For demo, duplicate first 2 images. Replace with API call as needed.
            newPrev[columnIdx] = [
              ...newPrev[columnIdx],
              ...newPrev[columnIdx].slice(0, 2),
            ];
            return newPrev;
          });
        }
      };
      columnDiv.addEventListener("scroll", handleScroll);
      return () => columnDiv.removeEventListener("scroll", handleScroll);
    });
  }, [columns]);

  return (
    <div className="flex w-full h-[600px] overflow-hidden bg-black">
      {columns.map((col, i) => (
        <div
          key={i}
          ref={(el) => { columnRefs.current[i] = el; }}
          className="flex-1 h-full relative mr-[35px] overflow-y-hidden scrollbar-hide"
          style={{
            transform: "rotate(20deg)",
            transformOrigin: "center center",
            height: "600px",
            scrollBehavior: "smooth",
          }}
        >
          <div
            className="w-full flex flex-col gap-5"
            style={{
              animation: `verticalMove${i} ${speeds[i]}s linear infinite`,
              willChange: "transform",
            }}
          >
            {col.map((src, j) => (
              <div
                key={j}
                className={`w-full aspect-[3/5] overflow-hidden rounded-[10px] shadow-lg transition-transform duration-700`}
                style={{
                  transform: flipStates[i][j] ? "rotateY(180deg)" : undefined,
                }}
              >
                <Image
                  src={src}
                  alt=""
                  className="w-full h-full object-cover rounded-[10px] transition-transform duration-700"
                  style={{
                    transform: flipStates[i][j] ? "rotateY(180deg)" : undefined,
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Keyframes for different columns */}
      <style jsx>{`
        @keyframes verticalMove0 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes verticalMove1 {
          0%, 20% { transform: translateY(0); }
          50%, 70% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        @keyframes verticalMove2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-60%); }
        }
        @keyframes verticalMove3 {
          0%, 30% { transform: translateY(0); }
          50%, 100% { transform: translateY(-70%); }
        }
        @keyframes verticalMove4 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-40%); }
        }
      `}</style>
    </div>
  );
}
