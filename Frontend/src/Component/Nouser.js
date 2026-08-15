import { MessageSquare } from "lucide-react";
import React from "react";
import { LuMessageCircle } from "react-icons/lu";

const Nouser = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-4 bg-base-100/50">
      <div className="max-w-sm sm:max-w-md text-center space-y-4 sm:space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-2 sm:mb-1">
          <div className="relative">
            <div
              className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl sm:rounded-2xl bg-accent flex items-center 
             justify-center animate-bounce"
            >
              <MessageSquare size={32} strokeWidth={2.25} />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl sm:text-4xl font-extrabold animate-typing overflow-hidden whitespace-nowrap border-r-4 sm:border-r-8">
          Welcome to Chat Application!
        </h2>
        <p className="text-sm sm:text-base text-base-content/60 sm:ml-0">
          Select a conversation from the sidebar to start chatting.
        </p>
      </div>
    </div>
  );
};

export default Nouser;


