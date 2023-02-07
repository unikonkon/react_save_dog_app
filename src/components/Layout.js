import React from "react";
import { useNavigate, useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./createContext";
//หน้า Layout
function Layout() {
  return (
    <div>
      <AuthStatus />
      <Outlet />
    </div>
  );
}
export default Layout;
//หน้า User
function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();
  let location = useLocation();
  console.log("location ", location);
  console.log("user", auth.user);

  if (location.pathname === "/" && auth.user) {    // คำสั่ง if ถ้ามีข้อมูล location.pathname = หน้า Login และ authที่เข้าถึงuser
    return <Navigate to="protected" replace />;         // return แสดงหน้า protected
  }
   
  if (!auth.user) {       // ถ้าไม่มี auth.user return ไม่แสดงผล
    return <div></div>;
  }

  return (
    <div className=" pt-100 bg-gradient-to-r from-pink-100 via-violet-100 to-pink-100  sm:pl-8 pl-4  ">
      <div className="text-sky-800 lg:text-7xl sm:text-5xl text-4xl pt-7">
        Welcome!
      </div>
      <div className="text-2xl lg:text-4xl sm:text-3xl space-y-10 pt-4 flex flex-row ">
        {" "}
        Username: {auth.user}{" "}
        <div className="pl-5">
          <button
            className=" bg-red-400 hover:bg-red-300 rounded-md w-28 
          h-9 text-white text-lg sm:text-xl
        shadow-lg shadow-orange-400/40 "
            onClick={() => {   //ทำงานเมื่อ object นั้นถูกคลิก
              auth.signout(() => navigate([]));
            }}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
