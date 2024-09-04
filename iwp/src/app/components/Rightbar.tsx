import React from 'react';

const Rightbar: React.FC = () => {
  const topQuestions = [
    "How do I return the response from an asynchronous call?",
    "Official locator strategies for the WebDriver",
    "How can I prevent SQL injection in PHP?",
    "How can I get query string values in JavaScript?"
  ];

  const popularTags = [
    { name: "HTML", count: 12 },
    { name: "JavaScript", count: 11 },
    { name: "CSS", count: 8 },
    { name: "PHP", count: 8 },
    { name: "React.js", count: 6 }
  ];

  return (
    <div className="w-auto bg-black-900 text-white p-4 border-l">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Top Questions</h2>
        <ul className="space-y-2">
          {topQuestions.map((question, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-500">
              {`-> ${question}`}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">Popular Tags</h2>
        <ul className="space-y-2">
          {popularTags.map((tag, index) => (
            <li
              key={index}
              className="flex items-center justify-between border border-gray-700 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-700"
            >
              <span>{tag.name}</span>
              <span className="text-sm">{tag.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
