import express from "express";
import * as productController from "./../controller/productController.js";

const router = express.Router();

router.route("/products").get(productController.getAllProducts);

export default router;
