import svg from "@/assets/bg-svg.svg";
import Image from "next/image";

// Exact line coordinates from bg-svg.svg (viewBox 0 0 3143 2112).
const LINES = [
  { x1: 1233.86, y1: 88.49,   x2: 2366.75, y2: 2029.93, dur: 10.0, begin: 0.0  },
  { x1: 1709,    y1: 1054.98, x2: 2318.61, y2: 2110.86, dur: 7.0,  begin: 1.2  },
  { x1: 1707.04, y1: 1057.11, x2: 1586.05, y2: 1269.96, dur: 4.5,  begin: 0.6  },
  { x1: 1330.63, y1: 66.97,   x2: 2483.44, y2: 2074.15, dur: 11.0, begin: 0.9  },
  { x1: 1708.06, y1: 108.79,  x2: 1708.06, y2: 2072.49, dur: 9.5,  begin: 1.6  },
  { x1: 1386.33, y1: 0.50,    x2: 2531.09, y2: 2007.13, dur: 11.5, begin: 2.1  },
  { x1: 1000.12, y1: 2095.34, x2: 1706.19, y2: 900.59,  dur: 8.5,  begin: 0.4  },
  { x1: 0,       y1: 1350.99, x2: 1779,    y2: 1350.99, dur: 10.0, begin: 1.8  },
  { x1: 1584.39, y1: 1269.69, x2: 1732.2,  y2: 1268.4,  dur: 3.5,  begin: 0.3  },
  { x1: 1879.53, y1: 1351.05, x2: 1971.16, y2: 1351.05, dur: 3.0,  begin: 2.6  },
  { x1: 2069.97, y1: 1351.05, x2: 3142.55, y2: 1351.05, dur: 9.5,  begin: 3.1  },
  { x1: 1733.07, y1: 1268.9,  x2: 1781.58, y2: 1351.54, dur: 3.0,  begin: 1.0  },
  { x1: 2175.04, y1: 89.52,   x2: 1760.02, y2: 809.97,  dur: 6.0,  begin: 0.5  },
] as const;


export default function BgSvg() {
  return (
    <div className="absolute min-h-[120vh] w-screen overflow-clip">
      <div className="absolute top-0 -right-[20%] h-full w-full">

        {/* Original background lines image */}
        <Image
          src={svg}
          alt=""
          className="h-[120vh] w-full scale-155 object-cover opacity-50"
        />

        {/* Animation overlay */}
        <svg
          viewBox="0 0 3143 2112"
          preserveAspectRatio="xMidYMid slice"
          className="pointer-events-none absolute inset-0 h-[120vh] w-full scale-155"
          aria-hidden="true"
        >
          <defs>
<filter id="ball-glow" x="-120%" y="-120%" width="340%" height="340%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="ball-glow-soft" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

{/* ── Moving balls along lines ── */}
          {LINES.map((l, i) => {
            const primary = i % 3 !== 2;
            return (
              <circle
                key={`ball-${i}`}
                r={primary ? 5 : 4}
                fill={primary ? "#ff6635" : "rgba(255,255,255,0.8)"}
                filter={primary ? "url(#ball-glow)" : "url(#ball-glow-soft)"}
              >
                <animateMotion
                  path={`M${l.x1},${l.y1} L${l.x2},${l.y2}`}
                  dur={`${l.dur}s`}
                  begin={`${l.begin}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </svg>

      </div>
    </div>
  );
}
