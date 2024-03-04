const {User} = require("../../models/dbModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = async (request, response) => {
  // hash the password
  await bcrypt
    .hash(request.body.password, 10)
    .then(async (hashedPassword) => {
      try {
        // const user = User.createUser(request.body.email, hashedPassword);
        const user = await User.create({
            User_name: request.body.User_name,
            User_mobile:request.body.User_mobile,
            gender: request.body.gender,
            dob: request.body.dob,
            User_email: request.body.User_email,
            username:request.body.username,
            password:hashedPassword,
        })
        if (user != null) {
          const token = jwt.sign(
            {
              userId: user.User_id,
              username:user.username,
              userEmail: user.User_email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
          response.status(201).send({
            authToken: token,
            message: "User Created Successfully.",
          });
        }
      } catch (error) {
        response.status(500).send({
          message: "Error creating user.",
        });
      }
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
};

exports.login = async (request, response) => {
  // check if email exists
  try {
    const user = await User.findOne({where:{User_email:request.body.email}});
    await bcrypt
      .compare(request.body.password, user.password)
      // if the passwords match
      .then((passwordCheck) => {
        // check if password matches
        if (!passwordCheck) {
          console.log("incorrect pass");
          return response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        }
        //   create JWT token
        const token = jwt.sign(
          {
            userId: user._id,
            userEmail: user.email,
          },
          "RANDOM-TOKEN",
          { expiresIn: "24h" }
        );
        //   return success response
        response.status(200).send({
          message: "Login Successful",
          email: user.email,
          token,
        });
      })
      // catch error if password do not match
      .catch((error) => {
        response.status(400).send({
          message: "Passwords does not match",
          error,
        });
      });
  } catch (e) {
    response.status(500).send({
      message: "Email not found",
      e,
    });
  }
};