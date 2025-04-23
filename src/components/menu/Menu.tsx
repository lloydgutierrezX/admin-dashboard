import { IMenu, jsonMenu } from "./MenuInterface";
import { MenuItem } from "./MenuItem";

function Menu() {
  const menu: IMenu[] = jsonMenu;
  return (
    <ul className="menu w-full bg-transparent px-0 pt-5">
      <MenuItem items={menu} />
    </ul>
  );
}

export default Menu;
