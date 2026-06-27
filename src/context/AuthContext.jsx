import { createContext, useEffect, useState } from "react";
import supabase from "../supabase";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getSession() {

            const { data } =
                await supabase.auth.getSession();

            setUser(data.session?.user ?? null);

            setLoading(false);

        }

        getSession();

        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange(
            (event, session) => {

                setUser(session?.user ?? null);

            }
        );

        return () => {

            subscription.unsubscribe();

        };

    }, []);

    async function login(email, password) {

        return await supabase.auth.signInWithPassword({

            email,
            password

        });

    }

    async function signup(email, password) {

        return await supabase.auth.signUp({

            email,
            password

        });

    }

    async function logout() {

        await supabase.auth.signOut();

    }

    return (

        <AuthContext.Provider

            value={{

                user,
                loading,
                login,
                signup,
                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export default AuthContext;