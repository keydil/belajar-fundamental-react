import "./App.css";
import Home from "./pages/index";
import { GlobalContext } from "./context";

function App() {
  const user = {
    username: "Udil",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <Home />
      </GlobalContext.Provider>
    </div>
  );
}
export default App;
