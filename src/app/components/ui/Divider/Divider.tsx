
const Divider = ({
    width = "100%",
    height = "2px",
    color = "#e0e0e0",
    margin = "20px 0",
    style = "solid", // solid, dashed, or dotted
  }) => {
    return (
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: style === "solid" ? color : "transparent",
          borderTop: style !== "solid" ? `${height} ${style} ${color}` : "none",
          margin: margin,
        }}
      ></div>
    );
  };
  
  export default Divider;
  
