import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Hotel/Hotel";
import List from "./Pages/List/List";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </Router>
  );
}

export default App;
