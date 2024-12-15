import React from 'react';

const Editor: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="h-12 bg-white border-b border-gray-200 flex items-center p-2 box-border">
        <h2 className="flex-grow">Dental Journal Management</h2>
        <div className="flex items-center gap-2">
          <button className="bg-blue-500 text-white p-1 rounded">Note 1</button>
          <button className="p-1">Note 2</button>
          <button className="p-1">+ New Tab</button>
        </div>
      </div>

      {/* Note Content */}
      <div className="flex-grow p-2 bg-white border border-gray-200 rounded m-2 overflow-y-auto">
        <p className="text-gray-500">Start writing here...</p>
      </div>

      {/* Actions */}
      <div className="h-12 bg-white flex items-center justify-end p-2 border-t border-gray-200">
        <button className="bg-blue-500 text-white border-none p-1 rounded ml-1">Save</button>
        <button className="bg-blue-500 text-white border-none p-1 rounded ml-1">Summarize</button>
        <button className="bg-blue-500 text-white border-none p-1 rounded ml-1">Anonymize</button>
      </div>
    </div>
  );
};

export default Editor;
