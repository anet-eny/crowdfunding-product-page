import { CrowdfundingProvider } from "./context/CrowdfundingContext";
import { MenuProvider } from "./context/MenuContext";
import Home from "./pages/Home";

function App() {
  return (
    <CrowdfundingProvider>
      <MenuProvider>
        <Home />
      </MenuProvider>
    </CrowdfundingProvider>
  );
}

export default App;
