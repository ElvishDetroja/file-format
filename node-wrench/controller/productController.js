import axios from "axios";
import { cookieOptions } from "./../config/options.js";

//
//
//

export async function getAllProducts(req, res) {
  //
  try {
    const { data } = await axios.get("http://localhost:7000/products/5");

    if (!data) {
      return res.status(200).json({
        status: true,
        message: "No products found",
        result: null,
      });
    }

    res.status(200).cookie("token", "token here", cookieOptions).json({
      status: true,
      message: "All products fetched successfully",
      result: data,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Failed to fetch products" });
  }
}
