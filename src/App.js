import "./styles.css";
// import { useCallback, useEffect, useState } from "react";
import Menu from "./Menu";

function App() {
  return (
    <div className="app">
      <h1>Right click somewhere on the page..</h1>
      <Menu />
    </div>
  );
}

// function App() {
//   const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
//   const [show, setShow] = useState(false); // hide menu

//   const handleContextMenu = useCallback(
//     (event) => {
//       event.preventDefault();
//       setAnchorPoint({ x: event.pageX, y: event.pageY });
//       setShow(true);
//     },
//     [setAnchorPoint]
//   );

//   const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

//   useEffect(() => {
//     document.addEventListener("click", handleClick);
//     document.addEventListener("contextmenu", handleContextMenu);
//     return () => {
//       document.removeEventListener("click", handleClick);
//       document.removeEventListener("contextmenu", handleContextMenu);
//     };
//   });

//   return (
//     <div className="app">
//       {show ? (
//         <ul
//           className="menu"
//           style={{
//             top: anchorPoint.y,
//             left: anchorPoint.x
//           }}
//         >
//           <li>Share to..</li>
//           <li>Cut</li>
//           <li>Copy</li>
//           <li>Paste</li>
//           <hr className="divider" />
//           <li>Refresh</li>
//           <li>Exit</li>
//         </ul>
//       ) : (
//         <> </>
//       )}
//     </div>
//   );
// }

export default App;
