import { model } from "mongoose";
import { postViewSchema } from "../schemas";

export const PostViewModel = model("PostView", postViewSchema);

export class PostView {}
