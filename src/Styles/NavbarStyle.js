import { StyleSheet } from "aphrodite/no-important";

const navStyle = StyleSheet.create({
  navbar: {
    width: "100%",
    left: "0",
    top: "0",
    "min-height": "240px",
    position: "fixed",
    padding: "30px 20px 49px",
    "background-color": "#000000",
    "z-index": "3"
  },
  headerTop: {
    display: "flex",
    justifyContent: "space-between"
  },
  headerIcon: {
    color: "#fff",
    fontSize: "21px",
    ":not(:first-of-type)": {
      marginLeft: "23px"
    }
  },
  headerSearchBlock: {
    "max-width": "1200px",
    margin: "35px auto 0 auto"
  },
  headerSearch: {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    border: "none",
    outline: "none",
    background: "transparent",
    textAlign: "center",
    color: "#fff",
    fontSize: "	2.25rem",
    "::placeholder": {
      color: "#fff"
    }
  },
  searchLine: {
    width: "100%",
    height: "1.5px",
    background: "rgb(0,0,0)",
    background:
      "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 75%, rgba(0,0,0,1) 100%)"
  },
  HeaderNav: {
    display: "flex"
  },
  homeElement: {
    display: "flex"
  },
  inputBox: {
    "margin-top": "3px",
    width: "1022px",
    height: "40px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    background: "none",
    "background-color": "#eee",
    color: "#111",
    "align-items": "center",
    "padding-left": "42px",
    "font-size": "inherit",
    ":focus": {
      outline: "none"
    }
  },

  listElement: {
    "list-style": "none",
    display: "inline-block",
    "padding-left": "20px"
  },

  anchorDiv: {
    "text-decoration": "none",
    color: "#999"
  },
  navElements: {
    display: "flex",
    "align-items": "center"
  },
  inputDiv: {
    "padding-left": "16px",
    display: "flex"
  },
  searchButton: {
    border: "none",
    padding: 0,
    color: "#999",
    "background-color": "transparent",
    "text-align": "inherit",
    cursor: "pointer",
    position: "absolute",
    top: "18px",
    left: "75px",
    ":focus": {
      outline: "none",
      top: "17px",
      right: "71px"
    }
  },
  searchIcon: {
    "font-size": "1.4em",
    "font-style": "normal",
    content: "\f002"
  },
  submitPhoto: {
    "padding-left": "46px"
  },
  submitButton: {
    color: "#999",
    "background-color": "#fff",
    "border-color": "#ddd!important",
    display: "inline-block",
    height: "32px",
    padding: "0 11px",
    "font-size": "14px",
    "line-height": "30px",
    borderRadius: "4px",
    cursor: "pointer",
    border: "1px solid transparent",
    "box-shadow": "0 1px 1px rgba(0,0,0,.04)",
    transition: "all .2s ease-in-out",
    "text-align": "center",
    ":hover": {
      color: " #111",
      "border-color": "#999!important"
    },
    ":focus": {
      outline: "none"
    }
  },
  bell: {
    "padding-left": "20px"
  },
  avatar: {
    "padding-left": "20px"
  },
  bellIcon: {
    "text-decoration": "none",
    "font-size": "1.5em",
    color: "#999"
  },
  homeIconImage: {
    width: "31px",
    height: "34px",
    "margin-top": "6px"
  },
  avatarImg: {
    height: "34px",
    width: "34px",
    borderRadius: "18px",
    "margin-top": "3px"
  },
  marginPhotos: {
    marginBottom: "20px",
    marginLeft: "12px",
    marginRight: "12px"
  }
});

export default navStyle;
