import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from "./pages/About.component";
import NotFound from "./pages/NotFound.component";
import Home from "./pages/Home.component"; // Optional if you redirect away from "/"
import NavBar from "./components/NavBar/NavBar.component";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import OpShape from "./components/GameInstances/SSS.component";
import Layout from "./components/Layout/Layout.component";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            {/* Redirect root to /games/ship-shape-slam if only one game */}
            {/* <Route path="/" element={<Navigate to="/games/ship-shape-slam" replace />} /> */}
            <Route path="/" element={<OpShape />} />

            {/* Static pages */}
            {/* <Route path="/about" element={<About />} /> */}

            {/* Game-specific routes */}
            {/* <Route path="/games/ship-shape-slam" element={<OpShape />} /> */}

            {/* 404 fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
