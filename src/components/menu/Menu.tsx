import { usePageContext } from "../../hooks/Page";
import { IMenu, jsonMenu } from "./MenuInterface";
import { MenuItem } from "./MenuItem";

function Menu() {
  const menu: IMenu[] = jsonMenu;
  const currentPath = usePageContext();

  return (
    <ul className="menu w-full bg-transparent px-0 pt-5">
      <MenuItem items={menu} curPage={currentPath[currentPath.length - 1]} />
    </ul>
  );
}

export default Menu;
