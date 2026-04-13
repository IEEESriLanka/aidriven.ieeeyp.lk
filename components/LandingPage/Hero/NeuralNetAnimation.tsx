// Pure SVG SMIL animation — no JS runtime cost.
// Neural network with signal flow representing AI data processing.

type Connection = {
  x1: number; y1: number;
  x2: number; y2: number;
  dur: number;   // animation duration in seconds
  begin: number; // start delay in seconds
  orange: boolean; // orange signal or faint white
};

// Node coordinates — 4 layers: 5 → 4 → 4 → 3
const INPUT  = [[60, 60],  [60, 140], [60, 220], [60, 300], [60, 380]] as const;
const H1     = [[210, 100],[210, 180],[210, 260],[210, 340]] as const;
const H2     = [[360, 100],[360, 180],[360, 260],[360, 340]] as const;
const OUTPUT = [[510, 140],[510, 220],[510, 300]] as const;

const ALL_NODES = [...INPUT, ...H1, ...H2, ...OUTPUT];

const CONNECTIONS: Connection[] = [
  // Input → H1
  { x1:60,y1:60,  x2:210,y2:100, dur:2.2, begin:0.0,  orange:true  },
  { x1:60,y1:60,  x2:210,y2:180, dur:2.5, begin:0.4,  orange:false },
  { x1:60,y1:140, x2:210,y2:100, dur:2.3, begin:0.7,  orange:false },
  { x1:60,y1:140, x2:210,y2:180, dur:2.6, begin:0.2,  orange:true  },
  { x1:60,y1:140, x2:210,y2:260, dur:2.4, begin:1.0,  orange:false },
  { x1:60,y1:220, x2:210,y2:180, dur:2.1, begin:0.5,  orange:false },
  { x1:60,y1:220, x2:210,y2:260, dur:2.7, begin:0.9,  orange:true  },
  { x1:60,y1:300, x2:210,y2:260, dur:2.3, begin:0.3,  orange:false },
  { x1:60,y1:300, x2:210,y2:340, dur:2.5, begin:1.2,  orange:false },
  { x1:60,y1:380, x2:210,y2:260, dur:2.2, begin:0.6,  orange:true  },
  { x1:60,y1:380, x2:210,y2:340, dur:2.8, begin:1.4,  orange:false },
  // H1 → H2
  { x1:210,y1:100, x2:360,y2:100, dur:2.1, begin:0.6,  orange:false },
  { x1:210,y1:100, x2:360,y2:180, dur:2.4, begin:1.0,  orange:true  },
  { x1:210,y1:180, x2:360,y2:100, dur:2.3, begin:0.8,  orange:false },
  { x1:210,y1:180, x2:360,y2:180, dur:2.6, begin:0.3,  orange:false },
  { x1:210,y1:180, x2:360,y2:260, dur:2.2, begin:1.3,  orange:true  },
  { x1:210,y1:260, x2:360,y2:180, dur:2.5, begin:0.5,  orange:false },
  { x1:210,y1:260, x2:360,y2:260, dur:2.3, begin:1.1,  orange:false },
  { x1:210,y1:260, x2:360,y2:340, dur:2.7, begin:0.7,  orange:true  },
  { x1:210,y1:340, x2:360,y2:260, dur:2.4, begin:1.5,  orange:false },
  { x1:210,y1:340, x2:360,y2:340, dur:2.1, begin:0.9,  orange:false },
  // H2 → Output
  { x1:360,y1:100, x2:510,y2:140, dur:2.2, begin:1.0,  orange:true  },
  { x1:360,y1:100, x2:510,y2:220, dur:2.5, begin:1.4,  orange:false },
  { x1:360,y1:180, x2:510,y2:140, dur:2.3, begin:0.8,  orange:false },
  { x1:360,y1:180, x2:510,y2:220, dur:2.6, begin:1.6,  orange:true  },
  { x1:360,y1:260, x2:510,y2:220, dur:2.4, begin:1.2,  orange:false },
  { x1:360,y1:260, x2:510,y2:300, dur:2.1, begin:1.8,  orange:true  },
  { x1:360,y1:340, x2:510,y2:220, dur:2.7, begin:1.0,  orange:false },
  { x1:360,y1:340, x2:510,y2:300, dur:2.3, begin:2.0,  orange:false },
];

export default function NeuralNetAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {/* Left-side fade so the SVG doesn't overlap the text */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c1c_30%,transparent_60%)]" />

      <svg
        viewBox="0 0 590 440"
        className="absolute right-0 top-1/2 h-[75%] w-auto -translate-y-1/2 opacity-60"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {/* Orange glow filter for signals and highlighted nodes */}
          <filter id="nn-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Subtle white glow for nodes */}
          <filter id="nn-node-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Connection lines ── */}
        {CONNECTIONS.map((c, i) => (
          <line
            key={`line-${i}`}
            x1={c.x1} y1={c.y1}
            x2={c.x2} y2={c.y2}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        ))}

        {/* ── Animated signal dots ── */}
        {CONNECTIONS.map((c, i) => (
          <circle
            key={`sig-${i}`}
            r={c.orange ? 2.8 : 2}
            fill={c.orange ? "hsl(11,83%,58%)" : "rgba(255,255,255,0.55)"}
            filter={c.orange ? "url(#nn-glow)" : undefined}
          >
            <animateMotion
              path={`M${c.x1},${c.y1} L${c.x2},${c.y2}`}
              dur={`${c.dur}s`}
              begin={`${c.begin}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* ── Nodes ── */}
        {ALL_NODES.map(([x, y], i) => {
          const isOutput = i >= INPUT.length + H1.length + H2.length;
          const pulseDur = `${2.4 + (i % 5) * 0.4}s`;
          const pulseBegin = `${(i * 0.35) % 2.5}s`;
          return (
            <g key={`node-${i}`}>
              {/* Pulse ring */}
              <circle
                cx={x} cy={y} r="7"
                fill="none"
                stroke={isOutput ? "hsl(11,83%,52%)" : "rgba(255,255,255,0.18)"}
                strokeWidth="0.8"
                opacity="0"
              >
                <animate
                  attributeName="r"
                  values="5;11;5"
                  dur={pulseDur}
                  begin={pulseBegin}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.5;0"
                  dur={pulseDur}
                  begin={pulseBegin}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Core node */}
              <circle
                cx={x} cy={y} r="3.5"
                fill={isOutput ? "hsl(11,83%,45%)" : "rgba(255,255,255,0.2)"}
                stroke={isOutput ? "hsl(11,83%,65%)" : "rgba(255,255,255,0.35)"}
                strokeWidth="0.8"
                filter={isOutput ? "url(#nn-node-glow)" : undefined}
              >
                <animate
                  attributeName="opacity"
                  values="0.5;1;0.5"
                  dur={`${2 + (i % 4) * 0.5}s`}
                  begin={`${(i * 0.2) % 1.8}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
