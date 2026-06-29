import React, { useState, useRef, useEffect } from "react";
import { useTheme, ColorTheme } from "./ThemeProvider";
import { Settings, Sun, Moon, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function hslToHex(h: number, s: number, l: number): string {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function getHueFromHex(hex: string): number {
  if (!hex.startsWith("#")) return 120;
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  if (isNaN(r) || isNaN(g) || isNaN(b)) return 120;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0;
  if (max !== min) {
    let d = max - min;
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return Math.round(h * 360);
}

export function ThemeSelector() {
  const { theme, colorTheme, setTheme, setColorTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const colorsList: { id: ColorTheme; name: string; hex: string; bgClass: string }[] = [
    { id: "blue", name: "Blue", hex: "#2563EB", bgClass: "bg-[#2563EB]" },
    { id: "purple", name: "Purple", hex: "#DE88CC", bgClass: "bg-[#DE88CC]" },
    { id: "emerald", name: "Emerald", hex: "#2E8B57", bgClass: "bg-[#2E8B57]" },
    { id: "green-gold", name: "Green", hex: "#B89B3C", bgClass: "bg-[#B89B3C]" },
    { id: "charcoal-orange", name: "Orange", hex: "#FF7A00", bgClass: "bg-[#FF7A00]" },
  ];

  const isCustomColor = !["blue", "purple", "emerald", "green-gold", "charcoal-orange"].includes(colorTheme);

  return (
    <div 
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end" 
      ref={panelRef}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 rounded-2xl border border-warm-100/20 glass-strong shadow-2xl p-5 text-foreground"
          >
            <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
              <h4 className="font-display text-lg font-bold text-primary">Customize Theme</h4>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full hover:bg-muted"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* APPEARANCE SECTION */}
            <div className="space-y-2 mb-5">
              <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground font-body">
                Appearance
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTheme("light")}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg border text-sm font-semibold transition-all duration-300 font-body ${
                    theme === "light"
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-muted/30 border-border hover:bg-muted/55 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  <span>Light</span>
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg border text-sm font-semibold transition-all duration-300 font-body ${
                    theme === "dark"
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-muted/30 border-border hover:bg-muted/55 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Moon className="w-4 h-4" />
                  <span>Dark</span>
                </button>
              </div>
            </div>

            {/* COLOR THEME SECTION */}
            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground font-body">
                Color Scheme
              </label>
              <div className="grid grid-cols-6 gap-2 pt-1">
                {colorsList.map((color) => {
                  const isActive = colorTheme === color.id;
                  return (
                    <button
                      key={color.id}
                      onClick={() => setColorTheme(color.id)}
                      className="group relative flex flex-col items-center gap-1.5 focus:outline-none"
                      title={color.name}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md border-2 transition-all duration-300 hover:scale-110 ${color.bgClass} ${
                          isActive
                            ? "border-primary scale-105"
                            : "border-transparent"
                        }`}
                      >
                        {isActive && (
                          <Check className="w-5 h-5 text-white drop-shadow-md" />
                        )}
                      </div>
                      <span className="text-[10px] font-medium font-body text-muted-foreground group-hover:text-foreground transition-colors truncate w-full text-center">
                        {color.name}
                      </span>
                    </button>
                  );
                })}

                {/* Custom Color Selector */}
                <button
                  onClick={() => {
                    if (!isCustomColor) {
                      setColorTheme("#10B981");
                    }
                  }}
                  className="group relative flex flex-col items-center gap-1.5 focus:outline-none"
                  title="Choose custom color"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md border-2 transition-all duration-300 hover:scale-110 relative bg-[conic-gradient(from_0deg,_#ff0000,_#ffff00,_#00ff00,_#00ffff,_#0000ff,_#ff00ff,_#ff0000)] ${
                      isCustomColor
                        ? "border-primary scale-105"
                        : "border-transparent"
                    }`}
                  >
                    {isCustomColor && (
                      <Check className="w-5 h-5 text-white drop-shadow-md pointer-events-none" />
                    )}
                  </div>
                  <span className="text-[10px] font-medium font-body text-muted-foreground group-hover:text-foreground transition-colors truncate w-full text-center pointer-events-none">
                    Custom
                  </span>
                </button>
              </div>
            </div>

            {/* Custom Color Picker Slider */}
            {isCustomColor && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2 pt-3 border-t border-border/40 mt-3 overflow-hidden"
              >
                <style>{`
                  .hue-slider {
                    -webkit-appearance: none;
                    appearance: none;
                  }
                  .hue-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background: white;
                    border: 2px solid rgba(0,0,0,0.2);
                    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
                    cursor: pointer;
                    transition: transform 0.1s;
                  }
                  .hue-slider::-webkit-slider-thumb:hover {
                    transform: scale(1.2);
                  }
                  .hue-slider::-moz-range-thumb {
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background: white;
                    border: 2px solid rgba(0,0,0,0.2);
                    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
                    cursor: pointer;
                    transition: transform 0.1s;
                  }
                  .hue-slider::-moz-range-thumb:hover {
                    transform: scale(1.2);
                  }
                `}</style>
                <div className="flex justify-between items-center text-[10px] font-body text-muted-foreground">
                  <span>Adjust Color Tone</span>
                  <span className="font-mono text-primary font-bold">{colorTheme.toUpperCase()}</span>
                </div>
                <div className="relative flex items-center h-4">
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={getHueFromHex(colorTheme)}
                    onChange={(e) => {
                      const hue = parseInt(e.target.value);
                      const hex = hslToHex(hue, 75, 45);
                      setColorTheme(hex);
                    }}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer outline-none transition-all hue-slider"
                    style={{
                      background: "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)"
                    }}
                  />
                </div>
              </motion.div>
            )}

          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING ACTION BUTTON */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full flex items-center justify-center glass border border-warm-100/20 shadow-lg text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Settings className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}
