// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontpage from "./components/FrontPage_BookList";
import CreateBook from "./components/Create_Book";

function App() {
  return (
<BrowserRouter>
    <Routes>
    
        <Route path="/" exact element={<Frontpage />} />
        <Route path="create-book" element={<CreateBook/>}/>
      </Routes>
    </BrowserRouter>  );
}

export default App;
