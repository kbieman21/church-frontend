// import { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function EditProfilePage() {
//   const { user, updateProfile } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: user?.name || "",
//     email: user?.email || "",
//     password: "",
//   });

//   function handleChange(e: any) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(e: any) {
//     e.preventDefault();

//     await updateProfile(form); // You will add backend API later

//     navigate("/profile");
//   }

//   return (
//     <div className="max-w-xl mx-auto pt-24 px-6">
//       <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 shadow rounded-lg space-y-4"
//       >
//         {/* NAME */}
//         <div>
//           <label className="block text-sm text-gray-600">Full Name</label>
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* EMAIL */}
//         <div>
//           <label className="block text-sm text-gray-600">Email</label>
//           <input
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* PASSWORD */}
//         <div>
//           <label className="block text-sm text-gray-600">
//             New Password (optional)
//           </label>
//           <input
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// }

export default function EditProfilePage() {
    return(
        <>
        <h1> IN THE FUTURE YOU CAN EDIT YOUR PROFILE IN THIS PAGE</h1></>
    )
}
