import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type ColorTheme = "blue" | "purple" | "emerald" | "green-gold" | "charcoal-orange" | string;

interface ThemeProviderState {
  theme: Theme;
  colorTheme: ColorTheme;
  setTheme: (theme: Theme) => void;
  setColorTheme: (colorTheme: ColorTheme) => void;
}

const initialState: ThemeProviderState = {
  theme: "light",
  colorTheme: "purple",
  setTheme: () => null,
  setColorTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultColorTheme?: ColorTheme;
  storageKey?: string;
  colorStorageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  defaultColorTheme = "purple",
  storageKey = "ampersand-ui-theme",
  colorStorageKey = "ampersand-ui-color-theme-v2",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  
  const [colorTheme, setColorThemeState] = useState<ColorTheme>(
    () => (localStorage.getItem(colorStorageKey) as ColorTheme) || defaultColorTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Handle Light/Dark Mode
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Handle Color Theme
    root.classList.remove(
      "theme-blue",
      "theme-purple",
      "theme-emerald",
      "theme-green-gold",
      "theme-charcoal-orange"
    );

    // Clear previous custom styles
    const propertiesToRemove = [
      "--primary",
      "--primary-foreground",
      "--secondary",
      "--secondary-foreground",
      "--muted",
      "--muted-foreground",
      "--accent",
      "--accent-foreground",
      "--ring",
      "--gradient-primary",
      "--gradient-warm",
      "--hero-left-bg",
      "--hero-right-bg",
      "--hero-right-title",
      "--hero-right-desc",
      "--hero-right-stats-val",
      "--card-shadow",
      "--card-shadow-hover",
      "--glass-border",
      "--glass-bg"
    ];
    propertiesToRemove.forEach((p) => root.style.removeProperty(p));

    if (colorTheme.startsWith("#")) {
      // Custom hex color theme
      const hex = colorTheme.replace(/^#/, "");
      const r = parseInt(hex.substring(0, 2), 16) / 255;
      const g = parseInt(hex.substring(2, 4), 16) / 255;
      const b = parseInt(hex.substring(4, 6), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0;
      let s = 0;
      const l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }

      const hRound = Math.round(h * 360);
      const sRound = Math.round(s * 100);
      const lRound = Math.round(l * 100);

      const primary = `${hRound} ${sRound}% ${lRound}%`;
      const primaryFg = lRound > 65 ? "214 68% 14%" : "0 0% 100%";
      const ring = primary;

      let secondary = "";
      let secondaryFg = primary;
      let muted = "";
      let mutedFg = "";
      let accent = "";
      let accentFg = primary;

      let heroLeftBg = "";
      let heroRightBg = "";
      let heroRightTitle = "";
      let heroRightDesc = "";
      const heroRightStatsVal = `hsl(${hRound} ${sRound}% ${lRound}%)`;
      const gradientPrimary = `linear-gradient(135deg, hsl(${hRound} ${sRound}% ${lRound}%) 0%, hsl(${hRound} ${sRound}% ${Math.max(0, lRound - 12)}%) 100%)`;
      let gradientWarm = "";
      const cardShadow = `0 4px 24px -4px hsla(${hRound}, ${sRound}%, ${lRound}%, 0.08)`;
      const cardShadowHover = `0 20px 50px -12px hsla(${hRound}, ${sRound}%, ${lRound}%, 0.2)`;
      const glassBorder = `hsla(${hRound}, ${sRound}%, ${lRound}%, 0.15)`;
      let glassBg = "";

      if (theme === "dark") {
        secondary = `${hRound} ${Math.max(10, sRound - 15)}% 17%`;
        muted = `${hRound} ${Math.max(10, sRound - 15)}% 17%`;
        mutedFg = `${hRound} ${Math.max(10, sRound - 20)}% 72%`;
        accent = secondary;
        accentFg = `${hRound} ${sRound}% ${Math.min(95, lRound + 20)}%`;
        
        heroLeftBg = `hsl(${hRound} ${Math.max(15, sRound - 35)}% 8%)`;
        heroRightBg = `hsl(${hRound} ${Math.max(15, sRound - 30)}% 14%)`;
        heroRightTitle = `hsl(${hRound} ${Math.max(10, sRound - 40)}% 98%)`;
        heroRightDesc = `hsl(${hRound} 15% 70%)`;
        gradientWarm = `linear-gradient(135deg, hsl(${hRound} ${Math.max(15, sRound - 30)}% 8%) 0%, hsl(${hRound} ${Math.max(15, sRound - 30)}% 5%) 100%)`;
        glassBg = `rgba(${Math.round(r * 255 * 0.15)}, ${Math.round(g * 255 * 0.15)}, ${Math.round(b * 255 * 0.15)}, 0.7)`;
      } else {
        secondary = `${hRound} ${Math.min(100, sRound + 10)}% 96%`;
        muted = `${hRound} ${Math.min(100, sRound + 10)}% 96%`;
        mutedFg = `${hRound} 20% 41%`;
        accent = secondary;
        accentFg = primary;

        heroLeftBg = `hsl(${hRound} ${Math.max(15, sRound - 30)}% 15%)`;
        heroRightBg = `hsl(${hRound} ${Math.max(10, sRound - 40)}% 98%)`;
        heroRightTitle = `hsl(${hRound} ${Math.max(15, sRound - 30)}% 15%)`;
        heroRightDesc = `hsl(${hRound} 15% 45%)`;
        gradientWarm = `linear-gradient(135deg, hsl(${hRound} ${Math.max(10, sRound - 40)}% 98%) 0%, hsl(${hRound} ${Math.min(100, sRound + 10)}% 96%) 100%)`;
        glassBg = `rgba(${Math.round(r * 255 * 0.1 + 230)}, ${Math.round(g * 255 * 0.1 + 230)}, ${Math.round(b * 255 * 0.1 + 230)}, 0.7)`;
      }

      root.style.setProperty("--primary", primary);
      root.style.setProperty("--primary-foreground", primaryFg);
      root.style.setProperty("--secondary", secondary);
      root.style.setProperty("--secondary-foreground", secondaryFg);
      root.style.setProperty("--muted", muted);
      root.style.setProperty("--muted-foreground", mutedFg);
      root.style.setProperty("--accent", accent);
      root.style.setProperty("--accent-foreground", accentFg);
      root.style.setProperty("--ring", ring);
      
      root.style.setProperty("--gradient-primary", gradientPrimary);
      root.style.setProperty("--gradient-warm", gradientWarm);
      root.style.setProperty("--hero-left-bg", heroLeftBg);
      root.style.setProperty("--hero-right-bg", heroRightBg);
      root.style.setProperty("--hero-right-title", heroRightTitle);
      root.style.setProperty("--hero-right-desc", heroRightDesc);
      root.style.setProperty("--hero-right-stats-val", heroRightStatsVal);
      root.style.setProperty("--card-shadow", cardShadow);
      root.style.setProperty("--card-shadow-hover", cardShadowHover);
      root.style.setProperty("--glass-border", glassBorder);
      root.style.setProperty("--glass-bg", glassBg);
    } else {
      root.classList.add(`theme-${colorTheme}`);
    }
  }, [theme, colorTheme]);

  const setTheme = (theme: Theme) => {
    localStorage.setItem(storageKey, theme);
    setThemeState(theme);
  };

  const setColorTheme = (colorTheme: ColorTheme) => {
    localStorage.setItem(colorStorageKey, colorTheme);
    setColorThemeState(colorTheme);
  };

  const value = {
    theme,
    colorTheme,
    setTheme,
    setColorTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
