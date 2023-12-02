import mongoose, { model, ObjectId } from "mongoose";
import { postSchema } from "../schemas";
export const PostModel = model("Post", postSchema);
const populateTemplate = [
  { path: "user_id", select: "_id nickname" },
  { path: "city_id", select: "_id name" },
  { path: "district_id", select: "_id name" },
  { path: "career_id", select: "_id name" },
  { path: "category_id", select: "_id name" },
  { path: "skill_id", select: "name" }
];
export class Post {
  static async create(value: object) {
    const createdPost = await PostModel.create(value);
    return createdPost;
  }

  static async readPost(_id: string) {
    const post :any = await PostModel.findOne({ _id: _id }).populate(populateTemplate);
    if(post.deleteAt != null) return;
  }

  static async readAllPost(user_id?: ObjectId, page?: number, filter?: string) {
    const paging = page ? page : 1;
    let filtering: any = filter;

    function toId(string: string) {
      const id = new mongoose.Types.ObjectId(string);
      return { category_id: id };
    }

    switch (filter) {
      case "프로젝트":
        filtering = toId("655ccbf12c838438d0e1a7f6");
        break;
      case "해커톤":
        filtering = toId("655ccbf32c838438d0e1a7fb");
        break;
      case "스터디":
        filtering = toId("655ccbf32c838438d0e1a7fe");
        break;
      default:
        filtering = null;
    }

    if (filtering === null) {
      return await PostModel.find()
        .skip(paging * 10 - 10)
        .limit(10)
        .populate(populateTemplate);
    }

    return await PostModel.find(filtering)
      .skip(paging * 10 - 10)
      .limit(10)
      .populate(populateTemplate);
  }
  static async findAllmyPost(user_id: any, page?: number, filter?: string) {
    const paging = page ? page : 1;
    let filtering: any = filter;

    function toId(string: string) {
      const id = new mongoose.Types.ObjectId(string);
      return { category_id: id };
    }

    switch (filter) {
      case "프로젝트":
        filtering = toId("655ccbf12c838438d0e1a7f6");
        break;
      case "해커톤":
        filtering = toId("655ccbf32c838438d0e1a7fb");
        break;
      case "스터디":
        filtering = toId("655ccbf32c838438d0e1a7fe");
        break;
      default:
        filtering = null;
    }

    if (filtering === null) {
      return await PostModel.find({ user_id: user_id })
        .skip(paging * 10 - 10)
        .limit(3)
        .populate(populateTemplate);
    }

    return await PostModel.find({ $and: [filtering, { user_id: user_id }] })
      .skip(paging * 10 - 10)
      .limit(3)
      .populate(populateTemplate);
  }

  static async updateById(value: any) {
    const { _id, user_id } = value;

    const foundedUser: any = await PostModel.findById(_id);
    if (!foundedUser?.user_id.equals(user_id)) return;
    const updatedPost = await PostModel.findByIdAndUpdate(_id, value);
    return updatedPost;
  }

  static async deleteById(value: any) {
    const { _id, user_id } = value;
    const deleteMoment = new Date();
    const foundedUser: any = await PostModel.findById(_id);
    if (!foundedUser?.user_id.equals(user_id)) return;
    const updatedPost = await PostModel.findByIdAndUpdate(_id, { $set: { deleteAt: deleteMoment } });
    return updatedPost;
  }

  static async countUp(post_id: any) {
    const postview = await PostModel.updateOne({ _id: post_id }, { $inc: { viewcount: 1 } });
    return postview;
  }
}
