import { ObjectId } from "mongoose";
import { Bookmark, Post, Skill } from "../models";

export class PostService {
  static async getAllPost(user_id?: ObjectId, page?: number, filter?: string) {
    const marked = true;
    const markedAllPost: any = [];
    const allPost: Array<object> = await Post.readAllPost(user_id, page, filter);
    if (user_id) {
      await Promise.all(
        allPost.map(async (post: any) => {
          const bookmark = await PostService.checkBookmarkThisPost(post._id, user_id);
          if (bookmark) {
            const markedPost: any = { ...post.toJSON(), marked };
            return markedAllPost.push(markedPost);
          } else if (post.deleteAt != null) return;
          markedAllPost.push(post.toJSON());
        })
      );
    }
    return user_id ? markedAllPost : allPost;
  }

  static async readPost(postId: string) {
    const post = await Post.readPost(postId);

    return post;
  }
  static async getMyPost(user_id: ObjectId, page?: number, filter?: string) {
    const myPost = await Post.findAllmyPost(user_id, page, filter);
    return myPost;
  }

  static async createPost(value: any) {
    const createdPost = await Post.create(value);
    return createdPost;
  }

  static async updatePost(value: any) {
    const updatedPost = await Post.updateById(value);
    return updatedPost;
  }
  static async deletePost(value: any) {
    const deletedPost = await Post.deleteById(value);

    return deletedPost;
  }

  static async checkBookmark(post_id: any, user_id: any) {
    const bookmark = await Bookmark.check(post_id, user_id);
    if (!bookmark) {
      const createdBookmark = await Bookmark.create(post_id, user_id);
      if (!createdBookmark) return;
      return createdBookmark;
    }
    return await Bookmark.deleteByUserIdAndPostId(post_id, user_id);
  }

  // static async getMyBookmark(userId: any, categoryId?: any) {
  //   return await Bookmark.findByUserId(userId, categoryId);
  // }

  static async checkBookmarkThisPost(post_id: any, user_id: any) {
    return await Bookmark.check(post_id, user_id);
  }
  static async deletedBookmarkRelatedPost(post_id: any) {
    return await Bookmark.deleteBecausePostDeleted(post_id);
  }

  static async countView(post_id: any) {
    const updatedCount = await Post.countUp(post_id);
    return updatedCount;
  }
}
