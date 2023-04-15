import Image from "next/image";
import AuthBackground from '@/images/background.jpg'
import Logo from '@/images/Logo.png'
import { Manrope } from 'next/font/google'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction, registerAction } from "@/redux/actions/auth";

const manrope = Manrope({ subsets: ['latin'] })

const Login = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe:false,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const authFunc = () => {
    if (signUp) {
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
    }
  };
  return (
    <div className={`${manrope.className} flex flex-row h-screen`}>
      <Image className="w-1/2" src={AuthBackground} alt="auth-background" />
      <div className=" bg-white w-1/2 flex flex-col justify-start">
        <div className="flex justify-center" id="logo">
          <Image className="mt-20" src={Logo} alt="logo" />
        </div>
        <div className={`mx-auto ${signUp ? "mt-16" : "mt-24"} w-400`} id="titles">
          <h3 className={`text-auth-blue opacity-75 text-lg font-semibold`} >Welcome {signUp ? "!" : "back!"}</h3>
          <h1 className={`text-auth-blue text-3xl font-bold`}>{signUp ? "Create a new account" : "Login to your account"}</h1>
        </div>
        {signUp && (
          <div className="flex flex-col mt-12 mx-auto">
            <label className="text-auth-blue font-bold mb-2" htmlFor="name">Name</label>
            <input onChange={handleChange} value={authData.name} className="w-400 h-14 p-4 text-auth-blue opacity-60 border-none" placeholder="John Doe" type="text" name="name" />
          </div>
        )}
        <div className={`flex flex-col ${signUp ? "mt-8" : "mt-20"} mx-auto`}>
          <label className="text-auth-blue font-bold mb-2" htmlFor="email">E-mail</label>
          <input onChange={handleChange} value={authData.email} className="w-400 h-14 p-4 text-auth-blue opacity-60 border-none" placeholder="john@mail.com" type="email" name="email" />
        </div>
        <div className="flex flex-col mt-8 mx-auto">
          <label className="text-auth-blue font-bold mb-2" htmlFor="password" >Password</label>
          <input onChange={handleChange} value={authData.password} className="w-400 h-14 p-4 text-auth-blue opacity-60 border-none" placeholder="*******" type="password" name="password" />
          {!signUp && (
            <div className="flex items-center mt-3">
              <input onChange={handleChange} checked="" className="text-auth-indigo w-4 h-4 mr-2" type="checkbox" name="rememberMe" />
              <label className="text-auth-indigo text-xs" htmlFor="rememberMe">Remember Me</label>
            </div>
          )}
        </div>
        <div className={`flex flex-col ${ signUp ? "mt-12" : "mt-24 mb-9"} mx-auto`}>
          <button onClick={authFunc} className="bg-orange-600 w-400 px-3 py-5 rounded">{signUp ? 'Register' : "Login"}</button>
          <button onClick={() => setSignUp(!signUp)} className="border border-auth-indigo text-auth-indigo w-400 px-3 py-5 mt-3 rounded font-bold">{signUp ? 'Login' : "Register"}</button>
        </div>
      </div>
    </div>
  )
}

export default Login