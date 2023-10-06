import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/FakeAuthContext";
import { ReactNode, useEffect } from "react";

interface Props {
  children?: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth || !auth.isAuthenticated) navigate("/");
  }, [auth, navigate]);

  return auth && auth.isAuthenticated ? children : null;
}
