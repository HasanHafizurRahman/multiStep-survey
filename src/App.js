import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./Shared/Footer";
import FirstPage from "./components/FirstPage"
import Navbar from "./Shared/Navbar";
import { GlobalStyles } from "./styles/Global.styled";

const Theme = {
  color: {
    white: "#fff",
    black: "#1F1D1D"
  },
  mobile: "980px",
  smallMobile: "580px"
}

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Navbar />
      <FirstPage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
