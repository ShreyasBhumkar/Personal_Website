import React from "react";
import { Typography, Grid, Container, Paper } from "@mui/material";

const FooterBanner = () => {
  return (
    <section style={{ backgroundColor: "#EEEEEE" }}>
      <Container maxWidth="xl">
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
          <Paper
              elevation={0}
              className="mt-4 py-2"
              style={{ backgroundColor: "#EEEEEE" }}
            >
            <Typography variant="body2" className="text-muted fw-bold">
              {new Date().getFullYear()} All Rights Reserved. @shreyas_bhumkar
            </Typography>
          </Paper>  
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FooterBanner;
