import { ObjectId, model } from "mongoose";
import { bookmarkSchema } from "../schemas";

export const BookmarkModel = model("Bookmark", bookmarkSchema);

export class Bookmark {
  // 북마크 조회 (최신순, 모집분류 필터)
  static async findByUserId(userId: ObjectId, categoryId?: ObjectId) {
    if (!categoryId) {
      return await BookmarkModel.find({ user_id: userId }).populate("post_id").sort({ createdAt: -1 });
    }
    return await BookmarkModel.find({ user_id: userId })
      .populate({ path: "post_id", match: { category_id: categoryId } })
      .sort({ createdAt: -1 });
  }

  static async check(postId: ObjectId, userId: ObjectId) {
    const bookmark = await BookmarkModel.findOne({
      $and: [{ user_id: userId }, { post_id: postId }]
    });
    return bookmark;
  }

  // 북마크 추가
  static async create(postId: ObjectId, userId: ObjectId) {
    return await BookmarkModel.create({
      post_id: postId,
      user_id: userId
    });
  }

  // 북마크 제거
  static async deleteByUserIdAndPostId(postId: ObjectId, userId: ObjectId) {
    return await BookmarkModel.deleteOne({
      $and: [{ user_id: userId }, { post_id: postId }]
    });
  }

  //게시글 삭제로 인한 연관 북마크 모두 삭제
  static async deleteBecausePostDeleted(postId: ObjectId) {
    return await BookmarkModel.deleteMany({ post_id: postId });
  }
}
