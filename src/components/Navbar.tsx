// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import "./Navbar.css";

const Navbar: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <nav>
      <Link to="/dashboard">Task Manager</Link>

      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <>
          {/* <Link to="/dashboard">Dashboard</Link> */}
          <Link to="/profile">Profile</Link>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
