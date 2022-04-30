import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Login from "./components/Shared/Login/Login";
import Signup from "./components/Shared/Signup/Signup";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import NotFound from "./components/Shared/NotFound/NotFound";
import Footer from "./components/Shared/Footer/Footer";
import RequiredAuth from "./components/Shared/RequiredAuth/RequiredAuth";
import Checkout from "./components/Checkout/Checkout";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={
          <RequiredAuth>
            <About />
          </RequiredAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/checkout" element={ 
          <RequiredAuth>
            <Checkout/>
          </RequiredAuth>
         }/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
