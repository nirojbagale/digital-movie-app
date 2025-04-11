import { createContext, useState, useEffect, useContext } from "react";
import api from "../API";

const DigitalMovieContext = createContext();
export const useDigitalMovieContext = () => useContext(DigitalMovieContext);

export const DigitalMovieProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    async function fetchUser() {
      if (isLoggedIn && user === null) {
        setLoading(true);
        try {
          const { data } = await api.get("/fetch-user");
          setUser(data);
        } catch (error) {
          setUser(null);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await api.post("/logout");
      setUser(null);
      alert("logout Success");
      localStorage.setItem("isLoggedIn", "false");
    } catch (error) {
      alert(error.response.data.message || error.message);
      console.log("error");
    }
  };

  return (
    <DigitalMovieContext.Provider
      value={{
        user,
        setUser,
        setLoading,
        loading,
        logout,
      }}
    >
      {children}
    </DigitalMovieContext.Provider>
  );
};
