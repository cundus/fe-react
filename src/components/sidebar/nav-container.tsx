import { NAVS } from "./constant";
import NavItem from "./nav-item";

const NavContainer = () => {
   return (
      <div>
         {NAVS.map((item, index) => {
            return <NavItem key={index} {...item} />;
         })}
      </div>
   );
};

export default NavContainer;
