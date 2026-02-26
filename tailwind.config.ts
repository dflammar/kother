import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: "#0f2c5e",
                    light: "#1a3f82",
                    dark: "#091d3e",
                },
                brand: {
                    teal: "#0d9488",
                    emerald: "#10b981",
                },
            },
            fontFamily: {
                cairo: ["Cairo", "sans-serif"],
            },
            backgroundImage: {
                "hero-gradient": "linear-gradient(135deg, #0f2c5e 0%, #1a3f82 60%, #0d9488 100%)",
            },
            boxShadow: {
                card: "0 4px 24px rgba(15, 44, 94, 0.08)",
                "card-hover": "0 8px 40px rgba(15, 44, 94, 0.16)",
            },
        },
    },
    plugins: [],
};

export default config;
