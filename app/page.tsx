import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Fitness Friends</h1>
        <div className="space-x-4">
          <Link href="/login" className="text-blue-600 hover:text-blue-800">
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      <div className="text-center py-12">
        <h2 className="text-4xl font-bold mb-4">Track Your Fitness Journey</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join Fitness Friends to track your workouts, nutrition, and progress
          with friends
        </p>
        <Link
          href="/signup"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Track Workouts</h3>
          <p className="text-gray-600">
            Log your exercises, sets, and reps to monitor your progress
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Nutrition Tracking</h3>
          <p className="text-gray-600">
            Monitor your daily calories and macronutrients
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Social Features</h3>
          <p className="text-gray-600">
            Connect with friends and share your fitness journey
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Join Online Classes</h3>
          <p className="text-gray-600">
            Create or participate in online fitness classes with others
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Discover New Recipes</h3>
          <p className="text-gray-600">
            Post your favorite recipes and discover new ones from other users
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Join Fitness Groups</h3>
          <p className="text-gray-600">
            Discover and join groups with similar fitness goals
          </p>
        </div>
      </div>
    </div>
  );
}
