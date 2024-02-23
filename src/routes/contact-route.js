import express from "express";
import contactControl from "../controllers/contact-controller.js";


const formRoute = express.Router();

formRoute.route("/contact").post(contactControl);

export { formRoute };
