module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   extend: {
  //     // backgroundImage: {
  //     //   'folder-about': "url('../src/images/folder.JPG')",
  //     // }
  //   },
  // },
  theme: {
    screens: {
      sx: '250px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    backgroundImage: {
      'folder': "url('/src/images/folder.jpg')",
      'folder2': "url('/src/images/folder2.jpg')",
      'folder3': "url('/src/images/folder3.jpg')",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      grayscale: {
        40: '40%',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
