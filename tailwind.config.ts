/** @type {import('tailwindcss').Config} */
import type {Config} from "tailwindcss"

import typographyPlugin from "@tailwindcss/typography";
import formPlugin from "@tailwindcss/forms";

export default {
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#E58D52',
                    50: '#FFFDFD',
                    100: '#FCF3ED',
                    200: '#F8DFCE',
                    300: '#F3CAAF',
                    400: '#EEB690',
                    500: '#EAA171',
                    600: '#E58D52',
                    700: '#E48A4E',
                    800: '#E48749',
                    900: '#E38445',
                    950: '#E38342'
                },
                'gradient-secondary': "#EBD7A0",
            },
        },
    },
    content: {
        files: [
            // all directories and extensions will correspond to your Nuxt config
            "./components/**/*.{vue,js,jsx,mjs,ts,tsx}",
            "./layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
            "./pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
            "./plugins/**/*.{js,ts,mjs}",
            "./composables/**/*.{js,ts,mjs}",
            "./utils/**/*.{js,ts,mjs}",
            "./{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
            "./{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
            "./app.config.{js,ts,mjs}",
            "./app/spa-loading-template.html"
        ]
    },
    plugins: [
        typographyPlugin,
        formPlugin({
            strategy: 'class'
        })
    ],
} satisfies Config