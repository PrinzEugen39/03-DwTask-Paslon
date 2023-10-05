import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Paslon from "./pages/Paslon";
import { ThemeProvider } from "./hooks/ThemeContext";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={""}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="paslon" element={<Paslon />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
