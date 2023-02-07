import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/Layout";
import Login from "../src/components/Login";
import AuthProvider from "../src/components/AuthProvider";
import RequireAuth from "../src/components/RequireAuth";
import Username from "../src/components/Username";

export default function App() {
  return (    
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>   
          <Route path="/" element={<Login />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Username />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

//หน้า Layout เป็น inex router ที่แสดง index ในทางออกของเส้นทางหลัก