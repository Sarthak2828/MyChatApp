import React, { useEffect, useState } from "react";
import { useMessage } from "../store/Message.store.js";
import { useAuth } from "../store/Auth.store.js";
import avatar from "../images/avatar.png";
import SidebarSkeleton from "./Skeleton/SidebarSkeleton.js";

const Sidebar = () => {
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const { addUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useMessage();
  const { onlineUsers, authUser, checkAuth } = useAuth();
  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;
  const capitalizeFirstLetter = (str) => {
    if (!str) return ""; // Handle empty or undefined strings
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    addUsers();
    checkAuth();
  }, [addUsers, checkAuth]);

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className=" w-80   h-full bg-base-100 text-base-content border-r border-base-300 flex flex-col p-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <img
            src={authUser?.profilePic || avatar}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-green-500"
          />
          <span className="absolute bottom-1 right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-green-500"></span>
        </div>
        <h2 className="text-lg font-medium mt-3 select-none">
          {capitalizeFirstLetter(authUser?.name)}
        </h2>
        <p className="text-sm italic text-secondary mt-1 select-none text-justify">
          "Start a conversation, discover new insights"
        </p>
      </div>

      {/* Toggle Online Only */}
      <div className="flex items-center mb-4">
        <label className="cursor-pointer flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={showOnlineOnly}
            onChange={(e) => setShowOnlineOnly(e.target.checked)}
            className="checkbox checkbox-sm checkbox-accent"
          />
          <span>Show online only</span>
        </label>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent">
        <h3 className="text-sm text-secondary mb-3">Last chats</h3>
        <div className="space-y-2">
          {/* {filteredUsers.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedUser(contact)}
              className={`flex items-center p-3 rounded-lg transition hover:bg-accent hover:text-accent-content ${
                selectedUser?.id === contact.id
                  ? "bg-accent text-accent-content"
                  : ""
              }`}
            >
              <div className="relative">
                <img
                  src={contact.profilePic || avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover border border-accent"
                />
                {contact.online && (
                  <span className="absolute bottom-0 right-0 bg-accent w-3 h-3 rounded-full border-2 border-base-100"></span>
                )}
              </div>
              <div className="ml-3 min-w-0 flex-1">
                <h4
                  className="text-lg font-semibold truncate select-none"
                  style={{ cursor: "default" }}
                >
                  {contact.name}
                </h4>
                <p className="text-xs text-accent-content truncate">
                  {contact.message}
                </p>
              </div>
              <span className="text-xs text-secondary">{contact.time}</span>
            </div>
          ))} */}

          {filteredUsers.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`
              w-full p-3 flex items-center gap-3
              rounded-2xl
              hover:bg-accent transition-colors
              ${
                selectedUser?._id === user._id
                  ? "bg-accent ring-1 ring-base-300"
                  : ""
              }
            `}
            >
              <div className="relative mx-auto lg:mx-0">
                <img
                  src={user.profilePic || avatar}
                  alt={user.name}
                  className="size-12 object-cover rounded-full"
                />
                {onlineUsers.includes(user._id) && (
                  <span
                    className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-zinc-900"
                  />
                )}
              </div>

              {/* User info - only visible on larger screens */}
              <div className="hidden lg:block text-left min-w-0">
                <div className="font-medium truncate">
                  {capitalizeFirstLetter(user?.name)}
                </div>
                <div className="text-sm text-zinc-400">
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center text-secondary py-4">No users found</div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;


