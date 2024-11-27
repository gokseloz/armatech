import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Backdrop,
  Stack,
} from "@mui/material";
import styled from "@mui/system/styled";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Importing images
import tombstonesImage from "../../../assets/images/kuleler/tombstones.webp";
import veroSTombstonesImage from "../../../assets/images/kuleler/vero-s-tombstones.webp";
import theme from "../../../theme";
import Container from "../../../components/Container";

// Product data
const products = [
  {
    title: "TombStones",
    image: tombstonesImage,
    productDetailLink: "/tombstones",
    youtubeLink: "https://www.youtube.com/embed/Qu2OUPhD0PI",
  },
  {
    title: "VERO-S TombStones",
    image: veroSTombstonesImage,
    productDetailLink: "/vero-s-tombstones",
    youtubeLink: "https://www.youtube.com/embed/g__xj_qfcsU",
    keyFeatures: [
      "Yüksek tekrar edilebilirlik",
      "Titreşim emici gövde tasarımı",
      "0.01 mm taban doğruluğu",
    ],
  },
];

// Styled components
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
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (youtubeLink) setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <ProductCardContainer>
        <Stack
          sx={{
            cursor: "pointer",
          }}
          onClick={() =>
            (window.location.href = `/kule-baglama-sistemleri${productDetailLink}`)
          }
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
          <VideoContainer onClick={handleOpen}>
            <YouTubeIframe
              src={youtubeLink}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoContainer>
        ) : (
          <Stack
            sx={{
              display: "flex",
              height: 150,
              justifyContent: "center",
              backgroundColor: "#f9f9f9",
              border: "1px solid #e0e0e0",
              padding: 2,
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

const Kuleler = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Kuleler
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          SCHUNK'un kule serisi, sıkma cihazlarıyla üstün performans ve esneklik
          sunar.
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
        {products.map((product) => (
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

export default Kuleler;
