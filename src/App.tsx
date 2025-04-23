import Drawer from "./components/drawer/Drawer";
import { Icon } from "./components/icon/Icon";

function App() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="cb-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-100 shadow-sm lg:hidden">
          <label htmlFor="cb-drawer" className="btn drawer-button btn-ghost">
            <Icon icon="menu" classNames="text-center" />
          </label>
        </div>
        <main>This is the main content</main>
      </div>

      <Drawer />
    </div>
  );
}

export default App;
