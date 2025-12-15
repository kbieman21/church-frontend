// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function AdminProfilePage() {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (!user || user.role !== "admin") {
//     return (
//       <div className="max-w-3xl mx-auto pt-20 px-6 text-center">
//         <h2 className="text-2xl font-semibold text-red-500">
//           Access Denied
//         </h2>
//         <p className="mt-2 text-gray-600">Admin privileges required.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto pt-24 px-6">
//       <h1 className="text-3xl font-bold mb-6">Admin Profile</h1>

//       <div className="bg-white shadow rounded-lg p-6 space-y-4">
//         <div>
//           <h2 className="text-gray-500 text-sm">Admin Name</h2>
//           <p className="text-lg font-semibold">{user.name}</p>
//         </div>

//         <div>
//           <h2 className="text-gray-500 text-sm">Email</h2>
//           <p className="text-lg">{user.email}</p>
//         </div>

//         <div>
//           <h2 className="text-gray-500 text-sm">Role</h2>
//           <p className="text-lg capitalize">{user.role}</p>
//         </div>
//       </div>

//       {/* QUICK ADMIN LINKS */}
//       <div className="mt-8">
//         <h2 className="text-xl font-semibold mb-4">Admin Controls</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <button
//             onClick={() => navigate("/admin/ministries")}
//             className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
//           >
//             Manage Ministries
//           </button>

//           <button
//             onClick={() => navigate("/admin/events")}
//             className="bg-green-600 text-white py-3 rounded hover:bg-green-700"
//           >
//             Manage Events
//           </button>

//           <button
//             onClick={() => navigate("/admin/sermons")}
//             className="bg-purple-600 text-white py-3 rounded hover:bg-purple-700"
//           >
//             Manage Sermons
//           </button>

//           <button
//             onClick={() => navigate("/profile/edit")}
//             className="bg-gray-700 text-white py-3 rounded hover:bg-gray-800"
//           >
//             Edit My Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function AdminProfilePage() {
    return(
        <>
        <h1> IN THE FUTURE ADMINSTRATIVE WORK WILL DISPLAY HERE </h1></>
    )
}
