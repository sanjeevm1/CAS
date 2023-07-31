import React from "react";
import healthImg from "../assests/image/health.png";
import { Button, Grid, Stack, Typography, Box, Paper } from "@mui/material";
import { Image } from "mui-image";

const Header = ()=>{

    return (
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack spacing={5} mt={15} ml={4} mr={4}>
              <Typography component="h1" variant="h4" color="white">
                Vorem ipsum dolor sit amet, Porem ipsum dolor sit ametconsec
                adipiscing elit.
              </Typography>
              <Typography component="p" color="white">
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
                nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                tellus elit sed risus. Maecenas eget condimentum velit, sit amet
                feugiat lectus. Class aptent taciti sociosqu{" "}
              </Typography>
              <Stack direction="row" spacing={5}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "11px 39px",
                  }}
                  size="medium"
                >
                  About
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#D9D9D9", color: "black" }}
                  size="medium"
                >
                  Learn More
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            md={6}
            display={{ xs: "none", sm: "none", md: "grid", lg: "grid" }}
            lg={6}
          >
            <Stack alignItems="center" justifyContent="center" p={5}>
              <Image src={healthImg} width="100%" height="100%" />
            </Stack>
          </Grid>
        </Grid>
      );
}

const MediaPosts = () => {
    return(
        <Box sx={{backgroundColor:"rgba(158, 157, 192, 0.60)"}} mt={3} p={2}>
        <Typography color="white" component="h1" variant="h4" textAlign="center">Daily Media Posts</Typography>
        <Grid container spacing={2} p={3}>
           {
            [1,2,3,4].map((data)=>{
                return (<Grid item xs={12} sm={12} md={6}lg={6}>
                    <Paper elevation={0} sx={{padding:"30px",backgroundColor:"#D9D9D9"}}></Paper>
                </Grid>)
            })
           }
        </Grid>
    </Box>
    )
}

const HealthCare = () => {
  return(
    <>
    <Header/>
    <MediaPosts/>
    </>
  )
};

export default HealthCare;
