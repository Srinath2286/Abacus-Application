import React, { useState } from "react";

export const AuthLogin = React.createContext();
let initial = {
  isAuth: false,
  token: null
};
export default function NewCreatedHook({ children }) {
  const [state, setState] = useState(initial);
  let isLogin = (token) => {
    setState({
      ...state,
      isAuth: true,
      token: token
    });
  };
  let isLogout = () => {
    setState({
      ...state,
      isAuth: false,
      token: ""
    });
  };
  return (
    <div>
      <AuthLogin.Provider value={{ state, isLogin, isLogout }}>
        {children}
      </AuthLogin.Provider>
    </div>
  );
}