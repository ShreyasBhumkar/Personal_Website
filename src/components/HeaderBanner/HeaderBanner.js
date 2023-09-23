import React from "react";
import { Row, Col } from "reactstrap";
import {
  Typography,
  Box,
  Grid,
  Paper,
  Container,
  Button,
  // Card,
} from "@mui/material";
import { Card } from "react-bootstrap"
import Vector_4 from "../../assets/Vecor Images/Vector_1.jpg";

const HeaderBanner = () => {
  return (
    <Card elevation={1}>
      <section className="text-gray-600 body-font mt-5">
        <Container maxWidth="lg" className="mx-auto">
          <Grid container spacing={0} alignItems="center">
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Paper elevation={0} className="p-4">
                <Typography
                  variant="h5"
                  className="font-medium text-gray-900"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  I am
                  <span
                    style={{
                      color: "#5963a2",
                    }}
                  >
                    {" "}
                    Shreyas Bhumkar
                  </span>
                </Typography>
                <Typography
                  variant="h5"
                  className="font-medium text-gray-900 fw-bold"
                >
                  Front End Developer
                </Typography>
                <Typography variant="body2" className="my-3 text-muted fw-bold">
                  Experience in Creating/Integrating new features,
                  functionality, and capabilities on the website. Produced
                  stunning visual elements of web applications by translating
                  UI/UX design wireframes into code.
                </Typography>
                <div className="flex justify-center mt-3 fw-bold">
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      background: "#5963a2",
                    }}
                    className="py-1 px-5 text-lg"
                  >
                    Contact Me
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <img
                className="object-cover object-center"
                alt="hero"
                src={Vector_4}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </section>
    </Card>
  );
};

export default HeaderBanner;
