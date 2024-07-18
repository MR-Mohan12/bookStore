import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

const SignupLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        fullName: data.fullname,
        email: data.email,
        password: data.password,
      };

      const response = await axios.post(
        "http://localhost:4000/user/signup",
        userInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      toast.success('Signup Successful');

      // Update to navigate to login page
      window.location.href = "/"; // Navigate to login page

    } catch (error) {
      if (error.response) {
        console.error("Error Response:", error.response.data);
        if (error.response.data.message === "User already exists") {
          toast.error("User with this email already exists. Please login.")
        } else {
          console.error("Signup Error:", error.response.data.message);
          toast.error("Signup failed: " + error.response.data.message);
        }
      } else {
        console.error("Signup Error:", error.message);
        toast.error("Signup failed: Something went wrong");
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal" open>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => window.location.href = "/"}
              type="button"
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Sign Up</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span> <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="py-1 w-80 px-3 border rounded-md outline-none"
                {...register("fullname", { required: "Name is required" })}
              />
              {errors.fullname && (
                <span className="text-red-500">{errors.fullname.message}</span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span> <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="py-1 w-80 px-3 border rounded-md outline-none"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span> <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="py-1 w-80 px-3 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200"
              >
                Sign Up
              </button>
              <p>
                Already registered?{" "}
                <Link
                  to="/" // Link to login page
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default SignupLogin;
