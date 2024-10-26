// components/profile/Announcement.jsx
export const Announcement = () => {
    return (
      <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold mb-1">Announcement</h2>
            <p className="text-sm text-gray-600">Check out our latest updates and features!</p>
          </div>
          <div className="bg-blue-500 rounded-full p-2">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    );
  };