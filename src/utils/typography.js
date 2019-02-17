import Typography from 'typography'

const typography = new Typography({
  title: 'This Town Sucks', // theme name
  googleFonts: [
    {
      name: 'Special Elite',
      styles: ['400'],
    },
    // {
    //   name: 'Cutive',
    //   styles: [
    //     '400',
    //   ],
    // }
  ],
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Special Elite', 'serif'],
  // headerGray: 15,
  bodyFontFamily: ['Special Elite', 'serif'],
  scaleRatio: 3,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    p: {
      textIndent: '22px',
    },
    blockquote: {
      // ...adjustFontSizeTo('19px'),
      // color: gray(41),                   // where does this 'grey' function come from?
      // fontStyle: 'italic',
      // paddingLeft: rhythm(13/16),
      // marginLeft: rhythm(-1),
      // borderLeft: `${rhythm(3/16)} solid ${gray(10)}`,
    },
    'blockquote > :last-child': {
      // marginBottom: 0,
    },
  }),
})

export default typography
