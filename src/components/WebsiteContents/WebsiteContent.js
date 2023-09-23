import React from "react";
import { Row, Col } from "reactstrap";
import {
  Typography,
  Box,
  Grid,
  Paper,
  Container,
  Button,
  Card,
} from "@mui/material";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import ServicesBanner from "../ServicesBanner/ServicesBanner";
import MySkillBanner from "../MySkillBanner/MySkillBanner";

const WebsiteContents = () => {
  return (
    <React.Fragment>
      <Box>
        <HeaderBanner />
        <ServicesBanner />
        <MySkillBanner />
      </Box>
    </React.Fragment>
  );
};

export default WebsiteContents;
