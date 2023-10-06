import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/FakeAuthContext";
import { ReactNode, useEffect } from "react";

interface Props {
  children?: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}
