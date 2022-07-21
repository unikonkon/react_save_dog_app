import { useAuth } from "../components/createContext"
import { useLocation, Navigate } from "react-router-dom"
function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();   //useLocation คือ ใช้เพื่อรับพารามิตเตอร์จากการค้นหา
  
    if (!auth.user) {       // ถ้าไม่มี auth.user return หน้า login ที่มีค่า state 
      return <Navigate to="/login" state={{ from: location }} replace />;
    }                                     // state ที่มีตัวแปร from เก็บค่า location ไว้
  
    return children;
  }
  export default RequireAuth;