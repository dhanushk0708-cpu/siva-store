import { useEffect, useState } from "react";
import supabase from "../supabase";

function useAuth() {

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

    return {

        user,
        loading,
        login,
        signup,
        logout

    };

}

export default useAuth;