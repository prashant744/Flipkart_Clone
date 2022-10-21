import { useState, useContext } from "react";

import { Box, Button, Typography, styled, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

// components

import LoginDialog from "../login/LoginDialog";
import CartItem from "../cart/CartItem";

const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "40px !important",
    fontSize: 16,
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: 600;
  height: 32px;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const { cartItems } = useSelector((state) => state.cart);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3, width: 135 }}>More</Typography>

      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
