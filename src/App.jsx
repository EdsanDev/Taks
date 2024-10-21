import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaksProvider } from "./context/Taks";
import Taks from "./pages/Taks";
function App() {
  return (
    <TaksProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Taks></Taks>}></Route>
        </Routes>
      </BrowserRouter>
    </TaksProvider>
  );
}

export default App;
