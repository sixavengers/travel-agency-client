import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import facebook from "../../images/facebookicon.png";
import google from "../../images/googleicon.png";


const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  /* Added comment */

  return (
    <div className="flex h-screen justify-center items-center p-5 font-poppins">
      <div>
        <div className="sm:w-86 lg:w-96 border-2 p-7 rounded">
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-5">Login</h2>

            <form>
              <div className="form-control w-full sm:max-w-xs">
                <label className="label">
                  <span className="label-text ">Username or Email</span>
                </label>
                <input
                  type="email"
                  placeholder=""
                  className="border 2xl:p-2 p-2 my-1  mt-2 rounded outline-none w-full bg-[#F2F2F2]"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500"></span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500"></span>
                  )}
                </label>
              </div>

              <div className="form-control w-full sm:max-w-xs mt-5 ">
                <label className="label">
                  <span className="label-text">password</span>
                </label>
                <input
                  type="password"
                  placeholder=""
                  className="border 2xl:p-2 p-2 my-1  mt-2 rounded outline-none w-full bg-[#F2F2F2]"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500"></span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500"></span>
                  )}
                </label>
              </div>

              <div className="flex justify-between items-center mt-5">
                <div className="flex items-center">
                  <input type="checkbox" name="" id="" />
                  <p className="ml-2">Remember Me</p>
                </div>
                <p className="text-[#F9A51A] border-b border-[#F9A51A]">
                  Forgot Password
                </p>
              </div>

              <div className="bg-[#F9A51A] p-2 mt-5 hover:bg-yellow-400 rounded">
                <input
                  className="btn w-full max-w-xs text-red cursor-pointer hover:tracking-widest transition-all"
                  type="Submit"
                  value="Login"
                />
              </div>
            </form>

            <p className="mt-5 text-center">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-[#F9A51A] border-b border-[#F9A51A]"
              >
                Create an Account
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center ml-5">
          <div
            style={{ height: "1px", width: "150px" }}
            className="bg-[#AFAFAF] "
          ></div>
          <p className="px-2">Or</p>
          <div
            style={{ height: "1px", width: "150px" }}
            className="bg-[#AFAFAF] "
          ></div>
        </div>

        <div className="mt-5">
          <div className="flex items-center border-2 rounded-3xl p-1">
            <img src={google} alt="" />
            <button className="pl-16 text-center hover:tracking-widest transition-all">
              Continue with Google
            </button>
          </div>
          <div className="flex items-center border-2 rounded-3xl p-1 mt-5">
            <img style={{ width: 30, height: 30 }} src={facebook} alt="" />
            <button className="pl-16 text-center hover:tracking-widest transition-all">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
