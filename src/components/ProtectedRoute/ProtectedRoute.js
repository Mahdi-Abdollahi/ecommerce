import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigate();
  useEffect(() => {
    if (!user) {
      navigation({
        pathname: "/login",
      });
    }
  }, [user, navigation]);

  return children;
};

export default ProtectedRoute;
