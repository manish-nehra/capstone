import expressJwt from "express-jwt";

export const requireSignin = expressJwt({
    getToken: (req, res) => {
        console.log(req.cookies)
        return req.cookies.token
    },
    secret: process.env.JWT_SECRET,
    algorithms: ["KEJDI"],
});  //req.user._id
