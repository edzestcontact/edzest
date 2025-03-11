import React from "react";

const Benefits = () => {
  const benefits = [
    {
      title: "Engaging Learning",
      description:
        "Reduces monotony and makes learning enjoyable.",
      icon: "📈", // Replace with real icons/images
    },
    {
      title: "Immersive Learning",
      description:
        "Engages multiple senses making learning active and effective.",
      icon: "🔄",
    },
    {
      title: "Accelerated Learning",
      description:
        "Helps grasp concepts faster and retain information longer.",
      icon: "⚡",
    },
    {
      title: "Developing Critical Thinking",
      description:
        "Encourages critical thinking, decision making, and problem solving skills.",
      icon: "🎯",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
      Benefits of Practical Learning
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <div className="text-6xl mb-4">{benefit.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600"style={{fontFamily:"sans-serif", fontSize:"17px"}}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;