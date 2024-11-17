import {
  Typography,
  Box,
  styled,
  Card,
  CardMedia,
  CardContent,
  Modal,
  Backdrop,
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

const productData = [
  {
    title: "TENDO E Compact",
    image: tendoECompact,
    youtubeLink: "https://www.youtube.com/embed/k1q1_cbXc1s",
  },
  {
    title: "TENDO Silver",
    image: tendoSilver,
    youtubeLink: "https://www.youtube.com/embed/example2",
  },
  {
    title: "Tendo Slim 4ax",
    image: tendoSlim4ax,
    youtubeLink: "https://www.youtube.com/embed/example3",
  },
  {
    title: "Tendo Platinum",
    image: tendoPlatinum,
    youtubeLink: "https://www.youtube.com/embed/example4",
  },
  {
    title: "Tendo Zero",
    image: tendoZero,
    youtubeLink: "https://www.youtube.com/embed/example5",
  },
  {
    title: "Tendo LSS",
    image: tendoLSS,
    youtubeLink: "https://www.youtube.com/embed/example6",
  },
  {
    title: "Tendo RLA",
    image: tendoRLA,
    youtubeLink: "https://www.youtube.com/embed/example7",
  },
  {
    title: "TENDO Turn",
    image: tendoTurn,
    youtubeLink: "https://www.youtube.com/embed/example8",
  },
  {
    title: "TENDO WZS",
    image: tendoWZS,
    youtubeLink: "https://www.youtube.com/embed/example9",
  },
  {
    title: "iTendo²",
    image: iTendo2,
    youtubeLink: "https://www.youtube.com/embed/example10",
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
        }}
      >
        {productData.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            image={product.image}
            youtubeLink={product.youtubeLink}
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
  youtubeLink,
}: {
  title: string;
  image: string;
  youtubeLink: string;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log("hahah");
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Product Card */}
      <ProductCardContainer>
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
        <VideoContainer id="haha" onClick={handleOpen}>
          <YouTubeIframe
            src={youtubeLink}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
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
