import { NavLink } from "react-router-dom";
import { Icon } from "../icon/Icon";
import { IMenu } from "./MenuInterface";

const activeNavLink = {
  backgroundColor: "#ffffffe6",
  color: "#343a40",
};

export const MenuItem: React.FC<{ items: IMenu[] }> = (props) => {
  return props.items.map((m: IMenu) => {
    const key = `${m.key}-path-${Math.random()}`;
    if (m.children) {
      return (
        <li key={key} className="uppercase py-3">
          <details open>
            <summary className="hover:bg-gray-700">
              <Icon icon={m.icon} />
              {m.key}
            </summary>
            <ul className="m-0">
              <MenuItem items={m.children} />
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
