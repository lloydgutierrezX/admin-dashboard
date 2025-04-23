import { Route, Routes } from "react-router-dom";
import Drawer from "./components/drawer/Drawer";
import { Icon } from "./components/icon/Icon";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./components/notfound/NotFound";

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
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>

      <Drawer />
    </div>
  );
}

export default App;
