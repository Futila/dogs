import { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "../services/api";

const UserContext = createContext();

const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(async () => {
    setError(null);
    setData(null);
    setLogin(false);
    setLoading(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  };

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenResponse = await fetch(url, options);
      if (!tokenResponse.ok) throw new Error(`Error: Invalid User `);

      const { token } = await tokenResponse.json();

      window.localStorage.setItem("token", token);
      await getUser(token);

      navigate("/account");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);
          const tokenResponse = await fetch(url, options);
          if (!tokenResponse.ok) throw new Error(`Invalid Token`);
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }

    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ data, userLogin, error, loading, userLogout, login }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserStorage };
