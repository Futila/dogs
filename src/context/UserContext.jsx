import { createContext, useState } from "react";
import { TOKEN_POST, USER_GET } from "../services/api";

const UserContext = createContext();

const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(null);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(json);
  };

  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenResponse = await fetch(url, options);
    const { token } = await tokenResponse.json();

    window.localStorage.setItem("token", token);

    getUser(token);
  };

  return (
    <UserContext.Provider value={{ data, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserStorage };
