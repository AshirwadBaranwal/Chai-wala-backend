import { User } from "../models/user.models.js";

//************
// Home
//************
const home = async (req, res) => {
  try {
    res.send("This is home page.");
  } catch (error) {
    res.status(400).json({ msg: "Page not found" });
  }
};

//************
// Register
//************

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, email, phone } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "User Exists." });
    }

    const userCreated = await User.create({ username, password, email, phone });
    res.status(201).json({
      msg: "User Created Successfully",
      userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ msg: "Error occured" });
  }
};

//************
// Login
//************

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid credentials." });
    }

    const isPasswordCorrect = await userExist.comparePassword(password);
    if (isPasswordCorrect) {
      res.status(200).json({ message: "Login Successful" });
    } else {
      res.status(401).json({ message: "Invalid email or password." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { home, register, Login };
