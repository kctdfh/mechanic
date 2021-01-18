const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    content: [
      './components/*.html',
      './dist/*.js'],
    defaultExtractor: content =>  content.match(/[A-Za-z0-9-_:!\/]+/g) || [],
  },
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      gray: {
        25: "#F9FAFA",
        50: "#F3F4F4",
        100: "#DBDEDF",
        200: "#C3C7C8",
        300: "#A7ADB2",
        400: "#8D959B",
        500: "#6E7880",
        600: "#5C656C",
        700: "#495055",
        800: "#393D41",
        900: "#25282B",
      },
      blue: {
        50: "#F1F9FF",
        100: "#CFE8FF",
        150: "#A7D4FF",
        250: "#7BBFFF",
        350: "#50ABFF",
        500: "#2595FF",
        650: "#257EE7",
        750: "#246DD3",
        850: "#2155BB",
      },
      red: {
        50: "#FFF2F4",
        100: "#FFDBDD",
        150: "#F7B2B0",
        250: "#E8847E",
        350: "#E66156",
        450: "#EB4A34",
        600: "#DF3826",
        750: "#C72A1D",
        900: "#B21B0C",
      },
      yellow: {
        50: "#FFF8E1",
        100: "#FEECB3",
        200: "#FEE082",
        300: "#FDD550",
        400: "#FDCA2A",
        600: "#FDB305",
        700: "#FDA004",
        850: "#FD8203",
        900: "#FD6F02",
      },
      green: {
        50: "#E4F6E9",
        100: "#BEE8C8",
        200: "#93D8A4",
        300: "#61CA7F",
        400: "#33BE63",
        600: "#00A33E",
        700: "#009132",
        850: "#006B19",
        900: "#006012",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    fontSize: {
      xsm: ["0.6875rem", "0.875rem"], // 11px
      sm: ["0.75rem", "1rem"], // 12px
      md: ["0.875rem", "1.25rem"], // 14px
      base: ["1rem", "1.5rem"], // 16px
      lg: ["1.25rem", "1.75rem"], // 20px
      xl: ["1.375rem", "2.25rem"], // 22px
    },
    extend: {
      spacing: {
        0: "0px",
        px: "1px",
        0.5: "0.125rem",
        1: "0.250rem",
        1.5: "0.375rem",
        2: "0.500rem",
        2.5: "0.625rem",
        3: "0.750rem",
        3.5: "0.875rem",
        4: "1.000rem",
        4.5: "1.125rem",
        5: "1.250rem",
        5.5: "1.375rem",
        6: "1.500rem",
        6.5: "1.625rem",
        7: "1.750rem",
        7.5: "1.875rem",
        8: "2.000rem",
        8.5: "2.125rem",
        9: "2.250rem",
        9.5: "2.375rem",
        10: "2.500rem",
        10.5: "2.625rem",
        11: "2.750rem",
        11.5: "2.875rem",
        12: "3.000rem",
        12.5: "3.125rem",
        13: "3.250rem",
        13.5: "3.375rem",
        14: "3.500rem",
        14.5: "3.625rem",
        15: "3.750rem",
        15.5: "3.875rem",
        16: "4.000rem",
        16.5: "4.125rem",
        17: "4.250rem",
        17.5: "4.375rem",
        18: "4.500rem",
        18.5: "4.625rem",
        19: "4.750rem",
        19.5: "4.875rem",
        20: "5.000rem",
        20.5: "5.125rem",
        21: "5.250rem",
        21.5: "5.375rem",
        22: "5.500rem",
        22.5: "5.625rem",
        23: "5.750rem",
        23.5: "5.875rem",
        24: "6.000rem",
        24.5: "6.125rem",
        25: "6.250rem",
        25.5: "6.375rem",
        26: "6.500rem",
        26.5: "6.625rem",
        27: "6.750rem",
        27.5: "6.875rem",
        28: "7.000rem",
        28.5: "7.125rem",
        29: "7.250rem",
        29.5: "7.375rem",
        30: "7.500rem",
        30.5: "7.625rem",
        31: "7.750rem",
        31.5: "7.875rem",
        32: "8.000rem",
        32.5: "8.125rem",
        33: "8.250rem",
        33.5: "8.375rem",
        34: "8.500rem",
        34.5: "8.625rem",
        35: "8.750rem",
        35.5: "8.875rem",
        36: "9.000rem",
        36.5: "9.125rem",
        37: "9.250rem",
        37.5: "9.375rem",
        38: "9.500rem",
        38.5: "9.625rem",
        39: "9.750rem",
        39.5: "9.875rem",
        40: "10.000rem",
        40.5: "10.130rem",
        41: "10.250rem",
        41.5: "10.380rem",
        42: "10.500rem",
        42.5: "10.630rem",
        43: "10.750rem",
        43.5: "10.880rem",
        44: "11.000rem",
        44.5: "11.130rem",
        45: "11.250rem",
        45.5: "11.380rem",
        46: "11.500rem",
        46.5: "11.630rem",
        47: "11.750rem",
        47.5: "11.880rem",
        48: "12.000rem",
        48.5: "12.130rem",
        49: "12.250rem",
        49.5: "12.380rem",
        50: "12.500rem",
        50.5: "12.630rem",
        51: "12.750rem",
        51.5: "12.880rem",
        52: "13.000rem",
        52.5: "13.130rem",
        53: "13.250rem",
        53.5: "13.380rem",
        54: "13.500rem",
        54.5: "13.630rem",
        55: "13.750rem",
        55.5: "13.880rem",
        56: "14.000rem",
        56.5: "14.130rem",
        57: "14.250rem",
        57.5: "14.380rem",
        58: "14.500rem",
        58.5: "14.630rem",
        59: "14.750rem",
        59.5: "14.880rem",
        60: "15.000rem",
        60.5: "15.130rem",
        61: "15.250rem",
        61.5: "15.380rem",
        62: "15.500rem",
        62.5: "15.630rem",
        63: "15.750rem",
        63.5: "15.880rem",
        64: "16.000rem",
        64.5: "16.130rem",
        65: "16.250rem",
        65.5: "16.380rem",
        66: "16.500rem",
        66.5: "16.630rem",
        67: "16.750rem",
        67.5: "16.880rem",
        68: "17.000rem",
        68.5: "17.130rem",
        69: "17.250rem",
        69.5: "17.380rem",
        70: "17.500rem",
        70.5: "17.630rem",
        71: "17.750rem",
        71.5: "17.880rem",
        72: "18.000rem",
        72.5: "18.130rem",
        73: "18.250rem",
        73.5: "18.380rem",
        74: "18.500rem",
        74.5: "18.630rem",
        75: "18.750rem",
        75.5: "18.880rem",
        76: "19.000rem",
        76.5: "19.130rem",
        77: "19.250rem",
        77.5: "19.380rem",
        78: "19.500rem",
        78.5: "19.630rem",
        79: "19.750rem",
        79.5: "19.880rem",
        80: "20.000rem",
        80.5: "20.130rem",
        81: "20.250rem",
        81.5: "20.380rem",
        82: "20.500rem",
        82.5: "20.630rem",
        83: "20.750rem",
        83.5: "20.880rem",
        84: "21.000rem",
        84.5: "21.130rem",
        85: "21.250rem",
        85.5: "21.380rem",
        86: "21.500rem",
        86.5: "21.630rem",
        87: "21.750rem",
        87.5: "21.880rem",
        88: "22.000rem",
        88.5: "22.130rem",
        89: "22.250rem",
        89.5: "22.380rem",
        90: "22.500rem",
        90.5: "22.630rem",
        91: "22.750rem",
        91.5: "22.880rem",
        92: "23.000rem",
        92.5: "23.130rem",
        93: "23.250rem",
        93.5: "23.380rem",
        94: "23.500rem",
        94.5: "23.630rem",
        95: "23.750rem",
        95.5: "23.880rem",
        96: "24.000rem",
      },
      borderWidth: {
        0.5: "0.5px",
        px:"1px",
      },
      minWidth: {
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
      },
      minHeight: {
        xsm: "1.5rem",
        sm: "3rem",
        md: "3.5rem",
        lg: "4rem",
        'input-lg': "2.5rem",
        'input-md': "2rem",
        'input-sm': "1.5rem",
      },
      maxHeight: {
        xsm: "1.5rem",
        sm: "3rem",
        md: "3.5rem",
        lg: "4rem",
      },
      height: {
        border: "2px",
      },
      borderRadius: {
        0.5: "0.125rem",
      },
      lineHeight: {
        0: 0,
      },
      boxShadow: {
        "border-r": "inset -1px 0px 0px #DBDEDF",
        "border-l": "1px 0px 0px #DBDEDF",
        "border-t": "inset 0px 1px 0px #DBDEDF",
        "border-b": "inset 0px -1px 0px #DBDEDF",
        "segment-r": "inset -1px 1px 0px #DBDEDF, inset -1px -1px 0px #DBDEDF",
        "segment-l": "inset 1px 1px 0px #DBDEDF, inset 1px -1px 0px #DBDEDF",
        "segment-t": "inset -1px 0px 0px #DBDEDF, inset 1px 0px 0px #DBDEDF, inset 0px 1px 0px #DBDEDF",
        "segment-b": "inset -1px 0px 0px #DBDEDF, inset 1px 0px 0px #DBDEDF, inset 0px -1px 0px #DBDEDF",
        "segment-center": "inset 0px 1px 0px #DBDEDF, inset 0px -1px 0px #DBDEDF"
      },
      outline: {
        0: '0px'
      }
    },
  },
  variants: {
    extend: {
      textColor: [
        "visited",
        "group-disabled",
        "disabled",
        "active",
        "focus-visible",
        "group-focus-within",
        "group-focus-visible",
        "group-active",
        "group-visited",
        "last",
      ],
      backgroundColor: [
        "checked",
        "visited",
        "group-disabled",
        "group-hover",
        "disabled",
        "focus",
        "active",
        "important",
        "focus-visible",
        "group-focus-within",
        "group-focus-visible",
        "group-active",
        "group-visited",
      ],
      padding: ["important"],
      minHeight: ["important"],
      margin: ["important"],
      fontSize: ["important"],
      fontWeight: ["important", "hover"],
      borderCollapse: ["important"],
      borderColor: [
        "checked",
        "important",
        "focus-within",
        "group-disabled",
        "disabled",
        "active",
        "hover",
        "focus-visible",
        "group-focus-within",
        "group-focus-visible",
        "group-active",
        "group-visited",
      ],
      borderOpacity: ["important"],
      borderRadius: ["important"],
      lineHeight: ["important"],
      borderStyle: ["important"],
      borderWidth: [
        "checked",
        "important",
        "group-disabled",
        "disabled",
        "active",
        "hover",
        "focus-visible",
        "group-focus-within",
        "group-focus-visible",
        "group-active",
        "group-visited",
        "group-hover",
      ],
      ringColor: ["hover", "group-hover", "disabled"],
      ringWidth: ["hover", "group-hover", "disabled", "group-disabled"],
      outline: ["focus-visible","focus"],
      cursor: ["disabled", "group-disabled"],
      placeholderColor: ["group-disabled", "disabled"],
      pointerEvents: ["group-disabled", "important"],
      boxShadow: ["active", "focus-within"]
    },
  },
  plugins: [
    require("tailwindcss-interaction-variants"),
    require("tailwindcss-important")()
  ],
};