import React from "react";
import { fakeAuthProvider } from "../auth";
import { useEffect } from "react";
import { DataContext } from "../components/createContext";
//เชื่อม server   
//function component  Object children
function AuthProvider({ children }) {
  let [user, setUser] = React.useState(() => {
    const saveUser = localStorage.getItem("user");
    if (saveUser && "null" !== saveUser) {  // คำสั่ง if ถ้ามีข้อมูล saveUser และ ค่า null ไม่เท่ากับ saveUser
      return saveUser;                      // return  ข้อมูล saveUser ออกมา
    } else {                                // หรือไม่มี return ค่า
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };
  let value = { user, signin, signout };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
export default AuthProvider;
