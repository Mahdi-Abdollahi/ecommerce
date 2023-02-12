import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/local`, {
      identifier: email,
      password,
    });

    const { jwt, user } = response.data;
    localStorage.setItem("jwt", jwt);
    localStorage.setItem("user", JSON.stringify(user));
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
};

const register = async (username, email, password, fullname) => {
  try {
    const response = await axios.post(`${API_URL}/auth/local/register`, {
      fullname,
      username,
      email,
      password,
    });
    const { jwt, user } = response.data;
    localStorage.setItem("jwt", jwt);
    localStorage.setItem("user", JSON.stringify(user));

    return response.data;
  } catch (error) {
    throw error;
  }
};

const authAPI = {
  login,
  logout,
  register,
};

export default authAPI;
