import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          myGreen: { value: "#0FEE0F" },
          myRed: { value: "#EE0F0F" },
          myWhite: { value: "#FFFFFF" },
          myBlack: { value: "#333333" },
        },
        fonts: {
          body: {
            value:
              "Helvetica Neue, Helvetica, Hiragino Sans, Hiragino Kaku Gothic ProN, Arial, Yu Gothic, Meiryo, sans-serif",
          },
        },
      },
      semanticTokens: {
        colors: {
          primary: { value: "{colors.myGreen}" },
          secondary: { value: "{colors.myWhite}" },
          danger: { value: "{colors.myRed}" },
        },
      },
      breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },

  conditions: {
    extend: {
      groupHover: "[role=group]:where(:hover, [data-hover]) &",
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
})
