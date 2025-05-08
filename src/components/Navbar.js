import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Correct the import for Link

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Use Link instead of link */}
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>

          {/* Dark Mode Toggle Button */}
          <div className="form-check form-switch mx-2">
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">
              Enable {props.mode === 'dark' ? 'Light' : 'Dark'} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
};





// import React from 'react';
// import PropTypes from 'prop-types';
// import {link} from 'react-router-dom';

// export default function Navbar(props) {
//   return (
//     <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">{props.title}</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <link className="nav-link active" aria-current="page" to="/">Home</link>
//             </li>
//             <li className="nav-item">
//               <link className="nav-link" to="/about">{props.about}</link>
//             </li>
//           </ul>

//           <form className="d-flex" role="search">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form>

//           {/* Dark Mode Toggle Button */}
//           <div className="form-check form-switch mx-2">
//             <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
//             <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">
//               Enable {props.mode === 'dark' ? 'Light' : 'Dark'} Mode
//             </label>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// Navbar.propTypes = {
//   title: PropTypes.string,
//   about: PropTypes.string,
//   mode: PropTypes.string.isRequired,  // Add this prop type
//   toggleMode: PropTypes.func.isRequired  // Add this prop type
// };
