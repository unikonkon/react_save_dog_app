import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./createContext";
import { useEffect } from "react";
import Avata from "../Assets/avata2.svg";
import Unlock from "../Assets/unlock.svg";
//หน้า Login
function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  let from = location.state?.sfrom?.pathname || "/";
  useEffect(() => {
    //auth.signout()
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (//แท็กfrom ใช้ onSubmit ทำงานเมื่อมีการคลิกปุ่ม
    <div className="bg-gradient-to-r from-cyan-500 to-blue-30 space-y-10 ">
      <div className="items-center justify-center flex text-center h-screen lg:grid lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src={Unlock}
            className="hidden lg:block w-2/3 hover:scale-125 transition-all duration-500 transform mx-auto"
          />
        </div> 
        <form onSubmit={handleSubmit}> 
          <div className="flex justify-center">
            <img src={Avata} className="w-2/3 " />
          </div>
          <div className="text-4xl sm:text-5xl text-blue-900  ">
            Log in to your account{" "}
          </div>
          <div className="flex flex-col pt-8 mx-5">
            <span className="text-sky-800 text-2xl text-left pb-1">
              Username{" "}
            </span>
            <input
              name="username"
              type="text"
              required
              className="  px-3 py-2 border items-center justify-center border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm w-full "
              placeholder="Username"
            ></input>
          </div>

          <div className="bg-sky pt-4 mx-5">
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-800  rounded-md w-full h-8 text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
