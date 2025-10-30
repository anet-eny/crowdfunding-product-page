import { CrowdfundingProvider } from "./context/CrowdfundingContext";
import Home from "./pages/Home";

function App() {
  return (
    <CrowdfundingProvider>
      <Home />
    </CrowdfundingProvider>
  );
}

export default App;
