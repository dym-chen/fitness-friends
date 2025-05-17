import Link from "next/link";

export const DashboardGrid = () => (
  <div className="px-4 py-6 sm:px-0">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Workout Tracking Card */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">
            Today&apos;s Workout
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Track your exercises and progress
          </p>
          <div className="mt-4">
            <Link
              href="/dashboard/workout"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Log Workout
            </Link>
          </div>
        </div>
      </div>

      {/* Nutrition Tracking Card */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Nutrition</h3>
          <p className="mt-1 text-sm text-gray-500">
            Track your daily food intake
          </p>
          <div className="mt-4">
            <Link
              href="/dashboard/nutrition"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Log Food
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Tracking Card */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Progress</h3>
          <p className="mt-1 text-sm text-gray-500">
            View your fitness journey
          </p>
          <div className="mt-4">
            <Link
              href="/dashboard/progress"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Progress
            </Link>
          </div>
        </div>
      </div>

      {/* Online Classes Tracking Card */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Join Classes</h3>
          <p className="mt-1 text-sm text-gray-500">
            View available online fitness classes
          </p>
          <div className="mt-4">
            <Link
              href="/dashboard/workout"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Classes
            </Link>
          </div>
        </div>
      </div>

      {/* Workout Tracking Card */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">
            View Recipe Board
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Post and view recipes from others
          </p>
          <div className="mt-4">
            <Link
              href="/dashboard/workout"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Recipe Board
            </Link>
          </div>
        </div>
      </div>

      {/* Workout Tracking Card */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">
            Join a Community
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Create or join a community of fitness enthusiasts
          </p>
          <div className="mt-4">
            <Link
              href="/dashboard/workout"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Communities
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
