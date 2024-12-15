import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-gray-100 border-r border-gray-200 p-2 box-border justify-between">
      {/* Top Section */}
      <div className="flex-grow overflow-y-auto">
        {/* Search Bar */}
        <div className="mb-2 flex items-center">
          <input
            type="text"
            placeholder="Search templates..."
            className="w-full p-1 border border-gray-300 rounded"
          />
        </div>

        {/* Templates Folder Structure */}
        <h3 className="mt-0">Templates</h3>
        <ul>
          <li>Routine Checkup</li>
          <li>Emergency Case</li>
          <li>X-Ray Report</li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between">
        <button className="bg-gray-300 border border-gray-400 p-1 rounded">Theme</button>
        <button className="bg-blue-500 text-white border-none p-1 rounded">Settings</button>
      </div>
    </div>
  );
};

export default Sidebar;
