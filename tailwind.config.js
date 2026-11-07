/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                canvas: "#0A0A0C",
                surface: "#121216",
                elevated: "#1C1C22",
                border: "#24242C",
                background: "#0D0E13"
            },
        },
    },
    plugins: [],
};