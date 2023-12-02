import { model } from "mongoose";
import { socialSchema } from "../schemas";

export const SocialModel = model("Social", socialSchema);

export class Social {}
