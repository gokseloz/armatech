/** @jsxImportSource @emotion/react */
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../../theme";
import tendoTakimTutucular from "../../../assets/images/takim-tutucular/tendo-takim-tutucular.webp";
import tribosImage from "../../../assets/images/takim-tutucular/tribos.png";
import sinoRImage from "../../../assets/images/takim-tutucular/sino-r.webp";
import mekanikTakimTutucularImage from "../../../assets/images/takim-tutucular/mekanik-takim-tutucular.webp";
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

const Heading = styled(Typography)({
  marginBottom: theme.spacing(3),
});

const CardsContainer = styled(Box)({
  display: "flex",
  gap: theme.spacing(4),
  flexWrap: "wrap",
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

const TakimTutucular = () => {
  const navigate = useNavigate();

  const tendoHidrolikClick = () => {
    navigate("/takim-tutucular/tendo-hidrolik-takim-tutucular");
  };

  const tribosClick = () => {
    navigate("/takim-tutucular/tribos");
  };

  const sinorTutucularClick = () => {
    navigate("/takim-tutucular/SINO-R");
  };

  const mekanikTutucularClick = () => {
    navigate("/takim-tutucular/mekanik-takim-tutucular");
  };

  return (
    <Container>
      <Section>
        <Heading variant="h4">Takım Tutucular</Heading>
        <CardsContainer>
          <StyledCard onClick={tendoHidrolikClick}>
            <StyledCardMediaWrapper>
              <CardMedia
                component="img"
                image={tendoTakimTutucular}
                alt="Takım Tutucular"
                sx={{ height: 150, width: "auto" }}
              />
            </StyledCardMediaWrapper>
            <StyledCardContent>
              <StyledTitle>TENDO HİDROLİK TAKIM TUTUCULAR</StyledTitle>
            </StyledCardContent>
          </StyledCard>

          <StyledCard onClick={tribosClick}>
            <StyledCardMediaWrapper>
              <CardMedia
                component="img"
                image={tribosImage}
                alt="Tribos Takım Tutucular"
                sx={{ height: 150, width: "auto" }}
              />
            </StyledCardMediaWrapper>
            <StyledCardContent>
              <StyledTitle>TRIBOS TAKIM TUTUCULAR</StyledTitle>
            </StyledCardContent>
          </StyledCard>

          <StyledCard onClick={sinorTutucularClick}>
            <StyledCardMediaWrapper>
              <CardMedia
                component="img"
                image={sinoRImage}
                alt="SINO-R Takım Tutucular"
                sx={{ height: 150, width: "auto" }}
              />
            </StyledCardMediaWrapper>
            <StyledCardContent>
              <StyledTitle>SINO-R TAKIM TUTUCULAR</StyledTitle>
            </StyledCardContent>
          </StyledCard>

          <StyledCard onClick={mekanikTutucularClick}>
            <StyledCardMediaWrapper>
              <CardMedia
                component="img"
                image={mekanikTakimTutucularImage}
                alt="Mekanik Takım Tutucular"
                sx={{ height: 150, width: "auto" }}
              />
            </StyledCardMediaWrapper>
            <StyledCardContent>
              <StyledTitle>MEKANİK TAKIM TUTUCULAR</StyledTitle>
            </StyledCardContent>
          </StyledCard>
        </CardsContainer>
      </Section>
    </Container>
  );
};

export default TakimTutucular;
