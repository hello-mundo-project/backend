import { ObjectId, model } from "mongoose";
import { categorySchema } from "../schemas";

export const CategoryModel = model("Category", categorySchema);

export class Category {
  static async findAllCategory() {
    const fields = ["_id", "name"];
    return await CategoryModel.find({}).select(fields.join(" "));
  }

  static async findByCategoryName(categoryName: string) {
    const fields = ["_id", "name"];
    return await CategoryModel.findOne({ name: categoryName }).select(fields.join(" "));
  }
  static async findByCategoryId(categoryId: ObjectId | string) {
    const fields = ["_id", "name"];
    return await CategoryModel.findOne({ _id: categoryId }).select(fields.join(" "));
  }
}
