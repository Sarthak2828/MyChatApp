// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { Carousel } from "flowbite-react";
// import image1 from "../images/use-a-space-for-a-short-motivational-text-abo_g4kHqV4.jpg";
// import image2 from "../images/a-person-logging-in-pc-more-abstract-and-focu_GUzZvBu.jpg";
// import image3 from "../images/36da7e49-cf6f-4980-addf-154671b5a66d.jpeg";
// import image4 from "../images/75e746ed-60dd-479a-b9be-f2f454fc2bea.jpeg";
// import { useNavigate } from "react-router-dom";

// import toast, { Toaster } from "react-hot-toast";

// import { axiosInstance } from "../lib/axios";
// import { useAuth } from "../store/Auth.store";

// const Register = () => {
//   const navigate = useNavigate();
//   const [formData, setFormdata] = useState({
//     email: "",
//     name: "",
//     password: "",
//   });

//   const { register } = useAuth();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     //using auth store
//     register(formData);
//     setTimeout(() => {
//       navigate("/signup");
//     }, 3000);

//     // try {

//     //   const data = await axiosInstance.post(`/api/v1/auth/register`, {
//     //     name,
//     //     email,
//     //     password,
//     //   });
//     //   console.log(data.data);
//     //   if (data.data.success) {
//     //     toast.success("User Created Successfully");
//     //   } else {
//     //     toast.error(data.data.message);
//     //     console.log(data.message);
//     //   }
//     //   setTimeout(() => {
//     //     navigate("/signup");
//     //   }, 3000);
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   };
//   return (
//     <div className="bg-black text-white min-h-screen flex flex-col md:flex-row">
//       <Toaster
//         toastOptions={{
//           duration: 5000,

