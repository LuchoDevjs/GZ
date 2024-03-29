export const IconArrow = ({
  color = "#3D0E1E",
  width = "52",
  height = "27",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 52 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer"
  >
    <line
      x1="0.353553"
      y1="0.646447"
      x2="25.3536"
      y2="25.6464"
      stroke={color}
    />
    <line x1="50.8131" y1="0.349795" x2="25.3573" y2="26.3498" stroke={color} />
  </svg>
);
