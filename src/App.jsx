// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Stats from "./components/Stats";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Login from "./components/Login/login.jsx";


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Hero />
//             <About />
//             <Services />
//             <Stats />
//             <Projects />
//             <Contact />
//           </>
//         } />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />

//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;/


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Login from "./components/Login/login.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Stats />
              <Projects />
              <Contact />
              {/* <Login/> */}
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/login" element={<Login.jsx/>} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
