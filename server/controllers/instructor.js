import User from "../models/user";
// import queryString from "query-string";
// import { Router } from "express";


export const makeInstructor = async (req, res) => {
  try {
    // console.log("================================================================");
    // console.log(req.body);
    const user = await User.findById(req.body.user._id).exec();
    const { Account, Ifsccode, _id } = req.body;
    // validation
    if (!Ifsccode || !Ifsccode.length == 8) {
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
    console.log("Saved  accont of user ", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log("MAKE INSTRUCTOR ERR ", err);
  }
};


export const getAccountStatus = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    const account = await User.findById(req.user.Account).exec();  //change
    //    console.log("ACCOUNT => ", account);


  } catch (err) {
    console.log(err)
  }
};

export const currentInstructor = async (req, res) => {
  try {
    let user = await User.findById(req.user._id).select("-password").exec();
    if (!user.role.includes("Instructor")) {
      return res.sendStatus(403);
    } else {
      res.json({ ok: true });
    }

  } catch (err) {
    console.log(err);
  }
};