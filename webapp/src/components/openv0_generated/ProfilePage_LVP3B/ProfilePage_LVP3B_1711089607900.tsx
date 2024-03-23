"use client";


const ProfilePage_LVP3B = () => (
  <div className="bg-white dark:bg-black p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="flex items-center justify-center">
      <div className="w-24 h-24 bg-gray-300 flex items-center justify-center text-white rounded-full uppercase">JD</div>
    </div>
    <div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md">
        <div className="text-lg font-bold mb-2">User Details</div>
        <p className="text-gray-600 dark:text-gray-300">Name: John Doe</p>
        <p className="text-gray-600 dark:text-gray-300">Location: New York</p>
        <p className="text-gray-600 dark:text-gray-300">Role: Developer</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md mt-4">
        <div className="text-lg font-bold mb-2">Project Details</div>
        <p className="text-gray-600 dark:text-gray-300">Project Name: Example Project</p>
        <p className="text-gray-600 dark:text-gray-300">Status: In Progress</p>
        <p className="text-gray-600 dark:text-gray-300">Deadline: 01/01/2023</p>
      </div>
    </div>

    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md mt-4">
      <div className="text-lg font-bold mb-2">Login History</div>
      <p className="text-gray-600 dark:text-gray-300"> - Login: 12/08/2022 10:30 AM</p>
      <p className="text-gray-600 dark:text-gray-300"> - Logout: 12/08/2022 11:00 AM</p>
      <p className="text-gray-600 dark:text-gray-300"> - Location: New York</p>
    </div>

    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md mt-4">
      <div className="text-lg font-bold mb-2">Activity Logs</div>
      <p className="text-gray-600 dark:text-gray-300">Activities:</p>
      <p className="text-gray-600 dark:text-gray-300"> - Created new project</p>
      <p className="text-gray-600 dark:text-gray-300"> - Updated profile information</p>
    </div>
  </div>
);

export default ProfilePage_LVP3B;