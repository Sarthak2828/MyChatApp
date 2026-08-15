// import { Link } from "react-router-dom";
// import { useAuth } from "../store/Auth.store";
// import { LogOut, MessageSquare, Settings, User } from "lucide-react";

// const MyNavbar = () => {
//   const { logout, authUser } = useAuth();

//   return (
//     <header
//       className=" border-base-300 fixed w-full top-0 z-40
//      bg-transparent "
//     >
//       <div className="container mx-auto px-1 h-16">
//         <div className="flex items-center justify-between h-full">
//           <div className="flex items-center gap-8 border-2 p-1 rounded-xl pr-2 btn-primary ">
//             <Link
//               to="/"
//               className="flex items-center gap-2.5 hover:opacity-80 transition-all"
//             >
//               <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
//                 <MessageSquare className="w-5 h-5 text-primary" />
//               </div>
//               <h1 className="text-lg font-bold">Chat Application</h1>
//             </Link>
//           </div>

//           <div className="flex items-center gap-2">
//             <Link
//               to={"/setting"}
//               className={`
//               btn btn-sm gap-2 transition-colors

//               `}
//             >
//               <Settings className="w-4 h-4" />
//               <span className="hidden sm:inline">Settings</span>
//             </Link>

//             {authUser && (
//               <>
//                 <Link to={"/profile"} className={`btn btn-sm gap-2`}>
//                   <User className="size-5" />
//                   <span className="hidden sm:inline">Profile</span>
//                 </Link>

//                 <button className="flex gap-2 items-center" onClick={logout}>
//                   <LogOut className="size-5" />
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default MyNavbar;

// import { Link } from "react-router-dom";
// import { useAuth } from "../store/Auth.store";
// import { LogOut, MessageSquare, Settings, User } from "lucide-react";

// const MyNavbar = () => {
//   const { logout, authUser } = useAuth();

//   return (
//     <header
//       className="bg-base-100 fixed w-full top-0 z-40 
//     bg-transparent"
//     >
//       <div className="container mx-auto px-4 h-16">
//         <div className="flex items-center justify-between h-full">
//           <div className="flex items-center gap-8 border-2 p-1 rounded-xl pr-2 btn-primary ">
//             <Link
//               to="/"
//               className="flex items-center gap-2.5 hover:opacity-80 transition-all"
//             >
//               <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
//                 <MessageSquare className="w-5 h-5 text-primary" />
//               </div>
//               <h1 className="text-lg font-bold">Chat Application</h1>
//             </Link>
//           </div>

//           <div className="flex items-center gap-2">
//             <Link
//               to={"/setting"}
//               className={`
//               btn btn-sm gap-2 transition-colors
              
//               `}
//             >
//               <Settings className="w-4 h-4" />
//               <span className="hidden sm:inline">Settings</span>
//             </Link>

//             {authUser && (
//               <>
//                 <Link to={"/profile"} className={`btn btn-sm gap-2`}>
//                   <User className="size-5" />
//                   <span className="hidden sm:inline">Profile</span>
//                 </Link>

//                 <button className="flex gap-2 items-center" onClick={logout}>
//                   <LogOut className="size-5" />
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default MyNavbar;

import { Link } from "react-router-dom";
import { useAuth } from "../store/Auth.store";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const MyNavbar = () => {
  const { logout, authUser } = useAuth();

  return (
    <header className="bg-base-100 fixed w-full top-0 z-40 shadow-sm">
      <nav className="max-w-full px-2 sm:px-4 h-16 flex items-center justify-between">
        {/* Logo Section - always left */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-all"
          >
            <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg text-primary hidden xs:inline">Chat Application</span>
          </Link>
        </div>

        {/* Responsive Menu Section */}
        <div className="flex items-center gap-2">
          <Link
            to="/setting"
            className="btn btn-sm gap-2 transition-colors"
          >
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link to="/profile" className="btn btn-sm gap-2">
                <User className="size-5" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <button className="flex gap-2 items-center btn btn-sm" onClick={logout}>
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default MyNavbar;

