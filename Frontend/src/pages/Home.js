import React from "react";
import { useMessage } from "../store/Message.store.js";
import Nouser from "../Component/Nouser";

import Sidebar from "../Component/Sidebar.js";
import ChatContainer from "../Component/ChatContainer.js";

const Home = () => {
  const { selectedUser } = useMessage();
  return (
    <div className="h-screen bg-base-200 ">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />
            {selectedUser ? <ChatContainer /> : <Nouser />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


