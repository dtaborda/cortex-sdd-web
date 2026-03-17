"use client";

interface FlagIconProps {
  country: "AR" | "US" | "BR";
  className?: string;
}

export function FlagIcon({ country, className = "" }: FlagIconProps) {
  switch (country) {
    case "AR":
      return (
        <svg
          viewBox="0 0 24 16"
          className={className}
          role="img"
          aria-label="Argentina"
        >
          <rect width="24" height="16" rx="1.5" fill="#75AADB" />
          <rect y="5.33" width="24" height="5.34" fill="#FFFFFF" />
          {/* Sol de Mayo */}
          <circle cx="12" cy="8" r="1.8" fill="#F6B40E" />
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x1 = 12 + 2.2 * Math.cos(angle);
            const y1 = 8 + 2.2 * Math.sin(angle);
            const x2 = 12 + 3.2 * Math.cos(angle);
            const y2 = 8 + 3.2 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#F6B40E"
                strokeWidth="0.6"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      );

    case "US":
      return (
        <svg
          viewBox="0 0 24 16"
          className={className}
          role="img"
          aria-label="United States"
        >
          {/* Stripes */}
          <rect width="24" height="16" rx="1.5" fill="#B22234" />
          {[1, 3, 5, 7, 9, 11].map((i) => (
            <rect
              key={i}
              y={(i * 16) / 13}
              width="24"
              height={16 / 13}
              fill="#FFFFFF"
            />
          ))}
          {/* Blue canton */}
          <rect width="9.6" height="8.6" fill="#3C3B6E" rx="1.5" />
          {/* Simplified stars (dots) */}
          {[
            [1.6, 1.4],
            [3.2, 1.4],
            [4.8, 1.4],
            [6.4, 1.4],
            [8.0, 1.4],
            [2.4, 2.8],
            [4.0, 2.8],
            [5.6, 2.8],
            [7.2, 2.8],
            [1.6, 4.2],
            [3.2, 4.2],
            [4.8, 4.2],
            [6.4, 4.2],
            [8.0, 4.2],
            [2.4, 5.6],
            [4.0, 5.6],
            [5.6, 5.6],
            [7.2, 5.6],
            [1.6, 7.0],
            [3.2, 7.0],
            [4.8, 7.0],
            [6.4, 7.0],
            [8.0, 7.0],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="0.45" fill="#FFFFFF" />
          ))}
        </svg>
      );

    case "BR":
      return (
        <svg
          viewBox="0 0 24 16"
          className={className}
          role="img"
          aria-label="Brazil"
        >
          {/* Green background */}
          <rect width="24" height="16" rx="1.5" fill="#009739" />
          {/* Yellow diamond */}
          <polygon points="12,1.5 22.5,8 12,14.5 1.5,8" fill="#FEDD00" />
          {/* Blue circle */}
          <circle cx="12" cy="8" r="3.8" fill="#002776" />
          {/* White arc */}
          <path
            d="M 8.5 8.5 Q 12 6 15.5 8.5"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      );

    default:
      return null;
  }
}
