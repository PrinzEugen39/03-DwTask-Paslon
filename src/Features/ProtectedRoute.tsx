import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/FakeAuthContext";
import { ReactNode, useEffect } from "react";

interface Props {
  children?: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const AuthContext = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!AuthContext || !AuthContext.isAuthenticated) navigate("/");
  }, [AuthContext, navigate]);

  return AuthContext && AuthContext.isAuthenticated ? children : null;
}
