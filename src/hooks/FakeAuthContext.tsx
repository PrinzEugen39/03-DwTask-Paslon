import { ReactNode, createContext, useContext, useReducer, Dispatch } from "react";

export interface iAuthContext {
  isAuthenticated?: boolean;
  user?: object;
  children?: ReactNode;
  login?: (email: string, password: string) => void;
  logout?: () => void;
}

const AuthContext = createContext<iAuthContext | null>(null);


interface State {
  user: object;
  isAuthenticated: boolean;
}
interface Action {
  type: string;
  payload?: typeof FAKE_USER;
}

const initialState: State = {
  user: {},
  isAuthenticated: false,
};

function reducer(state: State, action:Action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  email: "mikumiku@example.com",
  password: "qwerty",
};

function AuthProvider({ children }: iAuthContext) {
  const [{ user, isAuthenticated }, dispatch]: [State, Dispatch<Action>] = useReducer(reducer, initialState);

  function login(email: string, password:string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of AuthProvider");
  return context;
}


// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
