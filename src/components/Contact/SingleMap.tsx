import { Box, Button } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SimpleMap = () => {
  const latitude = 38.454341531285515;
  const longitude = 27.1774001350926;

  const companyAddress =
    "Adalet Mah. Manas Bulvarı No:47/B Folkart Towers A Kule, Kat:35 Daire:3509 Bayraklı / İzmir 35530";

  const handleGetDirections = () => {
    const destination = `${latitude},${longitude}`;
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${destination}`,
      "_blank"
    );
  };

  return (
    <Box data-testid="haha">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            <div>
              <h3>ARMATECH MAKİNA SAN. TİC. LTD. ŞTİ.</h3>
              <p>{companyAddress}</p>
              <Button variant="contained" onClick={handleGetDirections}>
                Yol Tarifi Al
              </Button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default SimpleMap;
