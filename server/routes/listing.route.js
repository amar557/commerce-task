import express from "express";
import {
  createItem,
  getListedItems,
  deleteProduct,
} from "../controllers/auth.Controller.js";
import {
  listingSchema,
  validateProduct,
} from "../validators/product.validate.js";
const listingRouter = express.Router();
listingRouter.post("/product", validateProduct(listingSchema), createItem);
listingRouter.get("/get/products", getListedItems);
// listingRouter.delete("/delete/:id", deleteProduct);
export default listingRouter;
