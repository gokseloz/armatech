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
import theme from "../../../../theme";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import celsioShrink from "../../../../assets/images/takim-tutucular/mekanik-takim-tutucular/celsio-shrink.png";
import erPensli from "../../../../assets/images/takim-tutucular/mekanik-takim-tutucular/er-pensli.png";
import weldon from "../../../../assets/images/takim-tutucular/mekanik-takim-tutucular/weldon.png";
import taramaMalafa from "../../../../assets/images/takim-tutucular/mekanik-takim-tutucular/tarama-malafa.png";

// Product Data
const productData = [
  {
    title: "CELSIO - Shrink Takım Tutucular",
    image: celsioShrink,
    productDetailLink: "/celsio-shrink-takim-tutucular",
    youtubeLink: undefined,
    keyFeatures: [
      "Yüksek tork iletimi",
      "50,000 RPM'ye kadar hız",
      "Hassas ve güvenilir sıkma",
    ],
  },
  {
    title: "ER Pensli Takım Tutucular",
    image: erPensli,
    productDetailLink: "/er-pensli-takim-tutucular",
    youtubeLink: undefined,
    keyFeatures: [
      "Esnek ve geniş sıkma aralığı",
      "Yüksek hassasiyetli işleme",
      "Dayanıklı ve uzun ömürlü yapı",
    ],
  },
  {
    title: "WELDON Takım Tutucular",
    image: weldon,
    productDetailLink: "/weldon",
    youtubeLink: undefined,
    keyFeatures: [
      "Silindirik şaftlı takım için güvenli sıkma",
      "Titreşim azaltma ve soğutma desteği",
      "DIN 1835B ve 6535HB standartlarına uygun",
    ],
  },
  {
    title: "Tarama Malafa Tutucular",
    image: taramaMalafa,
    productDetailLink: "/tarama-malafa-tutucular",
    youtubeLink: undefined,
    keyFeatures: [
      "Yüksek performanslı yüzey frezeleme",
      "DIN 1880 ve 2079 standartlarına uygun",
      "Genişletilmiş temas yüzeyi",
    ],
  },
];

const MekanikTakimTutucular = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Mekanik Takım Tutucular
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Yüksek performanslı Mekanik Takım Tutucuların detaylarını ve
          özelliklerini keşfedin.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
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

export default MekanikTakimTutucular;

// Styled Components
const ProductCardContainer = styled(Card)({
  width: 300,
  boxShadow: theme.shadows[5],
  "&:hover": {
    boxShadow: theme.shadows[10],
  },
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
    if (youtubeLink) setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const openProductDetail = (productDetailLink: string) => {
    navigate(`/takim-tutucular/mekanik-takim-tutucular${productDetailLink}`);
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
        {youtubeLink ? (
          <Box
            sx={{ textAlign: "center", cursor: "pointer" }}
            onClick={handleOpen}
          >
            <Typography variant="subtitle1" sx={{ color: "primary.main" }}>
              Videoyu İzle
            </Typography>
          </Box>
        ) : (
          <Stack
            sx={{
              height: 150,
              padding: 2,
              backgroundColor: "#f9f9f9",
              border: "1px solid #e0e0e0",
              justifyContent: "center",
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
      {youtubeLink && (
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
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "80%",
              backgroundColor: "#000",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <iframe
              src={youtubeLink}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allowFullScreen
            ></iframe>
          </Box>
        </Modal>
      )}
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
