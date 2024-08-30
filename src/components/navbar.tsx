import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home </Link>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/createpost">Create Post</Link>
        )}
      </div>
      <div className="user">
        {user && (
          <>
            <p className="user-p">{user?.displayName}</p>
            <img src={user?.photoURL || ""} width="50" height="50" alt="" />
            <button
              type="button"
              className="btn btn-outline-light btn-sm"
              onClick={logOut}
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};
