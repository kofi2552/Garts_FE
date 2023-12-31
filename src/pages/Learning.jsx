import { NavLink } from "react-router-dom";

const Learning = () => {
  const FunctionName = ({ isActive }) => {
    return {
      fontweight: isActive ? "bold" : "normal",
      textdecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <div>
      <NavLink style={FunctionName}></NavLink>
    </div>
  );
};

export default Learning;
