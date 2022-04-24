import expressJwt from "express-jwt";

export const requireSignin = expressJwt({
    getToken: (req, res) => {
        console.log(req.cookies)
        return req.cookies.token
    },
    secret: process.env.JWT_SECRET,
    algorithms: ["KEJDI"],
});  //req.user._id

export const isInstructor = async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id).exec();
      if (!user.role.includes("Instructor")) {
        return res.sendStatus(403);
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
    }
  };