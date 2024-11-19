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
import Container from "../../../components/Container";
import theme from "../../../theme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Importing images
import ksc3Image from "../../../assets/images/mengeneler/ksc3.webp";
import ksgImage from "../../../assets/images/mengeneler/ksg.webp";
import ksm2Image from "../../../assets/images/mengeneler/ksm2.webp";
import ksxImage from "../../../assets/images/mengeneler/ksx.webp";
import ksxC2Image from "../../../assets/images/mengeneler/ksx-c2.webp";
import kscDImage from "../../../assets/images/mengeneler/ksc-d.webp";
import kscFImage from "../../../assets/images/mengeneler/ksc-f.webp";
import kscMiniImage from "../../../assets/images/mengeneler/ksc-mini.webp";
import ksc3KImage from "../../../assets/images/mengeneler/ksc3-k.webp";

const products = [
  {
    title: "KSC3",
    image: ksc3Image,
    productDetailLink: "/ksc-3",
    youtubeLink: "https://www.youtube.com/embed/wRl8u3tCNjY",
  },
  {
    title: "KSG Mengene",
    image: ksgImage,
    productDetailLink: "/ksg",
    youtubeLink: "https://www.youtube.com/embed/epFOkNqfVQE",
  },
  {
    title: "KSM2 Mengene",
    image: ksm2Image,
    productDetailLink: "/ksm-2",
    youtubeLink: "https://www.youtube.com/embed/q_Qd9eHinNM",
  },
  {
    title: "KSX Mengene",
    image: ksxImage,
    productDetailLink: "/ksx",
    youtubeLink: "https://www.youtube.com/embed/ONmy6L60_hc",
  },
  {
    title: "KSX-C2 Mengene",
    image: ksxC2Image,
    productDetailLink: "/ksx-c2",
    youtubeLink: "https://www.youtube.com/embed/zdbYdEh2YFc",
  },
  {
    title: "KSC-D Mengene",
    image: kscDImage,
    productDetailLink: "/ksc-d",
    youtubeLink: undefined,
    keyFeatures: [
      "Üçüncü el işlevi ile güvenilir ön yüklenme",
      "Kir direnci ve düşük bakım maliyeti",
      "Yüksek sıkma kuvvetleri ile güvenilirlik",
    ],
  },
  {
    title: "KSC-F Mengene",
    image: kscFImage,
    productDetailLink: "/ksc-f",
    youtubeLink: "https://www.youtube.com/embed/9brDr0VKldw",
  },
  {
    title: "KSC Mini Mengene",
    image: kscMiniImage,
    productDetailLink: "/ksc-mini",
    youtubeLink: "https://www.youtube.com/embed/qg1q1lTKOU4",
  },
  {
    title: "KSC3-K Mengene",
    image: ksc3KImage,
    productDetailLink: "/ksc-3-k",
    youtubeLink: undefined,
    keyFeatures: [
      "Nikel kaplamalı taban gövdesi ile korozyon koruması",
      "Yüksek sıkma kuvvetleri ile işlem güvenilirliği",
      "Geniş çene programı ile yeni sıkma görevlerine uyum",
    ],
  },
];

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
            (window.location.href = `/mengeneler${productDetailLink}`)
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

const Mengeneler = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Mengeneler
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          SCHUNK mengenelerin detaylarını ve ürün videolarını keşfedin.
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

export default Mengeneler;
