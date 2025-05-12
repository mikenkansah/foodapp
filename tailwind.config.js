/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Sen-Regular"], // Add custom font here
        customBold: ["Sen-Bold"], // If you have a bold version
      },
    },
  },
  plugins: [],
};
