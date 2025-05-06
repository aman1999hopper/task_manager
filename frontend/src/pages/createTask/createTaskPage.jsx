import { useState } from "react";
import { useSelector } from "react-redux";

const CreateTaskPage = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const members = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
    { id: 4, name: "Sam", email: "sam@example.com" },
    { id: 5, name: "Rohit", email: "rohit@example.com" },
  ];

  const handleMemberToggle = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  return (
    <div
      className={`p-4 transition-all duration-300 ${
        isSidebarOpen ? "pl-64" : "pl-24"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Create Tasks</h1>

      {/* Task Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Task Title
        </label>
        <input
          type="text"
          placeholder="Task Title"
          className="border border-gray-300 rounded-lg p-2 w-2/3"
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <input
          type="text"
          placeholder="Description"
          className="border border-gray-300 rounded-lg p-2 h-10 w-2/3"
        />
      </div>

      {/* Priority, Due Date, Assign To - Flex Row */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Priority */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Priority
          </label>
          <select className="border border-gray-300 rounded-lg p-2 w-full">
            <option value="">Select priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Due Date */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Due Date
          </label>
          <input
            type="date"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>

        {/* Assign To */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Assign To
          </label>
          <div className="flex items-center gap-4">
            <button
              className="border border-gray-300 rounded-lg p-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
              onClick={() => setIsModalOpen(true)}
            >
              Add Member
            </button>

            {/* Avatar Icons */}
            <div className="flex gap-2">
              {selectedMembers.slice(0, 3).map((id) => {
                const member = members.find((m) => m.id === id);
                const initials = member?.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("");
                return (
                  <div
                    key={member.id}
                    className="w-8 h-8 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-sm font-semibold"
                    title={`${member.name} (${member.email})`}
                  >
                    {initials}
                  </div>
                );
              })}

              {/* Show the "+X" if there are more than 3 selected members */}
              {selectedMembers.length > 3 && (
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-800 flex items-center justify-center text-sm font-semibold">
                  +{selectedMembers.length - 3}
                </div>
              )}
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
                <h2 className="text-lg font-semibold mb-4">Select Members</h2>
                <ul className="space-y-2 max-h-60 overflow-y-auto">
                  {members.map((member) => (
                    <li key={member.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedMembers.includes(member.id)}
                        onChange={() => handleMemberToggle(member.id)}
                      />
                      <span>
                        {member.name} ({member.email})
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end mt-4 gap-2">
                  <button
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateTaskPage;
