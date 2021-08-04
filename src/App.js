import "./index.css";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";

import { AppProvider } from "./Context/AppContext";
import Results from "./Components/Results/Results";

export default function App() {
  return (
    <div className="App">
      <AppProvider>

        <Header />
        <Search />
        <Results/>
      </AppProvider>
    </div>
  );
}
