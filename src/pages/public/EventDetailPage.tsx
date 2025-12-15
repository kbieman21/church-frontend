import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../../clients/api"
import type { Event } from "../../types/Event";

function EventDetailPage() {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    apiClient.get(`/api/events/${id}`).then((res) => {
      setEvent(res.data);
    });
  }, [id]);

  if (!event) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold">{event.title}</h1>
      <p className="text-gray-600 mt-2">{event.description}</p>
      <p className="mt-4 text-sm text-gray-800 font-semibold">
        📅 {new Date(event.date).toLocaleDateString()}
      </p>
      <p className="mt-2">📍 {event.location}</p>

      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="mt-6 rounded shadow"
        />
      )}
    </div>
  );
}

export default EventDetailPage;
