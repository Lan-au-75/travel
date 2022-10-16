import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flight from './component/Flight';
import Home from './component/Home';

function App() {
    return (
        <div className="wrapper">
            <Router>
                <Routes>
                    <Route path="/travel" element={<Home></Home>}></Route>
                    <Route path="/flight" element={<Flight></Flight>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
