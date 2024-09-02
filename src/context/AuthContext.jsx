import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { infoUser, loginUser } from "../services/DataService";
import { useLocation, useNavigate } from "react-router-dom";

export const Authcontext = createContext()

export const AuthProvider = ({ children }) => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [dataUser, setDataUser] = useState('')

    const Login = useMutation({
        mutationKey: ['login'],
        mutationFn: loginUser,
        onError: error => alert(error.response?.data?.message),
        onSuccess: data=> {
            localStorage.setItem('token', data.token)
            navigate('/dashboard')
        }
    })

    const { data, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: infoUser,
        enabled: pathname === '/dashboard',
    });

    useEffect(() => {
        if (data && !isLoading) {
            setDataUser(data);
        }
    }, [data, isLoading]);

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        setDataUser(null)
        navigate('/login')
        setModal(false)
    }

    function options() {
        setModal(!modal)
    }

    
    return (
        <Authcontext.Provider value={{ options, modal, Login, dataUser, logout, isLoading, isError }}>
            {children}
        </Authcontext.Provider>)
}
