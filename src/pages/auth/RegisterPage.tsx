// import { useState, useContext, type ChangeEvent } from "react";
// import { AuthContext } from "../context/AuthContext";

// function RegisterPage() {
//   const { register } = useContext(AuthContext); //i need to check for null before register so i did to my context export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

//   const [form, setForm] = useState({ username: "", email: "", password: "" });

//   const handleChange = (e:ChangeEvent<HTMLInputElement>) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => { //
//     e.preventDefault();
//     await register(form);  // Sends formData to backend
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div>
//       <h2 className="text-3xl mb-6 font-bold">Create an Account</h2>

//       <form className="w-80 space-y-4" onSubmit={handleSubmit}>
//         <input name="username" placeholder="Username" onChange={handleChange} required className="w-full p-3 border rounded"/>
//         <input name="email" placeholder="Email" onChange={handleChange} required className="w-full p-3 border rounded"/>
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full p-3 border rounded"/>

//         <button className="w-full p-3 bg-green-600 text-white rounded" type="submit">
//           Register
//         </button>
//       </form>
//       </div>
//     </div>
//   );
// }

// export default RegisterPage;

import { useState, useContext, type ChangeEvent, type FormEvent } from "react";
import AuthLayout from "./AuthLayout";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
   const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await register(form);
     navigate("/login");
  };

  
  return (
    <AuthLayout title="Create Account">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </AuthLayout>
  );
}
