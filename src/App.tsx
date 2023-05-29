import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FinalPage from "./Pages/FinalPage";
import Home from "./Pages/Home";
import Stage1 from "./Pages/Stage1";
import Stage2 from "./Pages/Stage2";
import Stage3 from "./Pages/Stage3";
import Stage4 from "./Pages/Stage4";

function App() {
  return (
    <div className="all-pages">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stage1" element={<Stage1 />} />
          <Route path="/stage2/:id" element={<Stage2 />} />
          <Route path="/stage3/:id" element={<Stage3 />} />
          <Route path="/stage4/:id" element={<Stage4 />} />
          <Route path="/final-page" element={<FinalPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
