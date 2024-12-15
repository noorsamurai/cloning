import React from 'react';

const RightSidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-full p-2 bg-gray-100 border-l border-gray-200">
      <h3 className="mt-0">Recommendations</h3>
      <ul>
        <li>Suggestion 1</li>
        <li>Suggestion 2</li>
        <li>Suggestion 3</li>
      </ul>
    </div>
  );
};

export default RightSidebar;
