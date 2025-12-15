import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="absolute inset-0 bg-[url('./assets/JesusOnDonkeyPic.jpg')] bg-cover bg-center bg-black/50 bg-blend-overlay">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hero-church.jpg')" }}
      >
        <div  />

        <div className="relative z-10 text-center text-white max-w-2xl px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Church</h1>
          <p className="text-lg mb-6">
            A community of faith, hope, and love. Join us this Sunday!
          </p>

          <Link
            to="/events"
            className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400"
          >
            Upcoming Events
          </Link>
        </div>
      </div>

      {/* Ministries Preview */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded-md">
            <h3 className="font-bold text-xl">Sunday School</h3>
            <p className="text-gray-600">Empowering the next generation.</p>
          </div>

          <div className="bg-white p-6 shadow rounded-md">
            <h3 className="font-bold text-xl">Kids</h3>
            <p className="text-gray-600">Our future</p>
          </div>

          <div className="bg-white p-6 shadow rounded-md">
            <h3 className="font-bold text-xl">Community Outreach</h3>
            <p className="text-gray-600">Serving our community with love.</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.facebook.com/StMichaelEritreanOrthodoxChurch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold"
          >
            View other activities →
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
