module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primarycolor: "#F9A826",
        danger: '#e3342f',
        orange: '#f4623a',
        darkorange: '#cf522f',
        darkgray: '#535353',
      },
      // backgroundImage: {
      //   'hero-pattern': "linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url('../../img/intro.jpg') no-repeat center/cover;",
      //  },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      ephesis: ['Ephesis', 'cursive'],
    },
    boxShadow: {
      sm: '0px 0px 5px rgb(0, 0, 0, 0.5)',
    },
    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '100': 100,
      'auto': 'auto',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
