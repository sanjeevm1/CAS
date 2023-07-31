import { Toolbar, Avatar, Stack, Typography, styled } from "@mui/material";
import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export default function Navigator(): ReactElement {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  const ToolBar = styled(Toolbar)({
    backgroundColor: "rgba(217, 217, 217, 0.60)",
  });

  return (
    <>
      <ToolBar>
        <Avatar sx={{ marginLeft: { xs: "45%", md: 0 } }} />
        <Stack
          display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          width="100%"
        >
          {menuItems.map((item) => {
            return (
              <Typography
                fontSize="medium"
                component="a"
                color="white"
                variant="h6"
                fontWeight="bold"
                sx={{ textDecoration: "none" }}
                href={item.href}
              >
                {item.name}
              </Typography>
            );
          })}
        </Stack>
      </ToolBar>
      <Outlet />
    </>
  );
}
