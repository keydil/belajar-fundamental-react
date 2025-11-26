import "./App.css";
import { RouterProvider } from "react-router-dom";
import { GlobalContext } from "./context.js";
import { router } from "./routers.js";

function App() {
  const user = {
    username: "Udil",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}
export default App;
