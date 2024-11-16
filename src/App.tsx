import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import theme from "./theme";
import { Box, ThemeProvider } from "@mui/material";
import TakimTutucular from "./pages/Products/TakimTutucular/TakimTutucular";
import {
  TendoECompact,
  TendoSilver,
  TendoSlim4ax,
  TendoLSS,
  TendoPlatinum,
  TendoRLA,
  TendoTurn,
  TendoWZS,
  TendoZero,
} from "./pages/Products/TakimTutucular/TendoHidrolikTakimTutucular";
import {
  Tribos,
  TribosR,
  TribosS,
  TribosRM,
  TribosMini,
} from "./pages/Products/TakimTutucular/TribosTakimTutucular";
import SINOR from "./pages/Products/TakimTutucular/SINO-R/SINOR";
import {
  CelsioShrinkTakimTutucular,
  ErPensliTakimTutucular,
  Weldon,
  TaramaMalafaTutucular,
} from "./pages/Products/TakimTutucular/MekanikTakimTutucular";
import VERO_S_NSE3_ve_NSEPlus from "./pages/Products/VEROSHizliPaletDegistirmeSistemi/GenelFreezelemeUygulamalariVeAgirKesme/VERO_S_NSE3_ve_NSEPlus";
import VERO_S from "./pages/Products/VEROSHizliPaletDegistirmeSistemi/VERO_S";
import {
  VERO_S_OtomatikYuklemeBosaltma,
  VERO_S_NSL3_150_200_400,
  VERO_S_NSL3_Turn,
  VERO_S_Pimleri,
} from "./pages/Products/VEROSHizliPaletDegistirmeSistemi/OtomatikYuklemeVeBosaltma";
import VERO_S_WDM5X from "./pages/Products/VEROSHizliPaletDegistirmeSistemi/WDM5X/VERO_S_WDM5X";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box id="Ana Sayfa">
          <Header />
          <Box
            component="main"
            sx={{
              marginTop: "80px",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/takim-tutucular" element={<TakimTutucular />} />
              {/* Tendo Hidrolik Takım Tutucular */}
              <Route
                path="/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-e-compact"
                element={<TendoECompact />}
              />
              <Route
                path="/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-e-compact"
                element={<TendoECompact />}
              />
              <Route
                path="/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-silver"
                element={<TendoSilver />}
              />
              <Route
                path="/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-slim-4ax"
                element={<TendoSlim4ax />}
              />
              <Route
                path="/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-platinum"
                element={<TendoPlatinum />}
              />
              <Route
                path="/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-zero"
                element={<TendoZero />}
              />
              <Route
                path="/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-lss"
                element={<TendoLSS />}
              />
              <Route
                path="/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-rla"
                element={<TendoRLA />}
              />
              <Route
                path="/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-turn"
                element={<TendoTurn />}
              />
              <Route
                path="/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-wzs"
                element={<TendoWZS />}
              />
              {/* Tribos Takım Tutucular */}
              <Route path="/takim-tutucular/tribos" element={<Tribos />} />
              <Route
                path="/takim-tutucular/tribos/tribos-r"
                element={<TribosR />}
              />
              <Route
                path="/takim-tutucular/tribos/tribos-s"
                element={<TribosS />}
              />
              <Route
                path="/takim-tutucular/tribos/tribos-rm"
                element={<TribosRM />}
              />
              <Route
                path="/takim-tutucular/tribos/tribos-mini"
                element={<TribosMini />}
              />
              {/* SINO-R */}
              <Route path="/takim-tutucular/SINO-R" element={<SINOR />} />
              {/* Mekanik Takım Tutucular */}
              <Route
                path="/takim-tutucular/mekanik-takim-tutucular/celsio-shrink-takim-tutucular"
                element={<CelsioShrinkTakimTutucular />}
              />
              <Route
                path="/takim-tutucular/mekanik-takim-tutucular/er-pensli-takim-tutucular"
                element={<ErPensliTakimTutucular />}
              />
              <Route
                path="/takim-tutucular/mekanik-takim-tutucular/weldon"
                element={<Weldon />}
              />
              <Route
                path="/takim-tutucular/mekanik-takim-tutucular/tarama-malafa-tutucular"
                element={<TaramaMalafaTutucular />}
              />
              {/* VERO-S HIZLI PALET DEĞİŞTİRME SİSTEMİ */}
              <Route
                path="/vero-s-hizli-palet-degistirme-sistemleri/"
                element={<VERO_S />}
              />
              <Route
                path="/vero-s-hizli-palet-degistirme-sistemleri/nse3-nseplus/"
                element={<VERO_S_NSE3_ve_NSEPlus />}
              />
              <Route
                path="/vero-s-hizli-palet-degistirme-sistemleri/otomatik-yukleme-bosaltma"
                element={<VERO_S_OtomatikYuklemeBosaltma />}
              />
              <Route
                path="/vero-s-hizli-palet-degistirme-sistemleri/otomatik-yukleme-bosaltma/NSL3-150-200-400-hazir-moduller"
                element={<VERO_S_NSL3_150_200_400 />}
              />
              <Route
                path="/vero-s-hizli-palet-degistirme-sistemleri/otomatik-yukleme-bosaltma/NSL3-Turn"
                element={<VERO_S_NSL3_Turn />}
              />
              <Route
                path="/vero-s-hizli-palet-degistirme-sistemleri/otomatik-yukleme-bosaltma/vero-s-pimleri"
                element={<VERO_S_Pimleri />}
              />
              <Route
                path="/vero-s-hizli-palet-degistirme-sistemleri/WDM-5X"
                element={<VERO_S_WDM5X />}
              />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
