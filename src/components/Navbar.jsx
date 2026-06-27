import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Siva Collection</h2>

      <Link to="/">Home</Link>

      {" | "}

      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;