import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from './components/frontPage/FrontPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<FrontPage /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
