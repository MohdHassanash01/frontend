'use client';
import React from 'react'
import axios, { Axios } from 'axios';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const page = () => {

    // const router = useRouter();

    const SignupForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        onSubmit: (values, { resetForm, setSubmitting }) => {

            axios.post('http://localhost:5000/user/add', values)
                .then((response) => {
                    console.log(response.status);
                    // router.push('/');
                    resetForm()
                }).catch((err) => {
                    console.log(err);

                    console.log(err.response?.data);
                    setSubmitting(false)

                });

        },
    })


    return (
        <div className='w-full min-h-screen  '>
            <section class="bg-slate-800 dark:bg-gray-900 ">
                <div class=" flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen pt-40 ">

                    <div class="w-full backdrop-blur-md bg-white/20 rounded-xl shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700   mt-2">
                        <div class="p-6 space-y-3 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-100 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form
                                onSubmit={SignupForm.handleSubmit}
                                class="space-y-4 md:space-y-4" action="#">

                                <div>
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name *</label>

                                    <input
                                        onChange={SignupForm.handleChange}
                                        value={SignupForm.values.name}
                                        type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required="" />
                                </div>



                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>

                                    <input
                                        onChange={SignupForm.handleChange}
                                        value={SignupForm.values.email}
                                        type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>

                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input
                                        onChange={SignupForm.handleChange}
                                        value={SignupForm.values.password}
                                        type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 " />
                                </div>

                                <div>
                                    <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input
                                        onChange={SignupForm.handleChange}
                                        value={SignupForm.values.confirmPassword}
                                        type="confirm-password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>

                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" class="w-full  bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center rounded-[10px] text-gray-50">Create an account</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link href="/login" class="font-medium text-white hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default page


