import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import theme from "./theme";
import { Box, Stack, ThemeProvider } from "@mui/material";
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
import VeroSHizliPaletDegistirmeSistemi from "./pages/Products/VEROSHizliPaletDegistirmeSistemi/VERO_S";
import {
  VERO_S_OtomatikYuklemeBosaltma,
  VERO_S_NSL3_150_200_400,
  VERO_S_NSL3_Turn,
  VERO_S_Pimleri,
} from "./pages/Products/VEROSHizliPaletDegistirmeSistemi/OtomatikYuklemeVeBosaltma";
import VERO_S_WDM5X from "./pages/Products/VEROSHizliPaletDegistirmeSistemi/WDM5X/VERO_S_WDM5X";
import Home from "./pages/Home";
import TornaAynalari from "./pages/Products/TornaAynalari/TornaAynalari";
import HidrolikTornaAynalari from "./pages/Products/TornaAynalari/HidrolikTornaAynalari/HidrolikTornaAynalari";
import ROTA_2B from "./pages/Products/TornaAynalari/HidrolikTornaAynalari/ROTA_2B";
import ROTA_NC_PLUS_2 from "./pages/Products/TornaAynalari/HidrolikTornaAynalari/ROTA_NC_PLUS_2";
import ROTA_NCE from "./pages/Products/TornaAynalari/HidrolikTornaAynalari/ROTA_NCE";
import ROTA_NCF_PLUS_2 from "./pages/Products/TornaAynalari/HidrolikTornaAynalari/ROTA_NCF_PLUS_2";
import ROTA_NCO from "./pages/Products/TornaAynalari/HidrolikTornaAynalari/ROTA_NCO";
import ROTA_NCR_A from "./pages/Products/TornaAynalari/HidrolikTornaAynalari/ROTA_NCR_A";
import ROTA_THW3 from "./pages/Products/TornaAynalari/HidrolikTornaAynalari/ROTA_THW3";
import MekanikTornaAynalari from "./pages/Products/TornaAynalari/MekanikTornaAynalari/MekanikTornaAynalari";
import ROTA_M_FLEX_2_2 from "./pages/Products/TornaAynalari/MekanikTornaAynalari/ROTA_M_FLEX_2_2";
import ROTA_S_FLEX from "./pages/Products/TornaAynalari/MekanikTornaAynalari/ROTA_S_FLEX";
import ROTA_S_PLUS_2_0 from "./pages/Products/TornaAynalari/MekanikTornaAynalari/ROTA_S_PLUS_2_0";
import PnomatikTornaAynalari from "./pages/Products/TornaAynalari/PnomatikTornaAynalari/PnomatikTornaAynalari";
import ROTA_TP from "./pages/Products/TornaAynalari/PnomatikTornaAynalari/ROTA_TP";
import THLPlusAraYatakLunetler from "./pages/Products/TornaAynalari/THLPlusAraYatakLunetler/THLPlusAraYatakLunetler";
import KuvvetBloklari from "./pages/Products/KuvvetBloklari/KuvvetBloklari";
import TANDEM_KRP from "./pages/Products/KuvvetBloklari/TANDEM_KRP";
import TANDEM_KSP3 from "./pages/Products/KuvvetBloklari/TANDEM_KSP3";
import TANDEM_KSF3 from "./pages/Products/KuvvetBloklari/TANDEM_KSF3";
import TANDEM_KSH3 from "./pages/Products/KuvvetBloklari/TANDEM_KSH3";
import Mengeneler from "./pages/Products/Mengeneler/Mengeneler";
import KSC_D_Mengene from "./pages/Products/Mengeneler/KSC_D_Mengene";
import KSC_F_Mengene from "./pages/Products/Mengeneler/KSC_F_Mengene";
import KSC_Mini_Mengene from "./pages/Products/Mengeneler/KSC_Mini_Mengene";
import KSC3_K_Mengene from "./pages/Products/Mengeneler/KSC3_K_Mengene";
import KSC3_Mengene from "./pages/Products/Mengeneler/KSC3_Mengene";
import KSG_Mengene from "./pages/Products/Mengeneler/KSG_Mengene";
import KSM2_Mengene from "./pages/Products/Mengeneler/KSM2_Mengene";
import KSX_C2_Mengene from "./pages/Products/Mengeneler/KSX_C2_Mengene";
import KSX_Mengene from "./pages/Products/Mengeneler/KSX_Mengene";
import Kuleler from "./pages/Products/Kuleler/Kuleler";
import TombStones from "./pages/Products/Kuleler/TombStones";
import VERO_S_Tombstones from "./pages/Products/Kuleler/VERO_S_Tombstones";
import ManyetikTablalar from "./pages/Products/ManyetikTablalar/ManyetikTablalar";
import Kaldirac from "./pages/Products/ManyetikTablalar/Kaldirac";
import KareKutupluManyetikTabla from "./pages/Products/ManyetikTablalar/KareKutupluManyetikTabla";
import KontrolUnitesi from "./pages/Products/ManyetikTablalar/KontrolUnitesi";
import SpeedyBat from "./pages/Products/ManyetikTablalar/SpeedyBat";
import TaslamaManyetigi from "./pages/Products/ManyetikTablalar/TaslamaManyetigi";
import TelErezyonManyetigi from "./pages/Products/ManyetikTablalar/TelErezyonManyetigi";
import VakumTabla from "./pages/Products/VakumTabla/VakumTabla";
import CapakAlma from "./pages/Products/CapakAlma/CapakAlma";
import Otomatik from "./pages/Products/Otomatik/Otomatik";
import TendoHidrolikTakimTutucular from "./pages/Products/TakimTutucular/TendoHidrolikTakimTutucular/TendoHidrolikTakimTutucular";
import MekanikTakimTutucular from "./pages/Products/TakimTutucular/MekanikTakimTutucular/MekanikTakimTutucular";
import Footer from "./components/Footer/Footer";
import Itendo2 from "./pages/Products/TakimTutucular/TendoHidrolikTakimTutucular/Itendo2";
import UseScrollToTop from "./hooks/UseScrollToTop";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <UseScrollToTop />
        <Box id="Ana Sayfa">
          <Header />
          <Stack
            component="main"
            justifyContent="space-between"
            minHeight="100vh"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/takim-tutucular" element={<TakimTutucular />} />
              {/* Tendo Hidrolik Takım Tutucular */}
              <Route
                path="/takim-tutucular/tendo-hidrolik-takim-tutucular"
                element={<TendoHidrolikTakimTutucular />}
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
              <Route
                path="/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-wzs"
                element={<TendoWZS />}
              />
              <Route
                path="/takim-tutucular/tendo-hidrolik-takim-tutucular/itendo2"
                element={<Itendo2 />}
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
                path="/takim-tutucular/mekanik-takim-tutucular"
                element={<MekanikTakimTutucular />}
              />
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
                element={<VeroSHizliPaletDegistirmeSistemi />}
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
              {/* TORNA AYNALARI */}
              <Route path="/torna-aynalari/" element={<TornaAynalari />} />4
              {/* Hidrolik Torna Aynalari */}
              <Route
                path="/torna-aynalari/hidrolik-torna-ayarlari/"
                element={<HidrolikTornaAynalari />}
              />
              <Route
                path="/torna-aynalari/hidrolik-torna-ayarlari/rota-2b/"
                element={<ROTA_2B />}
              />
              <Route
                path="/torna-aynalari/hidrolik-torna-ayarlari/rota-nc-plus-2/"
                element={<ROTA_NC_PLUS_2 />}
              />
              <Route
                path="/torna-aynalari/hidrolik-torna-ayarlari/rota-nce"
                element={<ROTA_NCE />}
              />
              <Route
                path="/torna-aynalari/hidrolik-torna-ayarlari/rota-ncf-plus-2"
                element={<ROTA_NCF_PLUS_2 />}
              />
              <Route
                path="/torna-aynalari/hidrolik-torna-ayarlari/rota-nco"
                element={<ROTA_NCO />}
              />
              <Route
                path="/torna-aynalari/hidrolik-torna-ayarlari/rota-ncr-a"
                element={<ROTA_NCR_A />}
              />
              <Route
                path="/torna-aynalari/hidrolik-torna-ayarlari/rota-thw3"
                element={<ROTA_THW3 />}
              />
              {/* MEKANIK TORNA AYNALARI */}
              <Route
                path="/torna-aynalari/mekanik-torna-ayarlari/"
                element={<MekanikTornaAynalari />}
              />
              <Route
                path="/torna-aynalari/mekanik-torna-ayarlari/rota-m-flex-2-2"
                element={<ROTA_M_FLEX_2_2 />}
              />
              <Route
                path="/torna-aynalari/mekanik-torna-ayarlari/rota-s-flex"
                element={<ROTA_S_FLEX />}
              />
              <Route
                path="/torna-aynalari/mekanik-torna-ayarlari/rota-s-plus-2-0"
                element={<ROTA_S_PLUS_2_0 />}
              />
              {/* PNOMATIK TORNA AYNALARI */}
              <Route
                path="/torna-aynalari/pnomatik-torna-ayarlari/"
                element={<PnomatikTornaAynalari />}
              />
              <Route
                path="/torna-aynalari/pnomatik-torna-ayarlari/rota-tp"
                element={<ROTA_TP />}
              />
              {/* THL Plus Ara Yatak Lunetler */}
              <Route
                path="/torna-aynalari/thl-plus-ara-yatak-lunetler/"
                element={<THLPlusAraYatakLunetler />}
              />
              {/* Kuvvet Bloklari */}
              <Route path="/kuvvet-bloklari/" element={<KuvvetBloklari />} />
              <Route
                path="/kuvvet-bloklari/tandem-krp"
                element={<TANDEM_KRP />}
              />
              <Route
                path="/kuvvet-bloklari/tandem-ksf3"
                element={<TANDEM_KSF3 />}
              />
              <Route
                path="/kuvvet-bloklari/tandem-ksh3"
                element={<TANDEM_KSH3 />}
              />
              <Route
                path="/kuvvet-bloklari/tandem-ksp3"
                element={<TANDEM_KSP3 />}
              />
              {/* Mengeneler */}
              <Route path="/mengeneler/" element={<Mengeneler />} />
              <Route path="/mengeneler/ksc-d" element={<KSC_D_Mengene />} />
              <Route path="/mengeneler/ksc-f" element={<KSC_F_Mengene />} />
              <Route
                path="/mengeneler/ksc-mini"
                element={<KSC_Mini_Mengene />}
              />
              <Route path="/mengeneler/ksc-3-k" element={<KSC3_K_Mengene />} />
              <Route path="/mengeneler/ksc-3" element={<KSC3_Mengene />} />
              <Route path="/mengeneler/ksg" element={<KSG_Mengene />} />
              <Route path="/mengeneler/ksm-2" element={<KSM2_Mengene />} />
              <Route path="/mengeneler/ksx-c2" element={<KSX_C2_Mengene />} />
              <Route path="/mengeneler/ksx" element={<KSX_Mengene />} />
              {/* Kuleler */}
              <Route path="/kuleler/" element={<Kuleler />} />
              <Route path="/kuleler/tombstones" element={<TombStones />} />
              <Route
                path="/kuleler/vero-s-tombstones"
                element={<VERO_S_Tombstones />}
              />
              {/* Manyetik Tablalar */}
              <Route
                path="/manyetik-tablalar/"
                element={<ManyetikTablalar />}
              />
              <Route
                path="/manyetik-tablalar/kaldirac"
                element={<Kaldirac />}
              />
              <Route
                path="/manyetik-tablalar/kare-kutuplu-manyetik-tabla"
                element={<KareKutupluManyetikTabla />}
              />
              <Route
                path="/manyetik-tablalar/kontrol-unitesi"
                element={<KontrolUnitesi />}
              />
              <Route
                path="/manyetik-tablalar/speedy-bat"
                element={<SpeedyBat />}
              />
              <Route
                path="/manyetik-tablalar/taslama-manyetigi"
                element={<TaslamaManyetigi />}
              />
              <Route
                path="/manyetik-tablalar/tel-erozyon-manyetigi"
                element={<TelErezyonManyetigi />}
              />
              {/* Vakum Tabla */}
              <Route path="/vakum-tabla" element={<VakumTabla />} />
              {/* Capak Alma */}
              <Route path="/capak-alma" element={<CapakAlma />} />
              {/* Otomatik */}
              <Route path="/otomatik" element={<Otomatik />} />
            </Routes>
            <Footer />
          </Stack>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
