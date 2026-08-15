import React, { useEffect, useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { useAuth } from "../store/Auth.store";
import { Comment } from "react-loader-spinner";
import avatar from "../images/avatar.png";
import bgimage from "../images/bg-profile.svg";

const Profile = () => {
  const {
    authUser,
    checkAuth,
    isUpdatingProfile,
    updateProfile,
    isCheckingAuth,
  } = useAuth();
  const [image, setImage] = useState(null);
  useEffect(() => {
    checkAuth();
    console.log(authUser);
  }, [authUser, checkAuth]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setImage(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <>
      {isCheckingAuth ? (
        <div className="min-h-screen flex items-center justify-center  text-white">
          <div className=" bg-accent p-6 rounded-lg shadow-md w-1/2 border-zinc border flex items-center justify-center ">
            <Comment
              visible={true}
              height="80"
              width="80"
              ariaLabel="comment-loading"
              wrapperStyle={{}}
              wrapperClass="comment-wrapper"
            />
          </div>
        </div>
      ) : (
        // <div
        //   className="min-h-screen flex items-center justify-center  text-white bg-profile-light"
        //   // style={{ backgroundImage: `url(${bgimage})` }}
        // >
        //   <div className=" bg-profile-dark p-6 rounded-lg shadow-md w-1/3   ">
        //     <h2 className="text-5xl font-extrabold text-center mb-2 text-secondary-dark ">
        //       PROFILE
        //     </h2>
        //     <p className="text-sm text-secondary-dark text-center mb-4">
        //       Your profile information
        //     </p>

        //     <div className="flex flex-col items-center">
        //       <div className="relative">
        //         <img
        //           src={image || authUser?.profilePic || avatar}
        //           alt="Profile"
        //           className="size-32 rounded-full object-cover border-4 "
        //         />

        //         <label
        //           htmlFor="imageUpload"
        //           className="absolute bottom-1 right-1 bg-slate-900 p-2 rounded-full cursor-pointer hover:bg-orange-950 transition "
        //         >
        //           <FaCameraRetro />
        //         </label>
        //         <input
        //           type="file"
        //           id="imageUpload"
        //           className="hidden"
        //           accept="image/*"
        //           onChange={handleImageUpload}
        //         />
        //       </div>
        //       <p className="text-sm text-secondary-dark mt-2">
        //         {isUpdatingProfile
        //           ? "Uploading..."
        //           : "Click the camera button to upload image"}
        //       </p>
        //     </div>

        //     <div className="mt-6">
        //       <label className="block text-sm font-medium text-secondary-dark mb-1">
        //         Full Name
        //       </label>
        //       <div className="relative">
        //         <input
        //           type="text"
        //           className="w-full bg-gray-700 text-secondary-dark border border-gray-600 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring focus:ring-blue-500"
        //           placeholder={authUser?.name}
        //           disabled
        //         />
        //         <span className="absolute top-2.5 left-3 text-secondary-dark">
        //           <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             fill="none"
        //             viewBox="0 0 24 24"
        //             strokeWidth={2}
        //             stroke="currentColor"
        //             className="w-5 h-5"
        //           >
        //             <path
        //               strokeLinecap="round"
        //               strokeLinejoin="round"
        //               d="M16.5 5.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM12 22a9.003 9.003 0 01-7.487-3.688c.337-.4 2.642-1.812 7.487-1.812 4.846 0 7.151 1.412 7.487 1.812A9.003 9.003 0 0112 22z"
        //             />
        //           </svg>
        //         </span>
        //       </div>
        //     </div>

        //     <div className="mt-4">
        //       <label className="block text-sm font-medium text-secondary-dark mb-1">
        //         Email Address
        //       </label>
        //       <div className="relative">
        //         <input
        //           type="email"
        //           className="w-full bg-gray-700 text-secondary-dark border border-gray-600 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring focus:ring-blue-500"
        //           placeholder={authUser?.email}
        //           disabled
        //         />
        //         <span className="absolute top-2.5 left-3 text-secondary-dark">
        //           <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             fill="none"
        //             viewBox="0 0 24 24"
        //             strokeWidth={2}
        //             stroke="currentColor"
        //             className="w-5 h-5"
        //           >
        //             <path
        //               strokeLinecap="round"
        //               strokeLinejoin="round"
        //               d="M16.5 3.5h-9a2 2 0 00-2 2v1.708c0 1.1.9 2 2 2h9a2 2 0 002-2V5.5a2 2 0 00-2-2z"
        //             />
        //           </svg>
        //         </span>
        //       </div>
        //     </div>

        //     <div className="mt-6 border-t border-gray-600 pt-4">
        //       <div className="flex justify-between text-sm text-secondary-dark mb-2">
        //         <span>Member Since</span>

        //         <span>{authUser?.createdAt.split("T")[0]}</span>
        //       </div>
        //       <div className="flex justify-between text-sm text-secondary-dark">
        //         <span>Account Status</span>
        //         <span className="text-green-500">Active</span>
        //       </div>
        //       <div className="flex justify-between text-sm text-secondary-dark"></div>
        //     </div>
        //   </div>
        // </div>
        <div className="min-h-screen flex items-center justify-center bg-base-200 text-base-content">
          <div className="card w-96 bg-base-100 shadow-xl p-6 rounded-lg">
            <h2 className="text-5xl font-extrabold text-center mb-2 ">
              PROFILE
            </h2>
            <p className="text-center text-sm text-secondary mb-4">
              Your profile information
            </p>

            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32">
                <img
                  src={image || authUser?.profilePic || avatar}
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover border-4 border-primary"
                />

                <label
                  htmlFor="imageUpload"
                  className="absolute bottom-1 right-1 bg-base-100 p-2 rounded-full cursor-pointer hover:bg-accent-focus transition"
                >
                  <FaCameraRetro />
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              <p className="text-sm text-secondary mt-2">
                {isUpdatingProfile
                  ? "Uploading..."
                  : "Click the camera button to upload image"}
              </p>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-secondary mb-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="input input-bordered w-full bg-base-200 text-secondary"
                  placeholder={authUser?.name}
                  disabled
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-secondary mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="input input-bordered w-full bg-base-200 text-secondary"
                  placeholder={authUser?.email}
                  disabled
                />
              </div>
            </div>

            <div className="mt-6 border-t border-base-300 pt-4">
              <div className="flex justify-between text-sm text-secondary mb-2">
                <span>Member Since</span>
                <span>{authUser?.createdAt.split("T")[0]}</span>
              </div>
              <div className="flex justify-between text-sm text-secondary">
                <span>Account Status</span>
                <span className="text-success">Active</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;


