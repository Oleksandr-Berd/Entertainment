import { useState } from "react";

export const useAuthHeader = (token: string) => {
  const [authHeader, setAuthHeader] = useState<string | null>(null);

  if (token) {
    setAuthHeader(`Bearer ${token}`);
  } else {
    setAuthHeader(null);
  }

  const setToken = (newToken: string) => {
    setAuthHeader(newToken);
  };

  const clearToken = () => {
    setAuthHeader(null);
  };

  return {
    authHeader,
    setToken,
    clearToken,
  };
};
