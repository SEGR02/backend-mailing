import express, { Application, json } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

export const app: Application = express();

app.use(json());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json({ limit: "10mb" }));

app.get("/", (req: any, res: any) => {
  try {
    const { email } = req.body;
    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "segr30398481@gmail.com",
        pass: process.env.GPASSWORD,
      },
    });

    let mailOptions = {
      from: "segr30398481@gmail.com",
      to: email,
      subject: "Prototipo mailing",
      html: `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>agriNews Campus</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
      }

      .main-table {
        background-image: url("https://res.cloudinary.com/doxahduh8/image/upload/v1732408567/fondo-mas_xohfah.jpg");
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: 120%;
      }

      .card-container {
        width: 100%;
      }

      .card-row {
        display: flex;
        justify-content: space-between;
        gap: 20px;
      }

      .card-item {
        width: 48%;
        padding: 10px;
        border-radius: 10px;
        text-align: center;
      }

      .card-item img {
        max-width: 100%;
        border-radius: 1.5rem;
        object-fit: cover;
        aspect-ratio: 1/1;
        height: auto;
      }

      .card-item p {
        font-size: 14px;
        color: #000;
      }

      .card-item a {
        color: #000;
        font-size: 15px;
        font-weight: bolder;
        text-decoration: none;
      }

      @media (max-width: 600px) {
        .card-row {
          display: block;
        }
        .card-item {
          width: 100%;
          margin-bottom: 20px;
        }
        .my-profile, .start-now{
          color: #000 !important;
        }
      }
    </style>
  </head>
  <body>
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="background-color: #000"
    >
      <tr>
        <td align="center" style="padding: 20px">
          <a
            href="https://demo-mailing.netlify.app"
            target="_blank"
            style="
              font-size: 14px;
              color: #e4e4e4;
              cursor: pointer;
              font-family: 'Helvetica', 'Roboto', sans-serif;
              text-decoration: none;
            "
          >
            Ver online
          </a>
          <table
            width="600"
            cellpadding="0"
            cellspacing="0"
            style="background-color: #ffffff; margin-top: 1rem"
            class="main-table"
          >
            <tr>
              <td style="text-align: start; padding: 20px">
                <img
                  src="https://res.cloudinary.com/doxahduh8/image/upload/v1732408222/logo_kjnuzr.jpg"
                  alt="Logo"
                  width="100"
                  style="max-width: 100%; border-radius: 1.5rem"
                />
                <p
                  style="
                    font-size: 16px;
                    color: #000;
                    margin: 1.5rem 0 0.3rem 0;
                  "
                >
                  Bienvenidos a <strong>agriNews Campus</strong>
                </p>
                <p
                  style="
                    font-size: 16px;
                    color: #000;
                    margin: 0;
                    margin-bottom: 2rem;
                  "
                >
                  Desde hoy puede consultar su perfil al link siguiente
                </p>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  style="margin: 0 auto; text-align: center"
                >
                  <tr>
                    <td align="center">
                      <a
                        style="
                          background-color: #41c6ce;
                          font-size: 16px;
                          color: #fff;
                          text-decoration: none;
                          padding: 10px 20px;
                          border-radius: 5px;
                          display: inline-block;
                          border-radius: 1.5rem;
                          width: 146px;
                        "
                        class="my-profile"
                        >Mi perfil</a
                      >
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <table
              cellpadding="0"
              cellspacing="0"
              style="width: 100%; table-layout: fixed"
              class="card"
            >
              <tr>
                <td style="padding: 20px">
                  <div class="card-row">
                    <div class="card-item">
                      <img
                        src="https://res.cloudinary.com/doxahduh8/image/upload/v1732407233/DALL_E_2024-11-23_19.13.20_-_Create_a_high-quality_visually_appealing_image_suitable_for_a_mailing_campaign._The_image_should_feature_a_vibrant_and_colorful_arrangement_of_fresh_mufrkx.webp"
                        alt="Logo de agriNews Campus"
                        width="220"
                        height="220"
                        style="
                          border-radius: 1.5rem;
                          display: block;
                          margin: 0 auto;
                        "
                      />
                      <p
                        style="font-size: 14px; margin: 10px auto; color: #000"
                      >
                        Apúntese al 3er curso de incubación desde hoy
                      </p>
                      <a
                        href="#"
                        style="
                          color: #000;
                          font-size: 15px;
                          font-weight: bold;
                          text-decoration: none;
                        "
                        >VER MÁS →</a
                      >
                    </div>
                    <div class="card-item">
                      <img
                        src="https://res.cloudinary.com/doxahduh8/image/upload/v1732407456/copy_qrtvi0.png"
                        alt="Logo de agriNews Campus"
                        width="220"
                        height="220"
                        style="
                          border-radius: 1.5rem;
                          display: block;
                          margin: 0 auto;
                        "
                      />
                      <p
                        style="font-size: 14px; margin: 10px auto; color: #000"
                      >
                        50 aniversario del cerdo ibérico
                      </p>
                      <a
                        href="#"
                        style="
                          color: #000;
                          font-size: 15px;
                          font-weight: bold;
                          text-decoration: none;
                        "
                        >VER MÁS →</a
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <tr>
              <td style="padding: 20px; text-align: center">
                <p class="start-now" style="font-size: 25px; color: #fff; font-weight: bold">
                  ¿Empecemos ahora?
                </p>
              </td>
            </tr>
          </table>
          <p
            style="
              font-size: 13px;
              color: #bababa;
              padding-top: 20px;
              cursor: pointer;
              font-family: 'Helvetica', 'Roboto', sans-serif;
            "
          >
            Cancelar suscripción
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
    };

    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send("Correo enviado: " + info.response);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
