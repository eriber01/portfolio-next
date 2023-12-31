import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { GiTechnoHeart } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

import { NavLinksTypes } from "./Sidebar/interfaces & constans";

const SwitchIcons = (id: NavLinksTypes) => {
  switch (id) {
    case '/':
      return <IoHome size={20} />
    case 'profile':
      return <CgProfile size={20} />
    case 'projects':
      return <GrProjects size={20} />
    case 'techs':
      return <GiTechnoHeart size={20} />
    default:
      break;
  }
}

export const IconsMenu = ({ id }: { id: NavLinksTypes }) => {
  return (
    <div className="pr-2">
      {SwitchIcons(id)}
    </div>
  )
}
