"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = ({ children }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = (data) => {
    const { email, password } = data;
    reset();
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 ">
      <div className="bg-white min-w-md px-3 py-8 my-10">
        <h1 className="text-center font-bold text-3xl">Login your account</h1>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Email Address</legend>
            <input
              type="email"
              {...register("email", { required: "email field is required" })}
              className="input bg-slate-100 w-full"
              placeholder="Type your email address"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg ">Password</legend>
            <input
              type="password"
              {...register("password", {
                required: "password field is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className="input bg-slate-100 w-full"
              placeholder="Type your password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white mt-5 rounded-md">
            Login
          </button>
        </form>
        <p className="mt-5">
          dont have an account?{" "}
          <Link href={"/register"} className="text-red-500">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
