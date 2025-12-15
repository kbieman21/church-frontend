import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
     const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="max-w-3xl mx-auto pt-20 px-6 text-center">
        <h2 className="text-2xl font-semibold">No Profile Found</h2>
        <p className="text-gray-600 mt-2">
          Please log in to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pt-24 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        {/* NAME */}
        <div>
          <h2 className="text-sm text-gray-500">Full Name</h2>
          <p className="text-lg font-medium">{user.username}</p>
        </div>

        {/* EMAIL */}
        <div>
          <h2 className="text-sm text-gray-500">Email Address</h2>
          <p className="text-lg font-medium">{user.email}</p>
        </div>

        {/* ROLE */}
        <div>
          <h2 className="text-sm text-gray-500">Role</h2>
          <p className="text-lg font-medium capitalize">{user.role.member}</p>
        </div>

        {/* JOINED */}
        {user.createdAt && (
          <div>
            <h2 className="text-sm text-gray-500">Member Since</h2>
            <p className="text-lg font-medium">
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        )}
        <button
          onClick={() => navigate("/profile/edit")}
          className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}
