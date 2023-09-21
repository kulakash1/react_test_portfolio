
// Router.js
import { Routes, Route } from "react-router-dom";
import { locations } from "../pages/home/locations.js";

const { Home, About, Achievemnts, TravelDiary, ContactMe, Projects, Navbar1, Footer } = locations;

const MainPageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navbar1 />} />
        <Route index element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="achievemnts" element={<Achievemnts />} />
        <Route exact path="traveldiary" element={<TravelDiary />} />
        <Route exact path="projects" element={<Projects />} />
        <Route exact path="contactme" element={<ContactMe />} />
        <Route exact path="footer" element={<Footer />} />
        <Route exact path="navbar1" element={<Navbar1 />} />
    </Routes>
  );
};

// export default RoutePath;
export {MainPageRoutes};







// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import {locations} from '../pages/home/locations.js'
// // import { Home, About, Navbar1, Footer } from "../pages/home/locations.js";
// import { locations } from "../pages/home/locations.js";

// const { Home, About, Navbar1, Footer } = locations;

// const RoutePath = () => {
//   return (
//     // const {Home, About, Navbar1, Footer} = locations;
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path="/" element={<Navbar1 />}>
//     //       <Route index element={<Home />} />
//     //       <Route path="about" element={<About />} />
//     //       {/* <Route path="navbar1" element={<Navbar1 />} /> */}
//     //       {/* <Route path="*" element={<NoPage />} /> */}
//     //       <Route path="footer" element={<Footer />} />
//     //     </Route>
//     //   </Routes>
//     // </BrowserRouter>

//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navbar1 />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="footer" element={<Footer />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// const root = document.getElementById("root");
// ReactDOM.createRoot(root).render(<RoutePath />);

// export { RoutePath };

// //   {/* Extra written for Routing */}
// //   <Routes>
// //      <Route path="/">
// //          <About />
// //        </Route>
// //     {/* <Route path="/">
// //       <Home />
// //     </Route> */}
// //   </Routes>
