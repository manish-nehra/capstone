import User from "../models/user";
// import queryString from "query-string";
// import { Router } from "express";
import Course from "../models/course";

export const makeInstructor = async (req, res) => {
  try {
    
    const user = await User.findById(req.body.user._id).exec();
    const { Account, Ifsccode} = req.body;
    // validation
    if (!Ifsccode || !Ifsccode.length == 10) {
      return res
        .status(400)
        .send("Ifsccode is required and should be min 8 digit long");
    }
     let userObj = await User.findById(user._id).exec();
    // const userExists = awat User.findOne({seller: Account});
    console.log(userObj);
    if (userObj.seller) {
      return res.status(400).send("Account is Already have instructor rights");
    }
    else if (!userObj) {
      return res.status(401).send("Unauthorized");
    } else {  

      const statusUpdated = await User.findByIdAndUpdate(user._id, {
        seller: Account,
        Ifsccode: Ifsccode,
        $addToSet: { role: "Instructor" },
      },
        { new: true }
      )
        .select("-password")
        .exec();
      res.json(statusUpdated);
    }

    user.save();
     return res.send("Instructor Authorization compeleted ").json({ ok: true });
  } catch (err) {
    console.log("MAKE INSTRUCTOR ERR ", err);
  }
};


// export const getAccountStatus = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).exec();
//     const account = await User.findById(req.user.Account).exec();  //change
//     //    console.log("ACCOUNT => ", account);


//   } catch (err) {
//     console.log(err)
//   }
// };

export const currentInstructor = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findById(req.body._id).exec();
    
    // let user = await User.findById(userObj._id).select("-password").exec();
    console.log("############"+user);
    if (!user.role.includes("Instructor")) {
      return res.sendStatus(403);
    } else {

      res.json({ ok: true });
    }

  } catch (err) {
    console.log(err);
  }
};

export const instructorCourses = async (req, res) => {
  try {
    const courses = await Course.find({ instructor: req.user._id })
      .sort({ createdAt: -1 })
      .exec();
    res.json(courses);
  } catch (err) {
    console.log(err);
  }
};
