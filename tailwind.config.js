/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},

        screens: {
            tablet: '740px',
            desktop: '1024px',
        },
        minWidth: {
            headerWidth: '1200px',
        },
    },
    plugins: [],
};
