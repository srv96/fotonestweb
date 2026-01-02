/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: {
                    500: '#3B82F6',
                    600: '#2563EB',
                },
                gray: {
                    400: '#9CA3AF',
                },
            },
            backgroundImage: {
                'radial-brand': 'radial-gradient(circle at 50% 0%, #2c3e50, #000000 80%)',
                'gradient-primary': 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
            },
            borderRadius: {
                'pill': '99px',
                'card': '16px',
            },
        },
    },
    plugins: [],
}
