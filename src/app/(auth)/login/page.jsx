"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";





export default function LoginPage() {



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (userInfo) => {
        const { data, error } = await authClient.signIn.email({
            email: userInfo.email,
            password: userInfo.password,
            callbackURL: "/"
        });
        if (error) {
            alert(`failed ${error.message}`)
        }
        if (data.user) {
            alert('user Login successfully')
        }

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Login your account
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="input input-bordered w-full"
                                {...register("email", { required: true })}
                            />
                            {errors.email?.type === 'required' && <span className="text-red-500">email is required</span>}
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                {...register("password", { required: true, minLength: 4 })}
                            />
                            {errors.password?.type === 'required' && <span className="text-red-500">Password is Required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be at last 4 word</span>}
                        </div>

                        {/* Button */}
                        <div className="form-control mt-4">
                            <button className="btn btn-neutral w-full">
                                Login
                            </button>
                        </div>
                    </form>

                    {/* Register link */}
                    <p className="text-center text-sm mt-4">
                        Don’t Have An Account?{" "}
                        <Link href="/signup" className="text-error font-medium">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}