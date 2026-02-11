// src/pages/Profile.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import type { AuthUser } from "../types/auth";

const Profile: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0<AuthUser>();

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (!isAuthenticated || !user) {
    return <p>You need to log in to view your profile.</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <img
        src={user.picture}
        alt={user.name}
        style={{ borderRadius: "50%", width: "120px", height: "120px" }}
      />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>User ID: {user.sub}</p>
    </div>
  );
};

export default Profile;
