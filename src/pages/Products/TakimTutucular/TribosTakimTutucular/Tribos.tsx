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
import tribosImage from "../../../../assets/images/takim-tutucular/tribos.png";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import theme from "../../../../theme";

// Tribos product data
const tribosProducts = [
  {
    title: "TRIBOS R",
    productDetailLink: "/tribos-r",
    youtubeLink: "https://www.youtube.com/embed/RHdN8QrSr6I",
  },
  {
    title: "TRIBOS S",
    productDetailLink: "/tribos-s",
    youtubeLink: "https://www.youtube.com/embed/gBAhXfUEuF8",
  },
  {
    title: "TRIBOS RM",
    productDetailLink: "/tribos-rm",
    youtubeLink: undefined,
    keyFeatures: [
      "Hassas ve Güvenilir İşleme",
      "Yüksek Hız ve Stabilite",
      "Kolay Araç Değişimi",
    ],
  },
  {
    title: "TRIBOS Mini",
    productDetailLink: "/tribos-mini",
    youtubeLink: undefined,
    keyFeatures: [
      "0.3 mm'den Başlayan Şaft Çapları",
      "Hassas İşleme ve Uzun Takım Ömrü",
      "Yüksek Hızlara Uygun",
    ],
  },
];

const Tribos = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          TRIBOS Takım Tutucular
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mb={4}>
          TRIBOS, SCHUNK'un polygonal sıkma teknolojisiyle donatılmış bir takım
          tutucu sistemidir. Bu sistem, yüksek hassasiyetli mikro işlemeden
          büyük hacimli kesime kadar geniş bir uygulama yelpazesinde mükemmel
          performans gösterir.
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
          TRIBOS Takım Tutucuların Genel Özellikleri
        </Typography>
        <Typography component="ul" sx={{ pl: 4 }}>
          <Typography component="li" mb={2}>
            TRIBOS’un hassasiyeti (&lt;0.003 mm), uzun bir servis ömrü ve üstün
            yüzey kalitesi sağlar.
          </Typography>
          <Typography component="li" mb={2}>
            Patentli TRIBOS çokgen sıkma teknolojisi, çeşitli ara çapları için
            ideal bir uyum ve güçlü sıkma sağlar.
          </Typography>
          <Typography component="li" mb={2}>
            TRIBOS tamamen bakımsızdır, bu da işletme maliyetlerini düşürür ve
            işletme verimliliğini artırır.
          </Typography>
          <Typography component="li" mb={2}>
            Honeycomb/anchor yapısı sayesinde, TRIBOS titreşimleri etkili bir
            şekilde sönümler ve iş parçası kalitesini artırır.
          </Typography>
          <Typography component="li" mb={2}>
            Farklı çapları için çok yönlü kavrama aralıkları oluşturur, böylece
            çeşitli iş parçaları için uygunluğu artırır.
          </Typography>
          <Typography component="li">
            TRIBOS, mikro işlemeden super finish işlemine kadar geniş bir
            uygulama alanında en iyi performansı sunar.
          </Typography>
        </Typography>
      </Box>

      {/* Product Cards Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          paddingBottom: 2,
        }}
      >
        {tribosProducts.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            productDetailLink={product.productDetailLink}
            youtubeLink={product.youtubeLink}
            keyFeatures={product.keyFeatures}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Tribos;

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
  productDetailLink,
  youtubeLink,
  keyFeatures,
}: {
  title: string;
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
    navigate(`/takim-tutucular/tribos${productDetailLink}`);
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
            image={tribosImage}
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
