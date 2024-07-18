
import Book from "../model/bookModel.js";

export const getBook = async (req, res) => {
  try {
    // Fetch all books from the database
    const books = await Book.find();

    // If books are found, return them with a 200 status code
    res.status(200).json(books);
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching books:", error);

    // Return a 500 status code with an error message
    res.status(500).json({ message: "An error occurred while fetching books." });
  }
};

