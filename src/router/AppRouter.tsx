import { Routes, Route } from "react-router-dom";

// Public Pages
import HomePage from "../pages/public/HomePage";
import ContactPage from "../pages/public/ContactPage";
import AboutPage from "../pages/public/AboutPage";
import EventsPage from "../pages/public/EventsPage";
//import EventDetailPage from "../pages/public/EventDetailPage";

// import MinistriesPage from "../pages/public/MinistriesPage";
// import MinistryDetailPage from "../pages/public/MinistryDetailPage";

import SermonPage from "../pages/public/SermonPage";

// Auth Pages
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ProfilePage from "../pages/auth/ProfilePage";
import EditProfilePage from "../pages/auth/EditProfilePage";


// Admin Pages
// import AdminDashboard from "../pages/admin/AdminDashboard";
// import AdminMinistryList from "../pages/admin/ministries/AdminMinistryList";
// import AdminCreateMinistry from "../pages/admin/ministries/AdminCreateMinistry";
// import AdminEditMinistry from "../pages/admin/ministries/AdminEditMinistry";

// import AdminEventList from "../pages/admin/events/AdminEventList";
// import AdminCreateEvent from "../pages/admin/events/AdminCreateEvent";
// import AdminEditEvent from "../pages/admin/events/AdminEditEvent";

// import AdminSermonList from "../pages/admin/sermons/AdminSermonList";
// import AdminCreateSermon from "../pages/admin/sermons/AdminCreateSermon";
// import AdminEditSermon from "../pages/admin/sermons/AdminEditSermon";
import AdminProfilePage from "../pages/admin/AdminProfilePage";

// Layout Components
import Navbar from "../components/NavBar";
import EventDetailPage from "../pages/public/EventDetailPage";
import Layout from "../components/Layout";
// import Footer from "../components/Footer";
//import AuthenticatedRoute from "../components/AuthenticatedRoute";

export default function AppRouter() {
  return (
    <>
      <Navbar />

      <div className="pt-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {" "}
        {/* Prevent navbar overlap */}
         <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />

          {/* <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/ministries/:id" element={<MinistryDetailPage />} />*/}

          <Route path="/sermons" element={<SermonPage />} />

          <Route path="/contact" element={<ContactPage />} />

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Admin (protected) */}
          {/* <Route
            path="/admin"
            element={
              <AuthenticatedRoute>
                <AdminDashboard />
              </AuthenticatedRoute>
            }
          /> */}

          {/* Ministries CRUD */}
          {/* <Route
            path="/admin/ministries"
            element={
              <AuthenticatedRoute>
                <AdminMinistryList />
              </AuthenticatedRoute>
            }
          /> */}
          {/* <Route
            path="/admin/ministries/create"
            element={
              <AuthenticatedRoute>
                <AdminCreateMinistry />
              </AuthenticatedRoute>
            }
          /> */}
          {/* <Route
            path="/admin/ministries/:id/edit"
            element={
              <AuthenticatedRoute>
                <AdminEditMinistry />
              </AuthenticatedRoute>
            }
          /> */}

          {/* Events CRUD */}
          {/* <Route
            path="/admin/events"
            element={
              <AuthenticatedRoute>
                <AdminEventList />
              </AuthenticatedRoute>
            }
          /> */}
          {/* <Route
            path="/admin/events/create"
            element={
              <AuthenticatedRoute>
                <AdminCreateEvent />
              </AuthenticatedRoute>
            }
          /> */}
          {/* <Route
            path="/admin/events/:id/edit"
            element={
              <AuthenticatedRoute>
                <AdminEditEvent />
              </AuthenticatedRoute>
            }
          /> */}

          {/* Sermons CRUD */}
          {/* <Route
            path="/admin/sermons"
            element={
              <AuthenticatedRoute>
                <AdminSermonList />
              </AuthenticatedRoute>
            }
          /> */}
          {/* <Route
            path="/admin/sermons/create"
            element={
              <AuthenticatedRoute>
                <AdminCreateSermon />
              </AuthenticatedRoute>
            }
          /> */}
          {/* <Route
            path="/admin/sermons/:id/edit"
            element={
              <AuthenticatedRoute>
                <AdminEditSermon />
              </AuthenticatedRoute>
            }
          /> */}
          <Route path="/profile" element={<ProfilePage />} />
         <Route path="/admin/profile" element={<AdminProfilePage />} />
          <Route path="/profile/edit" element={<EditProfilePage />} /> 
        </Routes>
        </Layout>
      </div>

      {/* <Footer /> */}
    </>
  );
}
