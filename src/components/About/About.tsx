import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const About = () => {
  const cards = [
    {
      id: 1,
      title: "Yenilikçi Teknoloji",
      image:
        "https://www.foley.com/wp-content/uploads/2023/09/tech-1371766825-1680x945.jpg",
      description:
        "Metal işleme süreçlerinde hassasiyet ve verimlilik için en yüksek kalite standartlarına sahip iş bağlama sistemleri ve talaşlı imalat ekipmanları sunuyoruz.",
    },
    {
      id: 2,
      title: "Ürün Çeşitliliği ve Özel Çözümler",
      image:
        "https://www.foley.com/wp-content/uploads/2023/09/tech-1371766825-1680x945.jpg",
      description:
        "Takım tutuculardan robotlu besleme ünitelerine kadar geniş ürün yelpazemiz, CNC işleme alanındaki çeşitli ihtiyaçlara yönelik çözümler sunmak için tasarlandı",
    },
    {
      id: 3,
      title: "Müşteri Odaklı Yaklaşım",
      image:
        "https://www.foley.com/wp-content/uploads/2023/09/tech-1371766825-1680x945.jpg",
      description:
        "Satış öncesi ve sonrası teknik destek hizmetlerimizle müşterilerimizin yanında yer alarak, rekabet gücünüzü artırmayı hedefliyoruz.",
    },
    {
      id: 4,
      title: "Güvenilirlik ve Hassasiyet",
      image:
        "https://www.foley.com/wp-content/uploads/2023/09/tech-1371766825-1680x945.jpg",
      description:
        "Gelişmiş sistemlerimiz, maksimum verimlilik, doğruluk ve güvenilirlik sağlayarak üretim süreçlerinizi optimize etmenize yardımcı olur.",
    },
  ];
  return (
    <Box
      id="Hakkımızda"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" my={4} fontWeight="bold">
        Hakkimizda
      </Typography>
      <Typography textAlign="center">
        <b>ARMATECH MAKİNA SAN. TİC. LTD. ŞTİ.</b> metal işleme ve CNC
        makineleri sektöründe, yüksek kaliteli iş bağlama sistemleri ve talaşlı
        imalat ekipmanları ile müşterilerine en yenilikçi çözümleri sunmayı
        hedefleyen lider bir firmadır.
      </Typography>
      <Typography textAlign="center">
        Misyonumuz, müşterilerimizin üretim süreçlerini optimize ederek
        verimliliği artırmalarına destek olmaktır. Ürün portföyümüzdeki takım
        tutucular, manyetik tablalar, hızlı palet değiştirme sistemleri, hassas
        mengeneler ve daha fazlası, en yüksek kalite standartlarını
        karşılamaktadır. ARMATECH olarak, müşteri memnuniyetine verdiğimiz
        önemle, satış öncesi ve sonrası sunduğumuz teknik destekle iş
        ortaklarımızın her zaman yanındayız.
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns={"repeat(auto-fill, minmax(250px, 1fr))"}
        mt={4}
        gap={4}
      >
        {cards.map((card) => (
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              component="img"
              image={card.image}
              alt={card.title}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" color="primary">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default About;
