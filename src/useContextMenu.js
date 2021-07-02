import { useEffect, useCallback, useState } from "react";

const useContextMenu = (outerRef) => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      if (outerRef && outerRef.current.contains(event.target)) {
        setAnchorPoint({ x: event.pageX, y: event.pageY });
        setShow(true);
      } else {
        setShow(false);
      }
    },
    [setShow, outerRef, setAnchorPoint]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.addEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return { anchorPoint, show };
};

export default useContextMenu;
