import useContextMenu from "./useContextMenu";

const Menu = ({ clickRef }) => {
  const { anchorPoint, show } = useContextMenu(clickRef);

  if (show) {
    return (
      <ul className="menu" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
        <li>Share to..</li>
        <li>Cut</li>
        <li>Copy</li>
        <li>Paste</li>
        <hr />
        <li>Refresh</li>
        <li>Exit</li>
      </ul>
    );
  }
  return <></>;
};

export default Menu;
