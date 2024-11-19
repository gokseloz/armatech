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
import Container from "../../../../components/Container";
import tendoECompact from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-e-compact.webp";
import tendoSilver from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-silver.webp";
import tendoSlim4ax from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-slim-4ax.webp";
import tendoPlatinum from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-platinum.webp";
import tendoZero from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-zero.webp";
import tendoLSS from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-lss.webp";
import tendoRLA from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-rla.webp";
import tendoTurn from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-turn.webp";
import tendoWZS from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-wzs.webp";
import iTendo2 from "../../../../assets/images/takim-tutucular/tendo-hidrolik-takim-tutucular/tendo-itendo2.webp";
import theme from "../../../../theme";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const productData = [
  {
    title: "TENDO E Compact",
    image: tendoECompact,
    productDetailLink: "/tendo-e-compact",
    youtubeLink: "https://www.youtube.com/embed/k1q1_cbXc1s",
  },
  {
    title: "TENDO Silver",
    image: tendoSilver,
    productDetailLink: "/tendo-silver",
    youtubeLink: "https://www.youtube.com/embed/xqnnVoHNDv0",
  },
  {
    title: "Tendo Slim 4ax",
    image: tendoSlim4ax,
    productDetailLink: "/tendo-slim-4ax",
    youtubeLink: "https://www.youtube.com/embed/4u77y69uB8k",
  },
  {
    title: "Tendo Platinum",
    image: tendoPlatinum,
    productDetailLink: "/tendo-platinum",
    youtubeLink: "https://www.youtube.com/embed/xqnnVoHNDv0",
  },
  {
    title: "Tendo Zero",
    image: tendoZero,
    productDetailLink: "/tendo-zero",
    youtubeLink: "https://www.youtube.com/embed/3tdD9wSwYk0",
  },
  {
    title: "Tendo LSS",
    image: tendoLSS,
    productDetailLink: "/tendo-lss",
    youtubeLink: undefined,
    keyFeatures: [
      "Dar alanlara kolay erişim",
      "Titreşim azaltma",
      "Enerji verimli performans",
    ],
  },
  {
    title: "Tendo RLA",
    image: tendoRLA,
    productDetailLink: "/tendo-rla",
    youtubeLink: undefined,
    keyFeatures: [
      "Mikron-Hassas Uzunluk Ayarı",
      "Hızlı ve Enerji Verimli Takım Değişimi",
      "Yüksek Hız ve Çok Yönlülük",
    ],
  },
  {
    title: "TENDO Turn",
    image: tendoTurn,
    productDetailLink: "/tendo-turn",
    youtubeLink: undefined,
    keyFeatures: [
      "Titreşim Sönümleme ile Uzun Ömür",
      "Hızlı ve Dayanıklı Tasarım",
      "Yüksek Hız ve Hassasiyet",
    ],
  },
  {
    title: "TENDO WZS",
    image: tendoWZS,
    productDetailLink: "/tendo-wzs",
    youtubeLink: undefined,
    keyFeatures: [
      "Geliştirilmiş Erişim ve Hassasiyet",
      "Uzun Ömür ve Titreşim Sönümleme",
      "Yüksek Performans ve Esneklik",
    ],
  },
  {
    title: "iTendo²",
    image: iTendo2,
    productDetailLink: "/itendo2",
    youtubeLink: "https://www.youtube.com/embed/wM7Y3jO7b7o",
  },
];

const TendoHidrolikTakimTutucular = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          TENDO Hidrolik Takım Tutucular
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Yüksek performanslı TENDO takım tutucuların detaylarını ve ürün
          videolarını inceleyin.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          paddingBottom: 2,
        }}
      >
        {productData.map((product) => (
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

export default TendoHidrolikTakimTutucular;

// Styled Components
const ProductCardContainer = styled(Card)({
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
    navigate(
      `/takim-tutucular/tendo-hidrolik-takim-tutucular${productDetailLink}`
    );
  };

  return (
    <>
      {/* Product Card */}
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
              // alignItems: "center",
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
          sx: { backgroundColor: "rgba(0, 0, 0, 0.8)" }, // Dark background overlay
        }}
      >
        <ModalContent id="tatata">
          <YouTubeIframe
            sx={{ zIndex: 0 }}
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
