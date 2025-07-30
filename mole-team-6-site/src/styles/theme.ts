export const theme = {
  colors: {
    background: "#0D0B1F",      // deep cosmic purple
    surface: "#1C163E",         // dark panel purple
    surfaceAlt: "#2A214B",      // slightly lighter panel
    textPrimary: "#F2E9FF",     // soft off-white with violet hue
    textSecondary: "#C3B6FF",   // pale purple
    accent1: "#FF5ACD",         // pink nebula (main accent)
    accent2: "#A855F7",         // purple glow (hover or alt accent)
    accent3: "#00F0FF",         // bright neon blue (buttons or highlights)
    accent4: "#FFAD4D",         // asteroid orange (minor action color)
    danger: "#FF4C4C",          // red alert
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "32px",
  },
  navHeight: "64px",
  fonts: {
    pixel: `'Share Tech Mono', 'Courier New', monospace`,
    main: `'Comic Neue', 'Segoe UI', sans-serif`, // cartoon-friendly main font
  },
}


export type ThemeType = typeof theme;
