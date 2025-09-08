import { useSelector } from "react-redux";
import { useState } from "react";
import { FaUserPlus, FaUserEdit, FaTrash } from "react-icons/fa";

const initialTeamMembers = [
  {
    id: 1,
    name: "Aman Sharma",
    role: "Admin",
    email: "aman@example.com",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Developer",
    email: "priya@example.com",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    role: "Designer",
    email: "ravi@example.com",
    status: "Inactive",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const TeamMembersPage = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "Developer",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=10",
  });

  const handleAddMember = () => {
    if (!newMember.name || !newMember.email) return;
    setTeamMembers([
      ...teamMembers,
      { ...newMember, id: teamMembers.length + 1 },
    ]);
    setNewMember({
      name: "",
      email: "",
      role: "Developer",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=10",
    });
    setIsModalOpen(false);
  };

  return (
    <div
      className={`p-4 transition-all duration-300 ${
        isSidebarOpen ? "pl-64" : "pl-24"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Team Members</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          <FaUserPlus /> Add Member
        </button>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-16 h-16 rounded-full"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-sm text-gray-600">{member.email}</p>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  member.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {member.status}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="text-blue-500 hover:text-blue-700">
                <FaUserEdit />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Member Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Add New Member</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={newMember.name}
                onChange={(e) =>
                  setNewMember({ ...newMember, name: e.target.value })
                }
                className="w-full border p-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                value={newMember.email}
                onChange={(e) =>
                  setNewMember({ ...newMember, email: e.target.value })
                }
                className="w-full border p-2 rounded-md"
              />
              <select
                value={newMember.role}
                onChange={(e) =>
                  setNewMember({ ...newMember, role: e.target.value })
                }
                className="w-full border p-2 rounded-md"
              >
                <option>Admin</option>
                <option>Developer</option>
                <option>Designer</option>
                <option>Tester</option>
              </select>
              <select
                value={newMember.status}
                onChange={(e) =>
                  setNewMember({ ...newMember, status: e.target.value })
                }
                className="w-full border p-2 rounded-md"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMember}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Add Member
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMembersPage;
