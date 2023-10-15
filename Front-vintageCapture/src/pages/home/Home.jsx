import UserContext from "../../context/UserContext";
import { useContext } from "react";

const Home = () => {
  const { verifyToken, userState } = useContext(UserContext);
  const user = userState.info2;

  const bannerStyle = {
    backgroundImage: `url("https://res.cloudinary.com/dgvipi8hx/image/upload/v1696974441/logoVintageCapture/Baner1_vu9kax.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "40px",
    textAlign: "left",
    marginTop: "80px", // Agregamos margen superior para evitar que se corte
  };

  return (
    <div style={{ padding: "20px", textAlign: "left", fontFamily: "Arial, sans-serif" }}>
      <div style={bannerStyle}>
        <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>Cámaras para toda la vida</h1>
        <p style={{ fontSize: "18px" }}>Sumérgete en la esencia auténtica de las cámaras analógicas.</p>
      </div>
      <div style={{ height: "20px" }}></div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ maxWidth: "50%", padding: "20px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>Bienvenido, {user.email}</h3>
          <hr style={{ border: "1px solid #333", marginBottom: "20px" }} />
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            Descubre la magia de la fotografía analógica en la era digital. Explora la autenticidad de las cámaras analógicas y los formatos de película.
          </p>
          <hr style={{ border: "1px solid #333", marginBottom: "20px" }} />
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            ¿Tienes alguna pregunta o necesitas asesoramiento? Estamos aquí para ayudarte. Contáctanos por WhatsApp y comencemos a capturar momentos inolvidables juntos.
          </p>
          <a
            href="https://wa.me/your-phonenumber"
            target="_blank" // Abre el enlace en una nueva ventana o pestaña
            style={{ padding: "10px 20px", backgroundColor: "#25d366", color: "white", textDecoration: "none", borderRadius: "5px", fontSize: "16px" }}
          >
            Contactar por WhatsApp
          </a>
        </div>
        <div style={{ maxWidth: "50%" }}>
          <img
            src="https://res.cloudinary.com/dgvipi8hx/image/upload/v1697223413/logoVintageCapture/foto_cuadrada_fsuhra.jpg"
            alt="Imagen"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
      </div>
      {/* Banner de abajo (deja este tal cual) */}
      <div style={{ margin: "20px 0" }}>
        <img src="https://res.cloudinary.com/dgvipi8hx/image/upload/v1696974441/logoVintageCapture/baner2_edc7sb.jpg" alt="Banner" style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
};

export default Home;
