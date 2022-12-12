import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

type Props = {
  children: React.ReactNode;
};

const ProtectRoute = ({ children }: Props) => {
  const token = useAppSelector((state) => state?.authentication?.token);
  const location = useLocation();

  if (token) {
    return <Navigate to="/dashboard" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectRoute;
