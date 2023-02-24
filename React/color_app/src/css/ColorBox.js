import chroma from "chroma-js";

const style = {
  colorBox: {
    position: "relative",
    width: "20%",
    color: (props) => (chroma(props.color).luminance() < 0.2 ? "#fff" : "#000"),
    height: (props) => (props.isPalette ? "25%" : "50%"),
    "&:hover $copyContainer $copy": {
      opacity: "1",
    },
  },
  copyContainer: {
    position: "relative",
    display: "block",
    width: "100%",
    height: "100%",
    textTransform: "uppercase",

    "& a": {
      position: "absolute",
      bottom: "0",
      right: "0",
      padding: "8px",
      fontSize: "13px",
      textDecoration: "none",
      backgroundColor: (props) =>
        chroma(props.color).luminance() < 0.2 ? "#fff2" : "#0002",
      transition: "0.5s",
      color: (props) =>
        chroma(props.color).luminance() < 0.2 ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: (props) =>
          chroma(props.color).luminance() < 0.2 ? "#fff4" : "#0004",
      },
    },
  },
  colorName: {
    position: "absolute",
    bottom: "0",
    left: "0",
    padding: "8px",
    fontSize: "13px",
  },
  copy: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "6px 20px",
    background: "#0004",
    textTransform: "uppercase",
    cursor: "pointer",
    opacity: "0",
    transition: "1s",
  },
  // .copy-container a.more:hover {
  //   background-color: #0002;
  // }
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: "0",
    top: "50%",
    left: "50%",
    zIndex: "0",
    transform: "translate(-50%, -50%) scale(0.0001)",
  },
  active1: {
    transform: "translate(-50%, -50%) scale(50)",
    opacity: "1",
    zIndex: "10",
    transition: "transform 0.6s ease-in-out",
  },
  copiedContent: {
    position: "fixed",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    top: "0",
    left: "0",
    zIndex: "0",
    opacity: "0",
    transform: "scale(0.01)",
  },
  copied: {
    position: "relative",
    width: "100%",
    padding: "30px 0",
    fontSize: "4rem",
    color: (props) => (chroma(props.color).luminance() < 0.2 ? "#fff" : "#000"),
    background: (props) =>
      chroma(props.color).luminance() < 0.2 ? "#fff3" : "#0003",
    textAlign: "center",
    textShadow: (props) =>
      chroma(props.color).luminance() < 0.2 ? "2px 2px #000" : "2px 2px #fff",
  },
  active2: {
    zIndex: "15",
    transform: "scale(1)",
    opacity: "1",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.2s",
  },
  copiedColorname: {
    color: (props) => (chroma(props.color).luminance() < 0.2 ? "#fff" : "#000"),
    fontSize: "1.5rem",
    marginTop: "1rem",
  },
};

export default style;
