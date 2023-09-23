import React from "react";
import {
  Typography,
  Box,
  Grid,
  Paper,
} from "@mui/material/";
import { Row, Col } from "reactstrap";
import { styled } from "@mui/material/styles";
import skill_8 from "../../assets/Vecor Images/vs-code.jpg";
const SkillCard = ({
    Image,
    Title
}) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid item lg={3} md={3} sm={6} xs={12}>
      <Item className="rounded rounded-3">
        <Row>
          <Col
            md="3"
            sm="3"
            lg="3"
            xs="3"
            className="d-flex justify-content-start align-items-center"
          >
            <div
              className="rounded rounded-5"
              style={{
                height: "50px",
                width: "50px",
              }}
            >
              <img
                className="rounded rounded-5"
                style={{
                  height: "50px",
                  width: "50px",
                }}
                src={Image}
                alt={Title}
              />
            </div>
          </Col>
          {/* <div className="col col-sm-6 py-2"></div> */}
          <Col
            md="7"
            sm="7"
            lg="7"
            xs="7"
            className="d-flex justify-content-center fw-bold align-items-center"
          >
            <Typography variant="h6" className="text-dark">
              {Title}
            </Typography>
          </Col>
        </Row>
      </Item>
    </Grid>
  );
};

export default SkillCard;
