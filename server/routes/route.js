import express from "express";
import { get } from "mongoose";

import { userSignUp, userLogin } from "../controller/user-controller.js";
import {
  getProductById,
  getProducts,
} from "../controller/product-controller.js";

import { addPaymentGateway } from "../controller/payment-controller.js";

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

router.post("/payment", addPaymentGateway);

export default router;
