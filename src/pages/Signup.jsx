import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();

    const navigate = useNavigate();

    async function handleSignup(e) {

        e.preventDefault();

        setLoading(true);

        const { error } = await signup(
            email,
            password
        );

        setLoading(false);

        if (error) {

            alert(error.message);

            return;

        }

        alert("Account Created Successfully");

        navigate("/login");

    }

    return (

        <div
            style={{
                width: "350px",
                margin: "80px auto"
            }}
        >

            <h2>Create Account</h2>

            <form onSubmit={handleSignup}>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <br /><br />

                <button
                    type="submit"
                    disabled={loading}
                >

                    {
                        loading
                        ? "Creating Account..."
                        : "Signup"
                    }

                </button>

            </form>

            <br />

            <p>

                Already have an account?

                <Link to="/login">

                    Login

                </Link>

            </p>

        </div>

    );

}

export default Signup;