import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
    ].join(','),
  },
  overrides: {
    MuiButton: {
      root: {
        background: "linear-gradient(45deg, #0c504c 30%, #00746f 90%)",
        borderRadius: 10,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(82, 78, 78, .5)',
      }
    },
    MuiRadio: {
      root: {
        color: "#0c504c",
        '&$checked': {
          color: "#00746f",
        }
      }
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          color: "#00746f",
        }
      }
    },
  },
});



  theme.typography = {
    ...theme.typography,
    h1: {
      ...theme.typography.h1,
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#00746f",
    },
    h2: {
      ...theme.typography.h2,
      fontSize: "2rem",
      fontWeight: 700,
      color: "#00746f",
    },
    h3: {
      ...theme.typography.h3,
      fontSize: "1.75rem",
      fontWeight: 700,
      color: "#00746f",
    },
    h4: {
      ...theme.typography.h4,
      fontSize: "1.5rem",
      color: "#00746f",
    },
    h5: {
      ...theme.typography.h5,
      fontSize: "1.25rem",
      color: "#00746f",
    },
    h6: {
      ...theme.typography.h6,
      fontSize: "1rem",
      color: "#00746f",
    },
    body1: {
      ...theme.typography.body1,
      fontSize: "1.5rem",
      textAlign: "justify",
      color: "#0c504c",
    },
    body2: {
      ...theme.typography.body2,
      fontSize: "0.875rem",
      textAlign: "justify",
      color: "#0c504c",
    },
    button: {
      ...theme.typography.button,
      fontSize: "0.875rem",
    },
    caption: {
      ...theme.typography.caption,
      fontSize: "0.75rem",
    },
    overline: {
      ...theme.typography.overline,
      fontSize: "0.75rem",
    },
  };

export default responsiveFontSizes(theme);