import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Nav from "./Component/Navbar/Nav";
import Main from "./Component/Main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Main />} />
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
