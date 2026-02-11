// Basic mapping for Auth0 user object we expect to use

export interface AuthUser {
  name?: string;
  email?: string;
  picture?: string;
  sub?: string; // Unique Auth0 user ID
}

// Then you can use it:

// const { user } = useAuth0<AuthUser>();
