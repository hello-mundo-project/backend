import passport from "passport";
import local from "./strategies/local";

passport.use(local);

export { passport };
