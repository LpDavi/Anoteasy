import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }){
    const [ data, setData ] = useState({});

    async function singIn({ email, password }){
        
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@anoteasy:user", JSON.stringify(user));
            localStorage.setItem("@anoteasy:token", token);

            api.defaults.headers.authorizantion = `Bearer ${token}`;
            setData({ user, token });

        }catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert('Não foi possível entrar.')
            }
        }
    }

    useEffect(() =>{
        const token = localStorage.getItem("@anoteasy:token");
        const user = localStorage.getItem("@anoteasy:user");

        if(token && user){
            api.defaults.headers.authorization = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);
    
    return (
        <AuthContext.Provider value={{ singIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    
    return context;
}

export { AuthProvider, useAuth };