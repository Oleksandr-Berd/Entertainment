import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsError,
} from "redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);
    const isError = useSelector(selectIsError)
    
  return {
    isLoggedIn,
    isRefreshing,
    user,
    isError,
  };
};
