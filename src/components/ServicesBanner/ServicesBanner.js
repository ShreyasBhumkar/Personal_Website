import React from "react";
import "../../App.css";
import {
  Typography,
  Grid,
  Paper,
  Container,
} from "@mui/material";
import ServicesBannerCard from "./Services.card.component";
import service_1 from "../../assets/Vecor Images/Vector_7.jpg";
import service_2 from "../../assets/Vecor Images/Vector_8.jpg";
import service_3 from "../../assets/Vecor Images/Vector_9.jpg"
const ServicesBanner = () => {
  const servicesCardDataObj = [
    {
      image: service_1,
      title: "Web Developement",
      description:
        "A proven track record of architecting, developing, and implementing interactive websites. Adept at leveraging SEO strategies",
    },
    {
      image: service_2,
      title: "Ecommerce Development",
      description:
        "With eCommerce solutions, businesses can operate 24 hours a day, 7 days a week, and reach customers in any time zone and increase flexibility",
    },
    {
      image: service_3,
      title: "UI/UX Design",
      description:
        "Expertise in Web Design UI/UX Design and Front End - Development. Extensive experience in rapid to high fidelity prototypes",
    },
  ];

  return (
    <section
      className="text-gray-600 body-font"
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <Container maxWidth="xl" className="mx-auto my-2">
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Paper
              elevation={0}
              className="p-4"
              sx={{
                backgroundColor: "#EEEEEE",
              }}
            >
              <Typography variant="h4" className="fw-bold" align="center">
                My Services
              </Typography>
              <Typography variant="body1" className="my-3 text-muted fw-bold">
                As front end developer I am responsible to build Web
                Applications, responsive web design, UI using HTML5 & grid,
                browser compatible pages using HTML5, CSS3, Bootstrap, and
                Javascript. I also have an experience of Redux framework to
                manage the application state and applying middleware such as
                redux-saga.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Services Card */}
        <Grid container spacing={3}>
          {servicesCardDataObj.map((card, id) => (
            <Grid item lg={4} md={4} sm={12} xs={12} key={id}>
              <Paper
                elevation={0}
                className="p-4"
                sx={{
                  backgroundColor: "#EEEEEE",
                }}
              >
                <ServicesBannerCard
                  CardImage={card.image}
                  CardTitle={card.title}
                  Description={card.description}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ServicesBanner;
