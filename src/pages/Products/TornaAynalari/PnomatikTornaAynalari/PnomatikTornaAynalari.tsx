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
import rotaTPImage from "../../../../assets/images/torna-aynalari/pnomatik-torna-aynalari/rota-tp.webp";
import theme from "../../../../theme";
import { useNavigate } from "react-router-dom";

const productData = [
  {
    title: "ROTA TP",
    image: rotaTPImage,
    productDetailLink: "/rota-tp",
    youtubeLink: "https://www.youtube.com/embed/Cl5XYM2xK1E",
  },
];

const PnomatikTornaAynalari = () => {
  const navigate = useNavigate();

  const openProductDetail = (productDetailLink: string) => {
    navigate(`/torna-aynalari/pnomatik-torna-ayarlari${productDetailLink}`);
  };

  const [open, setOpen] = useState(false);
  const [currentYouTubeLink, setCurrentYouTubeLink] = useState<string | null>(
    null
  );

  const handleOpen = (youtubeLink: string) => {
    setCurrentYouTubeLink(youtubeLink);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentYouTubeLink(null);
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Pnömatik Torna Aynaları
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Yüksek kaliteli işleme için tasarlanmış pnömatik torna aynalarını
          keşfedin.
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
            handleOpen={handleOpen}
            openProductDetail={openProductDetail}
          />
        ))}
      </Box>

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
        <Box
          sx={{
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
          }}
        >
          {currentYouTubeLink && (
            <iframe
              src={currentYouTubeLink}
              title="YouTube Video"
              style={{ width: "100%", height: "100%", border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default PnomatikTornaAynalari;

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
  handleOpen,
  openProductDetail,
}: {
  title: string;
  image: string;
  productDetailLink: string;
  youtubeLink?: string;
  handleOpen: (youtubeLink: string) => void;
  openProductDetail: (productDetailLink: string) => void;
}) => {
  return (
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
        <Box
          sx={{
            position: "relative",
            cursor: "pointer",
            overflow: "hidden",
            zIndex: 10,
            height: 150,
          }}
          onClick={() => handleOpen(youtubeLink)}
        >
          <iframe
            src={youtubeLink}
            title={title}
            style={{ width: "100%", height: "100%", border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      )}
    </ProductCardContainer>
  );
};
