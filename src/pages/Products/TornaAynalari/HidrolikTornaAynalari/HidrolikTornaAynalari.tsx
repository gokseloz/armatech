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
import Container from "../../../../components/Container";
import theme from "../../../../theme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Importing images
import rota2bImage from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-2b.webp";
import rotaNCPlus2Image from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-nc-plus-2.webp";
import rotaNCFPlus2Image from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-ncf-plus-2.webp";
import rotaNCEImage from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-nce.webp";
import rotaNCOImage from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-nco.webp";
import rotaNCRAImage from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-ncr-a.webp";
import rotaTHW3Image from "../../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-thw3.webp";

// Product data
const products = [
  {
    title: "ROTA THW3",
    image: rotaTHW3Image,
    productDetailLink: "/rota-thw3",
    youtubeLink: "https://www.youtube.com/embed/NqdE8t54x6s",
  },
  {
    title: "ROTA NC Plus 2",
    image: rotaNCPlus2Image,
    productDetailLink: "/rota-nc-plus-2",
    youtubeLink: "https://www.youtube.com/embed/Xf9fcp8F7so&t=76s",
  },
  {
    title: "ROTA NCF Plus 2",
    image: rotaNCFPlus2Image,
    productDetailLink: "/rota-ncf-plus-2",
    youtubeLink: "https://www.youtube.com/embed/3tdD9wSwYk0",
  },
  {
    title: "ROTA NCE",
    image: rotaNCEImage,
    productDetailLink: "/rota-nce",
    youtubeLink: "https://www.youtube.com/embed/2GA4VWjdRC8",
  },
  {
    title: "ROTA NCO",
    image: rotaNCOImage,
    productDetailLink: "/rota-nco",
    youtubeLink: undefined,
    keyFeatures: [
      "Soğutma sıvısı ve talaş koruması",
      "Düşük yükseklik tasarımı",
      "Uzun ömürlü dayanıklılık",
    ],
  },
  {
    title: "ROTA NCR-A",
    image: rotaNCRAImage,
    productDetailLink: "/rota-ncr-a",
    youtubeLink: "https://www.youtube.com/embed/VjXFfY86mTk&t=53s",
  },
  {
    title: "ROTA 2B",
    image: rota2bImage,
    productDetailLink: "/rota-2b",
    youtubeLink: undefined,
    keyFeatures: [
      "Hassas kam kilitli güç torna aynası",
      "Optimize edilmiş yağlama sistemi",
      "Uzun çene stroku ile esneklik",
    ],
  },
];

// Styled components
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
            (window.location.href = `/torna-aynalari/hidrolik-torna-ayarlari${productDetailLink}`)
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

const HidrolikTornaAynalari = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Hidrolik Torna Aynaları
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Yüksek performanslı SCHUNK hidrolik torna aynalarının detaylarını ve
          ürün videolarını inceleyin.
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

export default HidrolikTornaAynalari;
