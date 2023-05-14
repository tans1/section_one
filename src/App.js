import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from './pages/signup';
import Body from './components/body'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Body />
        <Routes>
          <Route path="/join" element={<Signup />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
