import React, { useEffect, useState } from "react";

const App = () => {
  const [colors, setColors] = useState([]);
  const [locked, setLocked] = useState([]);
  const [mode, setMode] = useState("solid");
  const [direction, setDirection] = useState("45deg");

  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  const generatePalette = () => {
    if (mode === "solid") {
      const color = randomColor();
      setColors([color]);
      setLocked([false]);
    } else {
      const palette = [];
      const lockState = [];

      for (let i = 0; i < 5; i++) {
        if (locked[i]) {
          palette.push(colors[i]);
          lockState.push(true);
        } else {
          palette.push(randomColor());
          lockState.push(false);
        }
      }

      setColors(palette);
      setLocked(lockState);
    }
  };

  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
    alert("Copied " + color);
  };

  const downloadPalette = () => {
    const data = colors.join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = "color-palette.txt";
    link.href = URL.createObjectURL(blob);
    link.click();
  };

  const background =
    mode === "gradient" && colors.length > 1
      ? `linear-gradient(${direction}, ${colors.join(",")})`
      : colors[0] || "#111";

  // SPACE key generate
  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        generatePalette();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.15)",
          padding: 30,
          borderRadius: 15,
          width: 360,
          color: "white",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h2>🎨 Color Generator</h2>

        {/* Mode */}
        <div style={{ marginBottom: 10 }}>
          <label>
            <input
              type="radio"
              value="solid"
              checked={mode === "solid"}
              onChange={() => setMode("solid")}
            />
            Solid
          </label>

          <label style={{ marginLeft: 15 }}>
            <input
              type="radio"
              value="gradient"
              checked={mode === "gradient"}
              onChange={() => setMode("gradient")}
            />
            Gradient
          </label>
        </div>

        {/* Gradient Direction */}
        {mode === "gradient" && (
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            style={{ marginBottom: 15, padding: 5 }}
          >
            <option value="45deg">45°</option>
            <option value="90deg">90°</option>
            <option value="135deg">135°</option>
            <option value="180deg">180°</option>
          </select>
        )}

        <button
          onClick={generatePalette}
          style={{
            padding: 10,
            marginRight: 10,
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Generate
        </button>

        <button
          onClick={downloadPalette}
          style={{
            padding: 10,
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Download
        </button>

        <ul style={{ marginTop: 20 }}>
          {colors.map((color, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10,
                padding: 10,
                borderRadius: 10,
                background: color,
              }}
            >
              {color}

              <button
                onClick={() => copyColor(color)}
                style={{
                  marginLeft: "auto",
                  padding: "4px 8px",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                Copy
              </button>
            </li>
          ))}
        </ul>

        <p style={{ fontSize: 12, opacity: 0.7 }}>
          Press <b>SPACE</b> to generate palette
        </p>
      </div>
    </div>
  );
};

export default App;
