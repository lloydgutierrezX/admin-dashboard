import { NavLink } from "react-router-dom";
import Menu from "../menu/Menu";

function Drawer() {
  const projectTitle = import.meta.env.VITE_PROJECT_TITLE;

  return (
    <div className="drawer-side shadow">
      <label
        htmlFor="cb-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <div className="menu min-h-full w-70 px-4 py-0 bg-gray-800 text-white">
        <NavLink to="/" className="p-4 text-2xl font-sans font-semibold">
          {projectTitle}
        </NavLink>
        <div className="border-t border-white/15">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Drawer;
