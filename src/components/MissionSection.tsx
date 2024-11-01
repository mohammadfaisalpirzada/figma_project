import React from 'react';

const MissionSection = () => {
  return (
    <section className="bg-white p-10 mx-auto max-w-6xl">
      <h2 className="text-4xl font-light text-gray-500 mb-8">Main Focus/Mission Statement</h2>
      
      <div className="grid grid-cols-2 gap-12">
        <div className="flex items-start space-x-4">
          <span className="text-9xl font-bold text-gray-200">1</span>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
          </p>
        </div>

        <div className="flex items-start space-x-4">
          <span className="text-9xl font-bold text-gray-200">2</span>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