//           style: {
//             background: "#363636",
//             color: "#fff",
//           },
//         }}
//       />
//       {/* Left Section */}
//       <div className="w-full md:w-3/4 p-1 bg-black ">
//         {/* carousel */}
//         <Carousel
//           className="rounded-lg"
//           indicators={true} // Enables indicators
//           leftControl=" " // Hides left navigation button
//           rightControl=" " // Hides right navigation button
//           slideInterval={2000}
//         >
//           <img src={image1} alt="..." className=" object-cover" />
//           <img src={image2} alt="..." className=" object-cover" />
//           <img src={image3} alt="..." className=" object-cover" />
//           <img src={image4} alt="..." className=" object-cover" />
//         </Carousel>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md bg-transparent p-6 rounded-lg shadow-lg">
//           <h1 className=" text-accent text-4xl font-bold mb-4 text-center">
//             Create an account
//           </h1>
//           <p className="text-accent mb-6 text-center">
//             Join the Conversation: Sign Up and Start Chatting!
//           </p>
//           {/* Form */}
//           <form>
//             <div className="mb-4">
//               <label
//                 htmlFor="first-name"
//                 className="block text-sm font-medium ml-3 text-base/100"
//               >
//                 Full Name
//               </label>
//               <input
//                 id="first-name"
//                 type="text"
//                 onChange={(e) =>
//                   setFormdata({ ...formData, name: e.target.value })
//                 }
//                 className="pl-4 py-2 mt-1 block w-full bg-base text-gray-200 border border-gray-700 rounded-full p-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium ml-3 text-gray-500"
//               >
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 onChange={(e) =>
//                   setFormdata({ ...formData, email: e.target.value })
//                 }
//                 className=" pl-4 py-2 mt-1 block w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-full p-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium ml-2 text-gray-500"
//               >
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 onChange={(e) =>
//                   setFormdata({ ...formData, password: e.target.value })
//                 }
//                 className="pl-4 py-2  mt-1 block w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-full p-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <button
//               // type="submit"
//               className="w-full bg-white text-black py-2 px-4 rounded-xl h-14 text-2xl  hover:bg-slate-200 transition"
//               onClick={handleSubmit}
//             >
//               Create Account
//             </button>
//           </form>
//           {/*
//           <div className="my-6 text-center text-gray-500">
//             <hr />
//             Or
//             <hr />
//           </div> */}
//           <div className="my-6 text-center text-gray-500 flex items-center">
//             <hr className="flex-grow border-t border-gray-400" />
//             <span className="mx-2">Or</span>
//             <hr className="flex-grow border-t border-gray-400" />
//           </div>

//           {/* Social Login */}
//           <div className="flex justify-between gap-2">
//             <button
//               onClick={handleSubmit}
//               className=" border-white border-2 bg-transparent py-2 px-4 rounded-full w-1/2 hover:bg-gray-700 transition flex items-center justify-center space-x-2"
//             >
//               <span>Google</span>
//               <FcGoogle />
//             </button>
//             <button className="border-white border-2 bg-transparent py-2 px-4 rounded-full w-1/2 hover:bg-gray-700 transition flex items-center justify-center space-x-2">
//               <span>Apple ID</span>
//               <FaApple />
//             </button>
//           </div>
//           {/* Already Registered Section */}
//           <p className="text-balance text-gray-600 mt-4 text-center">
//             Already registered?{" "}
//             <span
//               href="/login"
//               className="text-blue-600 hover:underline"
//               onClick={() => navigate("/signup")}
//             >
//               Login
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Carousel } from "flowbite-react";
import image1 from "../images/use-a-space-for-a-short-motivational-text-abo_g4kHqV4.jpg";
import image2 from "../images/a-person-logging-in-pc-more-abstract-and-focu_GUzZvBu.jpg";
import image3 from "../images/36da7e49-cf6f-4980-addf-154671b5a66d.jpeg";
import image4 from "../images/75e746ed-60dd-479a-b9be-f2f454fc2bea.jpeg";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

import { axiosInstance } from "../lib/axios";
import { useAuth } from "../store/Auth.store";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    password: "",
  });

  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    register(formData);
    // setTimeout(() => {
    //   navigate("/signup");
    // }, 3000);
  };

  return (
    <div className="bg-base-200 text-base-content min-h-screen flex flex-col md:flex-row">
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />

      {/* Left Section */}
      <div className="w-full md:w-3/4 p-1">
        <Carousel
          className="rounded-lg"
          indicators={true}
          leftControl=" "
          rightControl=" "
          slideInterval={2000}
        >
          <img src={image1} alt="..." className="object-cover" />
          <img src={image2} alt="..." className="object-cover" />
          <img src={image3} alt="..." className="object-cover" />
          <img src={image4} alt="..." className="object-cover" />
        </Carousel>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 mt-3">
        <div className="w-full max-w-md  p-6 rounded-lg ">
          <h1 className="text-primary text-4xl font-bold mb-4 text-center">
            Create an account
          </h1>
          <p className="text-secondary mb-6 text-center">
            Join the Conversation: Sign Up and Start Chatting!
          </p>

          {/* Form */}
          <form>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                onChange={(e) =>
                  setFormdata({ ...formData, name: e.target.value })
                }
                className="input input-bordered w-full rounded-2xl"
              />
            </div>

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                onChange={(e) =>
                  setFormdata({ ...formData, email: e.target.value })
                }
                className="input input-bordered w-full rounded-2xl"
              />
            </div>

            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                onChange={(e) =>
                  setFormdata({ ...formData, password: e.target.value })
                }
                className="input input-bordered w-full rounded-2xl"
              />
            </div>

            <button
              className="btn btn-primary w-full text-lg"
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </form>

          <div className="my-6 text-center flex items-center">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="mx-2">Or</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <button className="btn btn-outline flex-1 flex items-center gap-2">
              <FcGoogle />
              Google
            </button>
            <button className="btn btn-outline flex-1 flex items-center gap-2">
              <FaApple />
              Apple ID
            </button>
          </div>

          {/* Already Registered */}
          <p className="mt-4 text-center">
            Already registered?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;


