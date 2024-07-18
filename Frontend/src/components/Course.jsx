import Cards from "./Cards";
// import List from "../../public/list.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
  const [book,setBook] = useState([]);

  useEffect(()=>{
    const getBook = async()=> {
      try {
           const response =        await axios.get("http://localhost:4000/book");
           console.log(response.data);
           setBook(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[]);

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-[68px] items-center justify-center text-center ">
          <h1 className=" text-2xl  md:text-4xl ">
            We are delighted to have you{" "}
            <span className=" text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            dolores temporibus qui minima similique nostrum alias, non eveniet
            aperiam id repellat beatae odit facilis deserunt tenetur quis iste
            laborum doloribus! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. At eos est cumque! Doloribus reiciendis
            necessitatibus voluptatem, laborum qui itaque eligendi!
          </p>
          <Link to='/'>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
            Back
          </button>
          </Link>
         
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
