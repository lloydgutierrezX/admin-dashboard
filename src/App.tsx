import { Route, Routes, useLocation } from "react-router-dom";
import Drawer from "./components/drawer/Drawer";
import { Icon } from "./components/icon/Icon";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/notfound/NotFound";
import { useEffect, useState } from "react";
import { PageContext } from "./hooks/Page";

function App() {
  const location = useLocation();
  const [currentModule, setCurrentModule] = useState("");

  useEffect(() => {
    const split = location.pathname.split("/");
    setCurrentModule(split[split.length - 1]);
  }, [location]);

  return (
    <PageContext.Provider value={currentModule}>
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
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>

        <Drawer />
      </div>
    </PageContext.Provider>
  );
}

export default App;
