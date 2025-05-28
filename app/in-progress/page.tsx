export default function InProgress() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              🚧 Page Under Construction
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We&apos;re working hard to bring you this feature. Please check
              back soon!
            </p>
            <div className="mt-8">
              <a
                href="/dashboard"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Return to Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
