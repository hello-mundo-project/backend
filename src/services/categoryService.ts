import { Category } from "../models";

export class CategoryService {
  static async getAllCategory() {
    return await Category.findAllCategory();
  }

  static async getCategory(categoryName: string) {
    return await Category.findByCategoryName(categoryName);
  }
}
