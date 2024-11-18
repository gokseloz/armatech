import {
  Typography,
  Box,
  styled,
  Card,
  CardMedia,
  CardContent,
  Modal,
  Backdrop,
  Stack,
} from "@mui/material";
import { useState } from "react";
import nsl3150200400 from "../../../../assets/images/vero-s-hizli-palet-degistirme-sistemi/otomatik-yukleme-bosaltma/vero-s-nsl3-150-200-400/nsl3150200400.webp";
import turnImage from "../../../../assets/images/vero-s-hizli-palet-degistirme-sistemi/otomatik-yukleme-bosaltma/nsl3-turn/nsl3-turn.png";
import pimleriImage from "../../../../assets/images/vero-s-hizli-palet-degistirme-sistemi/otomatik-yukleme-bosaltma/vero-s-pimleri/vero-s-pimleri.png";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Container from "../../../../components/Container";
import theme from "../../../../theme";

// Sub-products data
const subProducts = [
  {
    title: "VERO-S NSL3 150 – 200 – 400 HAZIR MODÜLLER",
    productDetailLink:
      "/vero-s-hizli-palet-degistirme-sistemleri/otomatik-yukleme-bosaltma/NSL3-150-200-400-hazir-moduller",
    youtubeLink: "https://www.youtube.com/embed/SCzD-ivKuxM",
    image: nsl3150200400,
  },
  {
    title: "NSL3 TURN - DİK veya Yatay Tornalarda Kullanılan Zero Pointler",
    productDetailLink:
      "/vero-s-hizli-palet-degistirme-sistemleri/otomatik-yukleme-bosaltma/NSL3-Turn",
    youtubeLink: "https://www.youtube.com/embed/btoG3QpJAZQ",
    image: turnImage,
  },
  {
    title: "VERO-S PİMLERİ",
    productDetailLink:
      "/vero-s-hizli-palet-degistirme-sistemleri/otomatik-yukleme-bosaltma/vero-s-pimleri",
    youtubeLink: undefined,
    image: pimleriImage,
    keyFeatures: [
      "< 0.005 mm doğrulukta kolay birleştirme süreci sağlar.",
      "Tüm NSE3 modülleri ile uyumlu",
      "Mikron hassasiyetinde sabitleme ve pozisyonlama sunar.",
    ],
  },
];

const OtomatikYuklemeBosaltma = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Otomatik Yükleme ve Boşaltma için Hızlı Değişim Palet Sistemleri
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mb={4}>
          NSE-A3, NSA Plus ve NSR serisi robot kaplinleri, küçük iş parçası
          boyutları ve bireysel parçalar için bile otomatik yükleme ve
          boşaltmayı standart hale getirir. Bu sistemler, kurulum sürelerini
          azaltmayı ve düşük iş gücü gereksinimleri ile 24 saat kesintisiz
          üretim sağlamayı hedefler. Yüksek hassasiyet düzeyinde sıkma ve
          güvenilir süreçler sunar.
        </Typography>
      </Box>

      {/* General Features Section */}
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          padding: 4,
          marginBottom: 4,
          borderRadius: "8px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Genel Özellikler
        </Typography>
        <Typography component="ul" sx={{ pl: 4 }}>
          <Typography component="li" mb={2}>
            Kurulum sürelerini %90 oranında azaltır, makine kapasitesini daha
            verimli kullanır.
          </Typography>
          <Typography component="li" mb={2}>
            &lt; 0.005 mm tekrarlama hassasiyeti ile yüksek hassasiyetli işleme
            sunar.
          </Typography>
          <Typography component="li" mb={2}>
            Kompakt tasarımlar, üretim alanında yer tasarrufu sağlar.
          </Typography>
          <Typography component="li" mb={2}>
            Yay kuvvetiyle enerji nötr sıkma, güvenli ve güvenilir bağlantı
            sağlar.
          </Typography>
          <Typography component="li">
            İzleme seçenekleriyle süreç kontrolünü kolaylaştırır ve
            güvenilirliği artırır.
          </Typography>
        </Typography>
      </Box>

      {/* Sub-product Cards Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          paddingBottom: 2,
        }}
      >
        {subProducts.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            image={product.image}
            productDetailLink={product.productDetailLink}
            youtubeLink={product.youtubeLink}
            keyFeatures={product.keyFeatures}
          />
        ))}
      </Box>
    </Container>
  );
};

export default OtomatikYuklemeBosaltma;

// Styled Components
const ProductCardContainer = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: 300,
  boxShadow: theme.shadows[5],
  "&:hover": {
    boxShadow: theme.shadows[10],
  },
});

const VideoContainer = styled("div")({
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",
  zIndex: 10,
  height: 150,
  "&:hover": {
    opacity: 0.3,
  },
});

const YouTubeIframe = styled("iframe")({
  width: "100%",
  height: "100%",
  border: "none",
  position: "relative",
  zIndex: -1,
});

const ModalContent = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  maxWidth: "960px",
  backgroundColor: "#000",
  borderRadius: "8px",
  overflow: "hidden",
  outline: "none",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
});

const ProductCard = ({
  title,
  image,
  productDetailLink,
  youtubeLink,
  keyFeatures,
}: {
  title: string;
  image: string;
  productDetailLink: string;
  youtubeLink?: string;
  keyFeatures?: string[];
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const openProductDetail = (productDetailLink: string) => {
    navigate(productDetailLink);
  };

  return (
    <>
      <ProductCardContainer>
        <Stack
          sx={{
            cursor: "pointer",
          }}
          onClick={() => openProductDetail(productDetailLink)}
        >
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              padding: 1,
              height: 150,
              objectFit: "contain",
            }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h6">{title}</Typography>
          </CardContent>
        </Stack>
        {youtubeLink && (
          <VideoContainer onClick={handleOpen}>
            <YouTubeIframe
              src={youtubeLink}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoContainer>
        )}
        {!youtubeLink && (
          <Stack
            sx={{
              display: "flex",
              height: 150,
              paddingLeft: 2,
              justifyContent: "center",
              backgroundColor: "#f9f9f9",
              border: "1px solid #e0e0e0",
            }}
          >
            <Typography textAlign="center" variant="subtitle1" gutterBottom>
              Öne Çıkan Özellikler
            </Typography>
            {keyFeatures?.map((feature) => (
              <KeyFeature
                key={feature}
                icon={
                  <CheckCircleIcon
                    sx={{ color: "primary.main", fontSize: 16 }}
                  />
                }
                title={feature}
              />
            ))}
          </Stack>
        )}
      </ProductCardContainer>

      {/* Video Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        }}
      >
        <ModalContent>
          <YouTubeIframe
            src={youtubeLink}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </ModalContent>
      </Modal>
    </>
  );
};

const KeyFeature = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    {icon}
    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
      {title}
    </Typography>
  </Box>
);
