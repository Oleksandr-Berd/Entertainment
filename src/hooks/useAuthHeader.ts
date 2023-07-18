import { useState } from "react";

export const useAuthHeader = (token: any) => {
  const [authHeader, setAuthHeader] = useState<any>(null);

  if (token) {
    setAuthHeader({
      Authorization: `Bearer ${token}`,
    });
  } else {
    setAuthHeader(null);
  }

  const setToken = (newToken: any) => {
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
