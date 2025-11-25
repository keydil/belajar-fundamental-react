import "./App.css";
import Article from "./components/Arcticle";

function App() {
  return (
    <div className="App">
      <Article name = "Fadhil" titles={["Reactjs", "Javascript", "Node.js"]} />
      <br />
      <Article name = "Udil" titles={["Nextjs", "Nuxtjs", "Supabase", "Postgresql"]} />
    </div>
  );
}
export default App;
