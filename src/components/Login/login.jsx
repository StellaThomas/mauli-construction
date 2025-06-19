// // src/components/Login/Login.jsx
// import React from "react";
// import "./Login.css";

// const Login = () => {
//   return (
//     <section className="login-section">
//       <div className="login-container">
//         <h2>Login</h2>
//         <form className="login-form">
//           <input type="text" placeholder="Username" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Login;

import React from "react";
import "./login.css";

const Login = () => {
  return (
    <section className="login-section">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
