import { ThemeProvider } from "styled-components";
import Footer from "./Shared/Footer";
import FirstPage from "./components/FirstPage"
import SecondPage from "./components/SecondPage"
import Navbar from "./Shared/Navbar";
import { GlobalStyles } from "./styles/Global.styled";
import ThirdPage from "./components/ThirdPage";
import PreviewPage from "./components/PreviewPage";
import { useState } from "react";

const Theme = {
  color: {
    white: "#fff",
    black: "#1F1D1D"
  },
  mobile: "980px",
  smallMobile: "580px"
}

function App() {
  let [page, setPage] = useState(1);

  let [surveyData, setSurveyData] = useState({
    language: "",
    experience: 0,
    favouriteChannel: []
  })

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Navbar page={page} />
      {
        page === 1 && <FirstPage setPage={setPage} setSurveyData={setSurveyData} surveyData={surveyData} />
      }
      {
        page === 2 && <SecondPage setPage={setPage} setSurveyData={setSurveyData} surveyData={surveyData} />
      }
      {
        page === 3 && <ThirdPage setPage={setPage} setSurveyData={setSurveyData} surveyData={surveyData} />
      }
      {
        page === 4 && <PreviewPage surveyData={surveyData} />
      }
      <Footer />
    </ThemeProvider>
  );
}

export default App;
