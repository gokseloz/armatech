import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Container from "../../components/Container";

// Styled components
const PageContainer = styled(Box)({
  padding: "40px 20px",
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
});

const ManyetikTablaKontrolUnitesi = () => {
  return (
    <Container>
      <PageContainer>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Manyetik Tabla ve Kontrol Ünitesi Servis Hizmetleri
        </Typography>
        <Typography variant="body1" mb={2}>
          ARMATECH olarak, CNC tezgahlarında kullanılan manyetik tabla ve
          kontrol ünitelerinin bakım, onarım ve parça değişim hizmetlerini
          profesyonel bir şekilde sunuyoruz. Ürünlerinizin uzun ömürlü ve
          verimli çalışabilmesi için teknik destek ekibimizle her zaman
          yanınızdayız.
        </Typography>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Manyetik tabla ve kontrol ünitelerinde sunduğumuz başlıca servis
          işlemleri:
        </Typography>
        <ul style={{ textAlign: "left" }}>
          <li>
            <Typography variant="body1">
              <strong>Konnektör Onarımı ve Değişimi:</strong> Manyetik tablanın
              kontrol ünitesi ile bağlantısında oluşabilecek arızaları
              gideriyoruz.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Kontrol Ünitesi Plastik ve Hasır Kablo Değişimi:</strong>{" "}
              Zamanla yıpranabilen kontrol ünitesi plastik ve hasır kablolarının
              değişim işlemleri yapılır.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Kumanda Değişimi ve Onarımı:</strong> Kontrol ünitesi
              kumandasında meydana gelen sorunlarda onarım veya değişim hizmeti
              sunuyoruz.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" mt={2}>
          Bizimle iletişime geçerek detaylı bilgi alabilir, servis taleplerinizi
          iletebilirsiniz.
        </Typography>
      </PageContainer>
    </Container>
  );
};

export default ManyetikTablaKontrolUnitesi;
