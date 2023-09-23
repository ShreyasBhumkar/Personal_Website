import React from "react";
import {
  Box,
} from "@mui/material";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import ServicesBanner from "../ServicesBanner/ServicesBanner";
import MySkillBanner from "../MySkillBanner/MySkillBanner";
import FooterBanner from "../FooterBanner/FooterBanner";

const WebsiteContents = () => {
  return (
    <React.Fragment>
      <Box>
        <HeaderBanner />
        <ServicesBanner />
        <MySkillBanner />
      </Box>
        <FooterBanner />
    </React.Fragment>
  );
};

export default WebsiteContents;
