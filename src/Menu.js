import * as Icon from "react-feather";
import useContextMenu from "./hooks/useContextMenu";

const Menu = () => {
  const { anchorPoint, show } = useContextMenu();

  if (show) {
    return (
      <ul className="menu" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
        <li className="menu__item">
          <Icon.Share size={20} className="menu__icon" />
          Share
        </li>
        <li className="menu__item">
          <Icon.Scissors size={20} className="menu__icon" />
          Cut
        </li>
        <li className="menu__item">
          <Icon.Copy size={20} className="menu__icon" />
          Copy to
        </li>
        <li className="menu__item">
          <Icon.Download size={20} className="menu__icon" />
          Download
        </li>
        <hr />
        <li className="menu__item">
          <Icon.RefreshCw size={20} className="menu__icon" />
          Refresh
        </li>
        <li className="menu__item">
          <Icon.Trash size={20} className="menu__icon" />
          Delete
        </li>
      </ul>
    );
  }
  return <></>;
};

export default Menu;
