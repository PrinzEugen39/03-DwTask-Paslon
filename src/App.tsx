import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Paslon from "./pages/Paslon/1.Paslon";
import { ThemeProvider } from "./hooks/ThemeContext";
// import AddPartaiDrawer from "./components/AddPartaiDrawer";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={""}>
        <Routes>
          <Route index element={<Homepage />} />

          <Route path="/paslon" element={<Paslon />}>
            {/* <Route path="/paslon/create" element={<AddPartaiDrawer />}/> */}
          </Route>

        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
