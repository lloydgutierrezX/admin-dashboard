import { NavLink } from "react-router-dom";
import Menu from "../menu/Menu";
import { Icon } from "../icon/Icon";

function Drawer() {
  const projectTitle = import.meta.env.VITE_PROJECT_TITLE;

  return (
    <div className="drawer-side shadow">
      <label
        htmlFor="cb-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <div className="menu min-h-full w-70 p-0 bg-gray-800 text-white">
        <NavLink
          to="/"
          className="mx-2 p-4 text-2xl font-sans font-semibold hover:cursor-pointer"
        >
          {projectTitle}
        </NavLink>
        <div className="px-2 border-t border-white/15 max-h-[calc(100vh-100px)] overflow-auto">
          <Menu />
        </div>
        <button className="min-w-full h-15 fixed bottom-0 px-4 py-0 btn btn-ghost rounded-none gap-3 border-0 text-base hover:bg-gray-700 hover:cursor-pointer hover:text-white">
          <Icon icon="log-out" classNames="flex-none hover:cursor-pointer" />
          <label className="grow text-left text-base hover:cursor-pointer">
            Logout
          </label>
        </button>
      </div>
    </div>
  );
}

export default Drawer;
