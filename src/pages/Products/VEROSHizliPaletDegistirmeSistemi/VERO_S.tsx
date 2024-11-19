/** @jsxImportSource @emotion/react */
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../../theme";
import veroSNse3Image from "../../../assets/images/vero-s-hizli-palet-degistirme-sistemi/genel-frezeleme/vero-s-nse3-nse-plus.png";
import nsl3150200400 from "../../../assets/images/vero-s-hizli-palet-degistirme-sistemi/otomatik-yukleme-bosaltma/vero-s-nsl3-150-200-400/nsl3150200400.webp";
import wdm5xImage from "../../../assets/images/vero-s-hizli-palet-degistirme-sistemi/wdm5x/wdm5x_1.jpg";
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

const VeroSHizliPaletDegistirmeSistemi = () => {
  const navigate = useNavigate();

  const handleNavigateToNSE3 = () => {
    navigate("/vero-s-hizli-palet-degistirme-sistemleri/nse3-nseplus/");
  };

  const handleNavigateToOtomatikYuklemeBosaltma = () => {
    navigate(
      "/vero-s-hizli-palet-degistirme-sistemleri/otomatik-yukleme-bosaltma"
    );
  };

  const handleNavigateToWDM5X = () => {
    navigate("/vero-s-hizli-palet-degistirme-sistemleri/WDM-5X");
  };

  return (
    <Container>
      <Section>
        <Typography variant="h4">
          VERO-S HIZLI PALET DEĞİŞTİRME SİSTEMİ
        </Typography>
        <CardsContainer>
          <StyledCard onClick={handleNavigateToNSE3}>
            <StyledCardMediaWrapper>
              <CardMedia
                component="img"
                image={veroSNse3Image}
                alt="VERO-S NSE3 VE NSE PLUS"
                sx={{ height: 150, width: "auto" }}
              />
            </StyledCardMediaWrapper>
            <StyledCardContent>
              <StyledTitle>
                GENEL FREZELEME VE AĞIR KESME: VERO-S NSE3 VE NSE PLUS
              </StyledTitle>
            </StyledCardContent>
          </StyledCard>

          <StyledCard onClick={handleNavigateToOtomatikYuklemeBosaltma}>
            <StyledCardMediaWrapper>
              <CardMedia
                component="img"
                image={nsl3150200400}
                alt="Otomatik Yükleme ve Boşaltma"
                sx={{ height: 150, width: "auto" }}
              />
            </StyledCardMediaWrapper>
            <StyledCardContent>
              <StyledTitle>
                OTOMATİK YÜKLEME VE BOŞALTMA İÇİN HIZLI DEĞİŞİM PALET SİSTEMLERİ
              </StyledTitle>
            </StyledCardContent>
          </StyledCard>

          <StyledCard onClick={handleNavigateToWDM5X}>
            <StyledCardMediaWrapper>
              <CardMedia
                component="img"
                image={wdm5xImage}
                alt="WDM 5X - Zero Point Modüler Sistem"
                sx={{ height: 150, width: "auto" }}
              />
            </StyledCardMediaWrapper>
            <StyledCardContent>
              <StyledTitle>WDM 5X - ZERO POINT MODÜLER SİSTEM</StyledTitle>
            </StyledCardContent>
          </StyledCard>
        </CardsContainer>
      </Section>
    </Container>
  );
};

export default VeroSHizliPaletDegistirmeSistemi;
