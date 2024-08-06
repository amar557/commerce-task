import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { registerModel } from "../schema/login.schema.js";
import { registerModel } from "../schemas/login.schema.js";
import Product from "../schemas/item.schema.js";
export const signUpUser = async (req, res, next) => {
  try {
    const { password, username, email } = req.body;
    const hashedPass = bcrypt.hashSync(password, 10);
    const isEmailRegistered = await registerModel.findOne({ email });
    if (isEmailRegistered) {
      res.send({ warn: "email is already registered" });
    } else {
      const user = await registerModel({
        password: hashedPass,
        username,
        email,
      });
      await user.save();

      res.status(200).send({ message: "user registered successfully", user });
    }
  } catch (error) {
    res.send(error);
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const findEmail = await registerModel.findOne({ email });
  if (!findEmail) {
    res.status(400).send({ warn: "email not found" });
  } else {
    const isPasswordCorrect = await bcrypt.compare(
      password,
      findEmail.password
    );

    if (isPasswordCorrect) {
      const { password, ...other } = findEmail._doc;

      const token = await findEmail.generateJWT();
      // const token = await registerModel.generateJWT();

      res.cookie("jwttoken", token, { httpOnly: true });
      res.status(200).send({ other, token, message: "logen in successfully" });
    } else {
      res.status(400).send({ warn: "password is incorrect" });
    }
  }
};
export const verifyUser = async function (req, res, next) {
  const token = req.header("Authorization");
  // console.log(token);
  if (!token) {
    res.send("choree krnay ay ho hain");
  }
  const tokenVerify = jwt.verify(token, "secretkeyisgiven");

  res.send(tokenVerify);
  // console.log(req.body);
  // res.send("ab kaam start karo");
};

export const createItem = async (req, res, next) => {
  const { title, description, image, price } = req.body;
  try {
    const createdItem = await Product({ title, description, image, price });
    createdItem.save();
    res.status(200).send({ message: "item listed successfully" });
  } catch (error) {
    res.status(400).send({ err: error });
  }
};

export const getListedItems = async (req, res, next) => {
  try {
    const items = await Product.find();
    res.send(items);
  } catch (error) {
    res.send({ err: error });
  }
};
export const deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  const item = await Product.findByIdAndDelete();
};
