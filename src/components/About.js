import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import WorkspacesIcon from '@mui/icons-material/Workspaces';
const About = () => {
  const theme = useTheme();
  const [about, setAbout] = useState([]);
  
  const fetchAbout = () => {
    axios.get("http://127.0.0.1:8000/about", {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => {
      setAbout(response.data);
    })
    .catch(error => console.log(error));
  };
  
  useEffect(() => {
    fetchAbout();
  }, []);
  
  return (
    <div id="about">
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin="0 auto"
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant="h2"
              align="center"
              fontWeight={700}
              marginTop="-30px"
              data-aos="fade-up"
              gutterBottom
            >
              About
            </Typography>
            <Typography
              variant="h4"
              color={theme.palette.text.secondary}
              align="center"
              data-aos="fade-up"
              marginTop={4}
              marginBottom={6}
            >
Welcome to my website! I am a freelance web developer with a passion for building elegant, fast, and scalable web applications. With expertise in Java Spring, Python Django, and React JS, I specialize in creating custom solutions that cater to the unique needs of businesses and individuals alike.
I take pride in my attention to detail, clean coding practices, and a strong commitment to delivering high-quality work. Whether you need a responsive website, a robust backend system, or an interactive user interface, I am here to transform your ideas into reality.

If you have a project in mind or need assistance with your existing web application, I would love to discuss how I can help you achieve your goals. Let's work together to bring your ideas to life!"            </Typography>
          </Box>
          <Grid container spacing={4}>
            {about.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box
                  display="block"
                  width={1}
                  height={1}
                  sx={{
                    textDecoration: "none",
                    transition: "all .2s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box
                    component={Card}
                    padding={4}
                    borderRadius={2}
                    width={1}
                    height={1}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    data-aos-offset={100}
                    data-aos-duration={600}
                    variant="outlined"
                  >
                    <Box 
                      display="flex" 
                      flexDirection="column"
                    >
                      <Box
                        component={Avatar}
                        width={50}
                        height={50}
                        marginBottom={2}
                        backgroundColor={theme.palette.primary.main}
                        color={theme.palette.common.white}
                      >
                        <Icon>
                          {item.icon}
                        </Icon>
                      </Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 700 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography color={theme.palette.text.secondary}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default About;