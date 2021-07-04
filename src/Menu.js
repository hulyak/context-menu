import useContextMenu from "./useContextMenu";
import * as Icon from "react-feather";

const Menu = () => {
  const { anchorPoint, show } = useContextMenu();

  if (show) {
    return (
      <ul className="menu" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
        <li className="menu__list">
          <Icon.Share size={20} className="menu__icons" />
          Share
        </li>
        <li className="menu__list">
          <Icon.Scissors size={20} className="menu__icons" />
          Cut
        </li>
        <li className="menu__list">
          <Icon.Copy size={20} className="menu__icons" />
          Copy to
        </li>
        <li className="menu__list">
          <Icon.Download size={20} className="menu__icons" />
          Download
        </li>
        <hr />
        <li className="menu__list">
          <Icon.RefreshCw size={20} className="menu__icons" />
          Refresh
        </li>
        <li className="menu__list">
          <Icon.Trash size={20} className="menu__icons" />
          Delete
        </li>
      </ul>
    );
  }
  return <></>;
};

export default Menu;
