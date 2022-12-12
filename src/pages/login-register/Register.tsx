import cogoToast from "cogo-toast";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../api/AuthenticationApi";
import facebook from "../../images/facebookicon.png";
import google from "../../images/googleicon.png";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const [RegisterUser, { data, isLoading, error }] =
    useRegisterUserMutation<any>();

  const navigate = useNavigate();

  /* handle register user */
  const handleRegisterUser = handleSubmit(async (data) => {
    if (data?.password !== data?.confirmPassword) {
      return cogoToast.warn("Password doesn't match");
    }
    try {
      const { confirmPassword, ...other } = data;
      await RegisterUser(other);
    } catch (err) {
      console.log(err);
    }
  });

  useEffect(() => {
    if (data) {
      cogoToast.success(
        "Yah! Registration successfully done. check email for verification."
      );
      navigate("/login");
    }
    if (error) {
      const { data } = error;
      cogoToast.error(
        data?.message || "Something went wrong. Try again later."
      );
    }
  }, [data, error, navigate]);

  return (
    <div className="flex h-screen justify-center items-center mt-20 font-grotesk">
      <div>
        <div className="sm:w-86 lg:w-96 border-2 p-7 rounded">
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-5">Create an account</h2>

            <form onSubmit={handleRegisterUser}>
              <div className="form-control w-full max-w-xs rounded">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="input max-w-xs 2xl:p-2 p-2 my-1 mt-2 rounded outline-none w-full bg-[#F2F2F2]"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500 text-sm">
                      {(errors?.name as any).message || "Name is Required"}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs mt-4 rounded">
                <label className="label">
                  <span className="label-text ">Username or Email</span>
                </label>
                <input
                  type="email"
                  placeholder=""
                  className="input max-w-xs 2xl:p-2 p-2 my-1 mt-2 rounded outline-none w-full bg-[#F2F2F2]"
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
                    <span className="label-text-alt text-red-500">
                      {(errors?.email as any)?.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {(errors?.email as any)?.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs mt-3 rounded">
                <label className="label">
                  <span className="label-text">password</span>
                </label>
                <input
                  type="password"
                  placeholder=""
                  className="input max-w-xs 2xl:p-2 p-2 my-1 mt-2 rounded outline-none w-full bg-[#F2F2F2]"
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
                    <span className="label-text-alt text-red-500">
                      {(errors?.password as any)?.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {(errors?.password as any)?.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs mt-3">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder=""
                  className="input max-w-xs 2xl:p-2 p-2 my-1 rounded outline-none w-full bg-[#F2F2F2]"
                  {...register("confirmPassword", {
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
                  {errors.confirmPassword?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {(errors?.confirmPassword as any)?.message}
                    </span>
                  )}
                  {errors.confirmPassword?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {(errors?.confirmPassword as any)?.message}
                    </span>
                  )}
                </label>
              </div>

              <div className=" p-2 mt-5 rounded">
                {isLoading ? (
                  <button
                    disabled
                    className="text-white font-bold text-center w-full cursor-not-allowed opacity-75 flex items-center justify-center gap-2 bg-orange-500 p-2 rounded-md"
                  >
                    <span className="w-5 h-5 rounded-full border-2 border-t-gray-400 block animate-spin"></span>
                    <span>Creating account...</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="text-white font-bold text-center w-full bg-orange-500 p-2 rounded-md"
                  >
                    Create an account
                  </button>
                )}
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
