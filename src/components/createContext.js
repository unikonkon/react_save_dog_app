import * as React from "react";

export const DataContext = React.createContext([]);

export const useAuth = function useAuth() {
  return React.useContext(DataContext);
};
// export default useAuth;
