import { Router } from "express";
import mongoose, { ObjectId } from "mongoose";
import { asyncHandler } from "../utils/asyncHandler";
import { ErrorHandler } from "../utils/errorHandler";
import { PostService } from "../services/postService";
import { validateAddPost, validateUpdatePost, validateDeletePost, validateId } from "../validators/postValidator";
import { mappingCategory } from "../utils/mappingString";
const postRouter = Router();

//게시글 조회
postRouter.get(
  "/post/:id",
  asyncHandler(async (req, res, next) => {
    const userId = (req.user as { id: ObjectId })?.id;
    const postId = req.params.id;
    let marked = false;

    const error = await validateId(postId);
    if (error) throw ErrorHandler.BadRequest("요청 값 불량");

    const myPost: any = await PostService.readPost(postId);
    if (req.cookies[postId] == undefined) {
      res.cookie(postId, "value", { maxAge: 200000 });
      await PostService.countView(postId);
    }
    if (userId) {
      const bookmark = await PostService.checkBookmarkThisPost(postId, userId);
      if (bookmark) marked = true;
    }

    if (!myPost) throw ErrorHandler.BadRequest("조회 실패");
    res.status(200).json({ message: "조회 완료", data: { ...myPost.toJSON(), marked } });
  })
);

//모든 게시글 조회
postRouter.get(
  "/allPost/:page?/:filter?",
  asyncHandler(async (req, res, next) => {
    const page = parseInt(req.params.page);
    const filter: string = mappingCategory(req.params.filter);
    console.log(filter);
    const userId = (req.user as { id: ObjectId })?.id;
    const allPost = await PostService.getAllPost(userId, page, filter);

    if (!allPost) throw ErrorHandler.InternalServerError("조회 실패");

    res.status(200).json({ data: allPost });
  })
);
//내 게시글 조회
postRouter.get(
  "/mypost/:page?/",
  asyncHandler(async (req, res, next) => {
    const user_id = (req.user as { id: ObjectId })?.id;
    const page = parseInt(req.params.id);
    const filter: any = req.query?.filter;
    const myPost = await PostService.getMyPost( user_id, page, filter);

    if (!myPost) throw ErrorHandler.BadRequest("조회 실패");
    res.status(200).json({ message: "조회 완료", data: myPost });
  })
);

//게시글 작성
postRouter.post(
  "/write",
  asyncHandler(async (req, res, next) => {
    const value = req.body;
    value.user_id = (req.user as { id: ObjectId })?.id;
    if (!value.user_id) throw ErrorHandler.Unauthorized();
    const { error } = await validateAddPost(value);
    console.log(error)
    if (error) throw ErrorHandler.BadRequest("요청 값 불량");
    const post = await PostService.createPost(value);
    if (!post) throw ErrorHandler.InternalServerError("생성 실패");
    res.status(200).json({ message: "생성 완료" });
  })
);

//게시글 수정
postRouter.put(
  "/modify",
  asyncHandler(async (req, res, next) => {
    const value = req.body;
    value.user_id = (req.user as { id: ObjectId })?.id;
    if (!value.user_id) throw ErrorHandler.Unauthorized("권한 없음");
    const { error } = await validateUpdatePost(value);
    if (error) throw ErrorHandler.BadRequest("요청 값 불량");
    const updatedPost = await PostService.updatePost(value);
    console.log(updatedPost);
    if (!updatedPost) throw ErrorHandler.InternalServerError("수정 실패");
    res.status(200).json({ message: "수정 완료" });
  })
);

//게시글 삭제
//진짜 db에서 지워버리는건 아니고 deleteAt이 null인데 여기에 date값 부여함
postRouter.put(
  "/delete/:id",
  asyncHandler(async (req, res, next) => {
    const value = { _id: req.params?.id, user_id: (req.user as { id: ObjectId })?.id };

    const { error } = await validateDeletePost(value);
    if (error) throw ErrorHandler.BadRequest("요청 값 불량");
    const deletedPost = await PostService.deletePost(value);
    if (!deletedPost) throw ErrorHandler.InternalServerError("삭제 실패");
    await PostService.deletedBookmarkRelatedPost(value._id);
    res.status(200).json({ message: "삭제 완료" });
  })
);

//북마크 토글

postRouter.post(
  "/bookmark/:id",
  asyncHandler(async (req, res, next) => {
    const user_id = (req.user as { id: ObjectId })?.id;
    const post_id = req.params.id;

    const bookmark: any = await PostService.checkBookmark(post_id, user_id);
    if (bookmark && !bookmark.deletedCount) return res.status(200).json({ message: "생성 성공" });
    else if (bookmark.deletedCount) return res.status(200).json({ message: "삭제 성공" });
    else throw ErrorHandler.BadRequest("요청값 불량");
  })
);

export { postRouter };
