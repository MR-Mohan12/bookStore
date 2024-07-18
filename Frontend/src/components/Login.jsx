import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const response = await axios.post(
        "http://localhost:4000/user/login",
        userInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login Response:", response.data);

      if (response.data && response.data.user) {

        // alert("Login Successful");
    
      toast.success("Login Successful");

        // Store user data in localStorage or manage user session
        localStorage.setItem("Users", JSON.stringify(response.data.user));

        // Optionally, you can redirect to home or dashboard using window.location
        window.location.href = "/"; // Redirect to home page after successful login
      } else {
        console.log("Invalid response structure:", response.data);
      
        toast.error("Login failed: Invalid credentials")
        // alert("Login failed: Invalid credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);

      if (error.response) {
        console.error("Error Response:", error.response.data);

        // alert("Login failed: " + error.response.data.message);
        toast.error("Login failed: " + error.response.data.message);

      } else {
        toast.error("Login failed: Something went wrong");
        // alert("Login failed: Something went wrong");
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              type="button"
              onClick={() => window.location.href = "/"}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span> <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="py-1 w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span> <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="py-1 w-80 px-3 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;



