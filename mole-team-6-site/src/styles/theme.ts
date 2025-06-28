export const theme = {
    colors: {
        background: "#0B1120", // deep navy
        surface: "#162447", // dark panel
        surfaceAlt: "#1a1a1a",
        textPrimary: "#E0F2F7", // off-white
        textSecondary: "#A0C8E8", // lighter blue
        accent1: "#3AA655", // softer green, less neon
        accent2: "#5CBC7A", // lighter green for hover
        accent3: "#00E0FF", // electric blue (optional)
        accent4: "#5CBC7A", // subtle shadow green
        danger: "#FF4C4C",
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
        main: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    },
};

export type ThemeType = typeof theme;
