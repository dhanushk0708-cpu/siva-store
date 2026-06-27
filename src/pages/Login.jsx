import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const { login } = useAuth();

    const navigate = useNavigate();

    async function handleLogin(e) {

        e.preventDefault();

        setLoading(true);

        const { error } = await login(
            email,
            password
        );

        setLoading(false);

        if (error) {

            alert(error.message);

            return;

        }

        alert("Login Successful");

        navigate("/");

    }

    return (

        <div
            style={{
                width: "350px",
                margin: "80px auto"
            }}
        >

            <h2>Login</h2>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <br />
                <br />

                <button
                    type="submit"
                    disabled={loading}
                >

                    {
                        loading
                            ? "Logging in..."
                            : "Login"
                    }

                </button>

            </form>

            <br />

            <p>

                Don't have an account?

                <Link to="/signup">

                    Signup

                </Link>

            </p>

        </div>

    );

}

export default Login;