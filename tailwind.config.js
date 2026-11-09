/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                canvas: "#FAFAF9",
                surface: "#FFFFFF",
                elevated: "#F4F4F5",
                border: "#E4E4E7",
                background: "#FAFAF9",
                accent: {
                    DEFAULT: "#D9383A",
                    subtle: "#FFF1F2",
                    border: "#FECDD3",
                    text: "#BE123C",
                    hover: "#C53030",
                },
                ink: {
                    DEFAULT: "#18181B",
                    muted: "#71717A",
                    subtle: "#A1A1AA",
                },
            },
        },
    },
    plugins: [],
};
