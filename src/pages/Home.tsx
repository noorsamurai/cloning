import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Editor from '../components/Editor/Editor';
import RightSidebar from '../components/Sidebar/RightSidebar';

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Editor */}
      <div className="flex-1 p-4">
        <Editor />
      </div>

      {/* Right Sidebar */}
      <div className="w-64">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
