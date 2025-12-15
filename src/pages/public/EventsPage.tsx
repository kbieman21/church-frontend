// import { useEffect, useState } from "react";
// import  {apiClient} from "../../clients/api"
// import type {Event} from "../../types/Event"

function EventsPage() {
  // const [events, setEvents] = useState<Event[]>([]);

  // useEffect(() => {
  //   apiClient.get("/api/events").then((res) => {
  //     setEvents(res.data);
  //   });
  // }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>

      {/* <div className="space-y-6">
        {events.map((event) => (
          <Link
            key={event._id}
            to={`/events/${event._id}`}
            className="block bg-white shadow p-6 rounded hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold">{event.title}</h2>
            <p className="text-gray-700">{event.description}</p>
            <p className="text-sm mt-2 text-gray-500">
              {new Date(event.date).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div> */}
    </div>
  );
}

export default EventsPage;
