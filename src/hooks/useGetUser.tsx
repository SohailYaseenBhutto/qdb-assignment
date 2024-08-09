import { useState } from "react";
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

interface User {
  name: string;
}

const getRandomUserId = () => Math.floor(Math.random() * 10) + 1;

export const useGetUser = () => {
  const [user, setUser] = useState<User>({
    name: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/users/${getRandomUserId()}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { user, fetchUser, isLoading };
};
