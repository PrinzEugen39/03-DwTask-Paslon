import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Paslon from "./pages/Paslon/1.Paslon";
import { ThemeProvider } from "./hooks/ThemeContext";
import Login from "./pages/Login/Login";
import Contact from "./pages/Homepage/Contact";
import { AuthProvider } from "./hooks/FakeAuthContext";
import ProtectedRoute from "./Features/ProtectedRoute";
// import AddPartaiDrawer from "./components/AddPartaiDrawer";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={""}>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            <Route path="/paslon" element={<ProtectedRoute><Paslon /></ProtectedRoute>}/>

          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}
