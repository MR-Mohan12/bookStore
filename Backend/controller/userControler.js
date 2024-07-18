import User from "../model/userModel.js";
import bcrypt from "bcryptjs";




export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Validate input
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const createdUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await createdUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }

};

//login

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if the user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Return user details
    res.status(200).json({ message: "Login successful", user: existingUser });
  } catch (error) {
    console.error("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
