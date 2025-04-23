import { NavLink } from "react-router-dom";
import { Icon } from "../icon/Icon";
import { IMenu } from "./MenuInterface";

const activeNavLink = {
  backgroundColor: "#ffffffe6",
  color: "#343a40",
};

const isCollapse = (menu: IMenu, curPage: string) => {
  return (menu?.children ?? []).some((m: IMenu) => m.key === curPage);
};

export const MenuItem: React.FC<{ items: IMenu[]; curPage: string }> = (
  props
) => {
  return props.items.map((m: IMenu) => {
    const key = `${m.key}-path-${Math.random()}`;
    if (m.children) {
      return (
        <li key={key} className="uppercase py-3">
          <details open={isCollapse(m, props.curPage)}>
            <summary className="hover:bg-gray-700">
              <Icon icon={m.icon} />
              {m.key}
            </summary>
            <ul className="m-0">
              <MenuItem items={m.children} curPage={props.curPage} />
            </ul>
          </details>
        </li>
      );
    }

    return (
      <li
        key={key}
        className="uppercase mb-1 rounded-sm hover:bg-gray-700 hover:border-left-1 hover:border-gray-600"
      >
        <NavLink
          className="py-2"
          to={m.path || "/"}
          style={({ isActive }) => (isActive ? activeNavLink : {})}
        >
          <Icon icon={m.icon} />
          {m.key}{" "}
        </NavLink>
      </li>
    );
  });
};
