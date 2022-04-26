import expressJwt from "express-jwt";
import User from "../models/user";
export const requireSignin = expressJwt({
    getToken: (req, res) => {
        console.log(req.cookies)
        return req.cookies.token;
    },
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
});  //req.user._id

export const isInstructor = async (req, res, next) => {
    try {
      const user = await User.findById(req.body.user._id).exec();
      if (!user.role.includes("Instructor")) {
        return res.sendStatus(403);
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
    }
  };