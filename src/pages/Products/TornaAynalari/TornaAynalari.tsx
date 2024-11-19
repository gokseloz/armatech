/** @jsxImportSource @emotion/react */
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../../theme";
import hidrolikTornaImage from "../../../assets/images/torna-aynalari/hidrolik-torna-aynalari/rota-2b.webp";
import mekanikTornaImage from "../../../assets/images/torna-aynalari/mekanik-torna-aynalari/rota-ml-flex-2-2.webp";
import pnomatikTornaImage from "../../../assets/images/torna-aynalari/pnomatik-torna-aynalari/rota-tp.webp";
import thlPlusImage from "../../../assets/images/torna-aynalari/thl-plus-ara-yatak-lunetler/thl-plus.webp";
import Container from "../../../components/Container";
import { useNavigate } from "react-router-dom";

// Styled Components
const Section = styled(Box)({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const CardsContainer = styled(Box)({
  display: "flex",
  gap: theme.spacing(4),
  flexWrap: "wrap",
  paddingBlock: theme.spacing(3),
});

const StyledCard = styled(Card)({
  cursor: "pointer",
  maxWidth: 300,
  width: 320,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[10],
  },
});

const StyledCardMediaWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2),
  backgroundColor: "#f5f5f5",
  borderBottom: `1px solid ${theme.palette.divider}`,
});

const StyledCardContent = styled(CardContent)({
  padding: theme.spacing(2),
});

const StyledTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: "1rem",
  color: theme.palette.text.primary,
  textAlign: "center",
});

const TornaAynalari = () => {
  const navigate = useNavigate();

  const navigateToHidrolik = () => {
    navigate("/torna-aynalari/hidrolik-torna-ayarlari/");
  };

  const navigateToMekanik = () => {
    navigate("/torna-aynalari/mekanik-torna-ayarlari/");
  };

  const navigateToPnomatik = () => {
    navigate("/torna-aynalari/pnomatik-torna-ayarlari/");
  };

  const navigateToTHLPlus = () => {
    navigate("/torna-aynalari/thl-plus-ara-yatak-lunetler/");
  };

  return (
    <Container>
      <Section>
        <Typography variant="h4">Torna Aynaları</Typography>
        <CardsContainer flexDirection={{ xs: "column", sm: "row" }}>
          <StyledCard onClick={navigateToHidrolik}>
            <StyledCardMediaWrapper>
              <CardMedia
                component="img"
                image={hidrolikTornaImage}
                alt="Hidrolik Torna Aynaları"
                sx={{ height: 150, width: "auto" }}
              />
            </StyledCardMediaWrapper>
            <StyledCardContent>
              <StyledTitle>HİDROLİK TORNA AYNALARI</StyledTitle>
            </StyledCardContent>
          </StyledCard>

          <StyledCard onClick={navigateToMekanik}>
            <StyledCardMediaWrapper>
              <CardMedia
                component="img"
                image={mekanikTornaImage}
                alt="Mekanik Torna Aynaları"
                sx={{ height: 150, width: "auto" }}
              />
            </StyledCardMediaWrapper>
            <StyledCardContent>
              <StyledTitle>MEKANİK TORNA AYNALARI</StyledTitle>
            </StyledCardContent>
          </StyledCard>

          <StyledCard onClick={navigateToPnomatik}>
            <StyledCardMediaWrapper>
              <CardMedia
                component="img"
                image={pnomatikTornaImage}
                alt="Pnomatik Torna Aynaları"
                sx={{ height: 150, width: "auto" }}
              />
            </StyledCardMediaWrapper>
            <StyledCardContent>
              <StyledTitle>PNOMATİK TORNA AYNALARI</StyledTitle>
            </StyledCardContent>
          </StyledCard>

          <StyledCard onClick={navigateToTHLPlus}>
            <StyledCardMediaWrapper>
              <CardMedia
                component="img"
                image={thlPlusImage}
                alt="THL Plus Ara Yatak Lünetler"
                sx={{ height: 150, width: "auto" }}
              />
            </StyledCardMediaWrapper>
            <StyledCardContent>
              <StyledTitle>THL PLUS ARA YATAK LÜNETLER</StyledTitle>
            </StyledCardContent>
          </StyledCard>
        </CardsContainer>
      </Section>
    </Container>
  );
};

export default TornaAynalari;
