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
import rotaSPlusImage from "../../../../assets/images/torna-aynalari/mekanik-torna-aynalari/rota-s-plus-2-0.webp";
import rotaMFlexImage from "../../../../assets/images/torna-aynalari/mekanik-torna-aynalari/rota-ml-flex-2-2.webp";
import rotaSFlexImage from "../../../../assets/images/torna-aynalari/mekanik-torna-aynalari/rota-s-flex.webp";
import { useNavigate } from "react-router-dom";
import Container from "../../../../components/Container";
import theme from "../../../../theme";

const productData = [
  {
    title: "ROTA-S Plus 2.0",
    image: rotaSPlusImage,
    productDetailLink: "/rota-s-plus-2-0",
    youtubeLink: "https://www.youtube.com/embed/a5sjP6Het6U",
  },
  {
    title: "ROTA-M Flex 2+2",
    image: rotaMFlexImage,
    productDetailLink: "/rota-m-flex-2-2",
    youtubeLink: "https://www.youtube.com/embed/Xf9fcp8F7so",
  },
  {
    title: "ROTA-S Flex",
    image: rotaSFlexImage,
    productDetailLink: "/rota-s-flex",
    youtubeLink: "https://www.youtube.com/embed/fS43AbL0lrs",
  },
];

const MekanikTornaAynalari = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Mekanik Torna Aynaları
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Mekanik torna aynalarının detaylarını ve ürün videolarını keşfedin.
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
          />
        ))}
      </Box>
    </Container>
  );
};

export default MekanikTornaAynalari;

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
}: {
  title: string;
  image: string;
  productDetailLink: string;
  youtubeLink?: string;
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const openProductDetail = (productDetailLink: string) => {
    navigate(`/torna-aynalari/mekanik-torna-ayarlari${productDetailLink}`);
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
