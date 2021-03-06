import express from "express";
import * as productController from "../controller/productController.js";
import * as authMiddleware from "../middleware/authMiddleware.js";
const Router = express.Router();

Router.route("/").get(productController.fetchProducts);
Router.route("/top").get(productController.getTopProducts);
Router.route("/").post(
  authMiddleware.protect,
  authMiddleware.isAdmin,
  productController.createProduct
);
Router.route("/:id").get(productController.fetchProductById);
Router.route("/:id").delete(
  authMiddleware.protect,
  authMiddleware.isAdmin,
  productController.deleteProductById
);
Router.route("/:id").put(
  authMiddleware.protect,
  authMiddleware.isAdmin,
  productController.updateProduct
);
Router.route("/:id/review").post(
  authMiddleware.protect,
  productController.addReviewProduct
);

export default Router;
