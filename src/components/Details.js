import { useParams } from "react-router-dom";

function Details() {
  // Get the ID from the URL
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-1/2 text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Todo Details</h1>
        <p className="text-xl text-gray-700">Task ID: <span className="font-semibold">{id}</span></p>
      </div>
    </div>
  );
}

export default Details;
