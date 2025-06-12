/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Correct paths for your project files
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // DaisyUI plugin should be here
};
