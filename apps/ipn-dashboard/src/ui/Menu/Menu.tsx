import { useState } from "react";
import bell from "./images/bell.svg";
import flow from "./images/switch.svg";
import home from "./images/home.svg";
import logo from "./images/logo.svg";
import nodes from "./images/nodes.svg";

export function Menu() {
  const [activeItem, setActiveItem] = useState("ipn");

  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="Aims" className="mb-[16px]" />
      <MenuIcon
        onClick={() => setActiveItem("flow")}
        isActive={activeItem === "flow"}
        Icon={<img src={flow} alt="Flow" />}
      />
      <MenuIcon
        onClick={() => setActiveItem("home")}
        isActive={activeItem === "home"}
        Icon={<img src={home} alt="Home" />}
      />
      <MenuIcon
        onClick={() => setActiveItem("topology")}
        isActive={activeItem === "topology"}
        Icon={<img src={nodes} alt="Topology" />}
      />
      <MenuIcon
        onClick={() => setActiveItem("alarms")}
        isActive={activeItem === "alarms"}
        Icon={<img src={bell} alt="Alarms" />}
      />
      <MenuIcon
        onClick={() => setActiveItem("ipn")}
        isActive={activeItem === "ipn"}
        Icon={<div className="font-bold">IPN</div>}
      />
    </div>
  );
}

type MenuIconProps = {
  children?: React.ReactNode;
  Icon?: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
};

function MenuIcon({ children, Icon, onClick, isActive }: MenuIconProps) {
  return (
    <div
      onClick={onClick}
      className={`w-full h-[80px] flex justify-center items-center cursor-pointer ${
        isActive ? "bg-[#F0F1F1] border-l-4 border-[#F8A431]" : ""
      }`}
    >
      {children || Icon || null}
    </div>
  );
}
