module.exports = {
    darkMode: false, // or 'media' or 'class'
    plugins: [ require( "@tailwindcss/typography" ) ],
    purge: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}" ],
    theme: {
        extend: {
            boxShadow: {
                medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
                small: "0 5px 10px rgba(0, 0, 0, 0.12)",
            },
            colors: {
                "accent-1": "#FAFAFA",
                "accent-2": "#EAEAEA",
            },
            fontFamily: {
                sans:
                '-apple-system, "Helvetica Neue", "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            },
            fontSize: {
                "5xl": "2.5rem",
                "6xl": "2.75rem",
                "7xl": "4.5rem",
                "8xl": "6.25rem",
            },
            letterSpacing: {
                tighter: "-.04em",
            },
            lineHeight: {
                tight: 1.2,
            },
            spacing: {
                28: "7rem",
            },
        },
    },
    variants: {
        extend: {},
    },
}
