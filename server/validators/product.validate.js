import { z } from "zod";

export const listingSchema = z.object({
  title: z.string().min(1, { message: "product name is required" }),

  //   description: z.string().min(1, { message: "desciption sho." }),
  price: z.number().min(1, { message: "price is required." }),
  image: z
    .string()
    .min(1, { message: "listing should be atleast have one image." }),
});
export const validateProduct = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).send({ warn: error.issues[0].message });
  }
};
