import { useEffect, useState } from "react";
import { apiClient } from "../../clients/api"
import type { Sermon } from "../../types/Sermon";

function SermonsPage() {
  const [sermons, setSermons] = useState<Sermon[]>([]);

  useEffect(() => {
    apiClient.get("/api/sermons").then((res) => {
      setSermons(res.data);
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Sermons</h1>

      {/* <div className="space-y-6">
        {sermons.map((sermon) => (
          <div key={sermon._id} className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold">{sermon.title}</h2>
            <p className="text-gray-600">Pastor: {sermon.pastor}</p>
            <p className="text-sm mt-2 text-gray-500">
              {new Date(sermon.date).toLocaleDateString()}
            </p>

            {sermon.videoUrl && (
              <a
                href={sermon.videoUrl}
                className="text-blue-600 underline mt-2 inline-block"
                target="_blank"
              >
                Watch Video
              </a>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default SermonsPage;
