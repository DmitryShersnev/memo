import { useContext } from "react";
import MyContext from "./MyContext";

function ChangeTheme({}) {
  const { theme, changeTheme } = useContext(MyContext);
  return (
    <>
      <p>Выбранная тема: {theme}</p>
      <button onClick={changeTheme}>Переключить тему</button>
    </>
  );
}
export default ChangeTheme;
