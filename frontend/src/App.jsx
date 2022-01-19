import "./App.css";
import RouteList from "./routes/MainRoutes";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "@material-tailwind/react/tailwind.css";
import Footer from "./components/Footer";

const isAuth = true;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-14 min-h-screen">
        <Routes>
          {RouteList.map((el, index) => (
            <Route
              path={el.path}
              exact={el.exact ? true : false}
              element={
                el.permission ? (
                  isAuth ? (
                    el.component
                  ) : (
                    <Navigate to="/" />
                  )
                ) : (
                  el.component
                )
              }
              key={index}
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
