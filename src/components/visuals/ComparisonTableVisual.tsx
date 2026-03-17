"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
  locale?: string;
}

export function ComparisonTableVisual({ data, accent, locale }: Props) {
  const isEn = locale === "en";
  const headers = (data.headers as string[]) || (isEn ? ["Before", "After"] : ["Antes", "Después"]);
  const rows = (data.rows as string[][]) || [];

  return (
    <div className="w-full max-w-2xl overflow-x-auto">
      {/* Headers */}
      <div
        className="grid gap-0.5"
        style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}
      >
        {headers.map((header, i) => (
          <div
            key={i}
            className="px-2 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider rounded-t-lg"
            style={{
              backgroundColor: i === 0 ? "#27272A" : `${accent}15`,
              color: i === 0 ? "#A1A1AA" : accent,
            }}
          >
            {header}
          </div>
        ))}
      </div>

      {/* Rows */}
      <div className="space-y-0.5">
        {rows.map((row, rowIdx) => (
          <motion.div
            key={rowIdx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + rowIdx * 0.08 }}
            className="grid gap-0.5"
            style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}
          >
            {row.map((cell, cellIdx) => (
              <div
                key={cellIdx}
                className="px-2 sm:px-5 py-2 sm:py-4 text-sm sm:text-base break-words"
                style={{
                  backgroundColor: "#18181B",
                  color: cellIdx === 0 ? "#A1A1AA" : "#FAFAFA",
                }}
              >
                {cell}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
