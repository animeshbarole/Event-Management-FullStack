import './App.css';
import Navbar from './components/navbar';
import { Route,Routes } from 'react-router-dom';
import Login  from './pages/login';
import Home from './pages/home';
import YourEvents from './pages/yourEvents';
import UpcomingEvents from './pages/upcomingEvents';
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yourEvents" element={<YourEvents />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upcomingEvents" element={<UpcomingEvents />} />
         

        </Routes>
      </div>


    </div>
  );
}

export default App;
