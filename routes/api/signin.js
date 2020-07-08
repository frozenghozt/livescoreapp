const User = require("../../models/User");
module.exports = (app) => {
  app.post("/api/account/signup", (req, res, next) => {
    const { body } = req;
    const { firstName, lastName, email, password } = body;

    if (!firstName) {
      res.end({
        success: false,
        message: "Error: First name cannot be blank.",
      });
    }
    if (!lastName) {
      res.end({
        success: false,
        message: "Error: Last name cannot be blank.",
      });
    }
    if (!email) {
      res.end({
        success: false,
        message: "Error: Email cannot be blank.",
      });
    }
    if (!password) {
      res.end({
        success: false,
        message: "Error: Password cannot be blank.",
      });
    }

    email = email.toLowerCase();

    User.find(
      {
        email: email,
      },
      (err, previousUsers) => {
        if (err) {
          res.end("Error: Server error");
        } else if (previousUsers.length > 0) {
          res.end("Error: Account already exist.");
        }
      }
    );

    const newUser = new User();

    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.password = newUser.generateHash(password);
    newUser.save((err, user) => {
      if (err) {
        res.end({
          success: false,
          message: "Error: Server error",
        });
      }
      red.end({
        success: true,
        message: "Signed up",
      });
    });
  });
};
