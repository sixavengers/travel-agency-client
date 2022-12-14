import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import facebook from "../../images/facebookicon.png";
import google from "../../images/googleicon.png";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const onSubmit = data => console.log(data);

  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <div className="sm:w-86 lg:w-96 border-2 p-5 rounded">
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-5">Create an account</h2>

            <form>
              <div className="form-control w-full max-w-xs border-b border-grey-dark">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">{}</span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs border-b border-grey-dark mt-5">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">{}</span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs border-b border-grey-dark mt-5">
                <label className="label">
                  <span className="label-text ">Username or Email</span>
                </label>
                <input
                  type="email"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs"
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

              <div className="form-control w-full max-w-xs border-b border-grey-dark mt-5">
                <label className="label">
                  <span className="label-text">password</span>
                </label>
                <input
                  type="password"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs"
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

              <div className="form-control w-full max-w-xs border-b border-grey-dark mt-5">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs"
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

              <div className="bg-[#F9A51A] p-2 mt-5">
                <input
                  className="btn w-full max-w-xs text-red"
                  type="Submit"
                  value="create an account"
                />
              </div>
            </form>

            <p className="mt-5 text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#F9A51A] border-b border-[#F9A51A]"
              >
                Login
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
            <button className="pl-16 text-center">Continue with Google</button>
          </div>
          <div className="flex items-center border-2 rounded-3xl p-1 mt-5">
            <img style={{ width: 30, height: 30 }} src={facebook} alt="" />
            <button className="pl-16 text-center">Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
