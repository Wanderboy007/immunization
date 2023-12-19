import React, { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("birth");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabItems = [
    "BIRTH",
    "1 1/2 MONTHS",
    "2 1/2 MONTHS",
    "3 1/2 MONTHS",
    "9 MONTHS",
    "16-24 MONTHS",
    "Vitamin A",
    "5-6 YEARS",
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4">
        {tabItems.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(tab.toLowerCase().replace(/ /g, "-"))}
            className={`py-2 px-4 border border-gray-300 rounded-lg focus:outline-none ${
              activeTab === tab.toLowerCase().replace(/ /g, "-")
                ? "bg-blue-500 text-white"
                : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content for each tab */}
      {activeTab === "birth" && <div>BIRTH content</div>}
      {activeTab === "1-1/2-months" && <div>1 1/2 MONTHS content</div>}
      {activeTab === "2-1/2-months" && <div>2 1/2 MONTHS content</div>}
      {activeTab === "3-1/2-months" && <div>3 1/2 MONTHS content</div>}
      {activeTab === "9-months" && <div>9 MONTHS content</div>}
      {activeTab === "16-24-months" && <div>16-24 MONTHS content</div>}
      {activeTab === "vitamin-a" && <div>Vitamin A content</div>}
      {activeTab === "5-6-years" && <div>5-6 YEARS content</div>}
    </div>
  );
};

export default TabComponent;
