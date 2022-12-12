import { Navigate, useLocation } from "react-router-dom";
import useFetchUser from "../hooks/useFetchUser";

type Props = {
  children: React.ReactNode;
};

const RequireAuth = ({ children }: Props) => {
  const { token } = useFetchUser({});
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default RequireAuth;
