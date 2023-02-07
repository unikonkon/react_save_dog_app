import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./createContext";
import { useEffect } from "react";
// import Avata from "../Assets/avata2.svg";
import Dogs from "../Assets/STUDIO PC 2120-03.jpg";
import Dog from "../Assets/doglogin.svg";
//หน้า Login
function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  // สร้างตัวแปร location ทางไปหน้าเริ่มต้น
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
    <div className="bg-gradient-to-r from-amber-200 to-orange-50 space-y-10 ">
      <div className="items-center justify-center flex text-center h-screen lg:grid lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src={Dogs}
            className="hidden lg:block w-2/3 hover:scale-110 transition-all duration-500 transform mx-auto rounded-xl shadow-lg"
          />
        </div> 
        <form onSubmit={handleSubmit}> 
          <div className="flex justify-center">
            <img src={Dog} className="w-3/5 pb-5" />
          </div>
          <div className="text-4xl sm:text-5xl text-stone-900  ">
            Log in to account{" "}
          </div>
          <div className="flex flex-col pt-8 mx-5">
            <span className="text-stone-800 text-2xl text-left pb-1">
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
              className="bg-yellow-700 hover:bg-yellow-600  rounded-md w-full h-8 text-white"
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
