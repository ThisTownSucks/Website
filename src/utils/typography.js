import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: 'Special Elite',
      styles: [
        '400',
      ],
    },
    {
      name: 'Cutive',
      styles: [
        '400',
      ],
    }
  ],
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Special Elite', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Cutive', 'serif'],
})

export default typography