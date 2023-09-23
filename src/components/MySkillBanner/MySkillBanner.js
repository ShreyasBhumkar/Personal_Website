import React, { useState } from "react";
// import { Row, Col } from "reactstrap";
import "../../App.css";
import { Typography, Grid, Paper, Container, Button } from "@mui/material/";

import SkillCard from "./SkillCard.component";

import skill_1 from "../../assets/Vecor Images/Html.jpg";
import skill_2 from "../../assets/Vecor Images/css.jpg";
import skill_3 from "../../assets/Vecor Images/JavaScript.jpg";
import skill_4 from "../../assets/Vecor Images/Bootstrap.jpg";
import skill_5 from "../../assets/Vecor Images/React.jpg";
import skill_6 from "../../assets/Vecor Images/GoogleCloud.jpg";
import skill_7 from "../../assets/Vecor Images/GitHub.jpg";
import skill_8 from "../../assets/Vecor Images/vs-code.jpg";

const MySkillBanner = () => {
  
  const [view, setView] = useState("View More")
  const skillCardDataObj = [ 
    {
      image: skill_1,
      title: "HTML 5",
    },
    {
      image: skill_2,
      title: "CSS 3",
    },
    {
      image: skill_3,
      title: "JavaScript",
    },
    {
      image: skill_4,
      title: "Bootstrap",
    },
    {
      image: skill_5,
      title: "React JS",
    },
    {
      image: skill_6,
      title: "Google Cloud",
    },
    {
      image: skill_7,
      title: "GitHub",
    },
    {
      image: skill_8,
      title: "VS Code",
    },
  ];

  const [skillArraySize, setSkillArraySize] = useState([...skillCardDataObj.slice(0, 4)])

  const handleLessOrMore = () => {
    if (view === "View More") {
      setSkillArraySize([...skillCardDataObj])
      setView("View Less")
    } else {
      const filtered_skills = skillCardDataObj.slice(0, 4)
      setSkillArraySize([...filtered_skills])
      setView("View More")
    }
  }

  return (
    <section
      className="text-gray-600 body-font"
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <Container maxWidth="xl" className="mx-auto">
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Paper
              elevation={0}
              className="p-2"
              sx={{
                backgroundColor: "#EEEEEE",
              }}
            >
              <Typography variant="h4" className="fw-bold" align="center">
                My Skills
              </Typography>
              <Typography variant="body1" className="my-3 text-muted fw-bold">
                That high-end software technologies that are use as following
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Paper
          elevation={0}
          className="p-4"
          sx={{
            backgroundColor: "#EEEEEE",
          }}
        >
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 2, sm: 2, md: 2 }}
          >
            {skillArraySize.map((obj, id) => (
              <SkillCard key={id} Image={obj.image} Title={obj.title} />
            ))}
          </Grid>
        </Paper>

        <Grid container spacing={3} alignItems="center">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Paper
              elevation={0}
              className="p-2"
              sx={{
                backgroundColor: "#EEEEEE",
              }}
            >
              <div className="flex justify-center mt-3 fw-bold">
                <Button
                  variant="contained"
                  size="small"
                  style={{
                    background: "#5963a2",
                  }}
                  className="py-1 px-5 text-lg"
                  onClick={handleLessOrMore}
                >
                  {view}
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default MySkillBanner;
