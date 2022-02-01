import './App.css';
import RouteList from './routes/MainRoutes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import '@material-tailwind/react/tailwind.css';
import Footer from './components/Footer';
import initAppAction from './actions';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    initAppAction();
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="min-h-screen pt-14">
        <Routes>
          {RouteList.map((el, index) => (
            <Route path={el.path} exact={el.exact ? true : false} element={el.component} key={index} />
          ))}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
