import Link from "next/link";

const groupChats = [
  {
    id: 1,
    name: "Morning Warriors",
    description: "Start your day with motivation and accountability!",
    members: 24,
  },
  {
    id: 2,
    name: "Nutrition Gurus",
    description: "Share recipes and nutrition tips.",
    members: 18,
  },
  {
    id: 3,
    name: "Weekend Hikers",
    description: "Plan and share hiking adventures.",
    members: 32,
  },
  {
    id: 4,
    name: "Strength Squad",
    description: "Discuss strength training and progress.",
    members: 15,
  },
];

export default function GroupChatsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Groupchat Communities
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groupChats.map((chat) => (
          <div
            key={chat.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {chat.name}
              </h2>
              <p className="text-gray-600 mb-4">{chat.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-500">
                {chat.members} members
              </span>
              <Link
                href={`/groupchats/${chat.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
              >
                View Chat
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
