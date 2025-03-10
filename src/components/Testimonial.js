import React from "react";

const testimonials = [
    {
      name: "Jawed Ahmad",
      
      feedback:
        "I am thrilled to share my successful journey of passing the PMP exam with Above Target in all three domains, and it wouldn’t have been possible without the incredible support of Mr. Amit",
      image: "/assets/Jawed Ahmad.png", // Correct path from public folder
    },
    {
      name: "Bhavani Ramaswamy",      
      feedback:
        "I saw some of Amits youtube videos when i started my preparation for PMP on September 2022 and very much impressed with the clear explanations. I wrote to Amit through Linkedin. He immediately responded and provided all the materials.",
      image: "/assets/bhavani.png", // Correct path from public folder
    },
    {
      name: "Junaid Amid Khan",
      
      feedback:
        "PMP & ACP courses provided a lot of valuable insights and advanced techniques that I was looking for. The instructor is clearly knowledgeable and passionate about the subject, which made the lessons .",
      image: "/assets/junaid Amid khan.png", // Correct path from public folder
    },
    {
      name: "Kalesh Nair",
      
      feedback:
        "I had a fantastic experience learning and training for my PMP Certification with Amit at Edzest. Amit’s approach is exceptional—he not only shifts your mindset to think like a project manager but also provides comprehensive support to help .",
      image: "/assets/Kalesh Nair.png", // Correct path from public folder
    },
    {
      name: "Kishore kumar chelikhani",
      
      feedback:
        "On behalf of AI Infinity Holdings Ltd, I am pleased to share our enthusiastic endorsement of Amit, founder of Edzest Education Services. Amit recently conducted a comprehensive project management .",
      image: "/assets/Kishore kumar chelikhani.png", // Correct path from public folder
    },
    {
      name: "Lakmal jeewananda",
      
      feedback:
        "Thanks, Amith. The course is really good, especially because the questions in the MOC exams are clearly structured and resemble the actual exam. It has helped me prepare effectively for the PMP exam, giving me much more confidence..",
      image: "/assets/Lakmal jeewananda.png", // Correct path from public folder
    },
];

const Testimonials = () => {
    return (
<section className="container mx-auto px-6 py-16">
  <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
    Testimonials
  </h2>
  <div className="flex overflow-x-auto space-x-6">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-between flex-shrink-0 w-64 bg-white p-6 rounded-lg shadow-lg border border-gray-200 min-h-[350px]"
      >
        <img
          src={testimonial.image} // Correct public path
          alt={testimonial.name}
          className="rounded-full w-24 h-24 object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 text-center">
          {testimonial.name}
        </h3>
        <p className="text-gray-600 italic text-center">{testimonial.role}</p>
        <div className="flex-grow">
          <p className="text-gray-600 mt-4 text-center">{testimonial.feedback}</p>
        </div>
        {/* Read more button with link */}
        <a
          href="https://www.google.com/search?q=edzest+education+services&rlz=1C1ONGR_enIN998IN998&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkxNTUzajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full px-4 py-2 bg-[#4748ac] text-decoration-none text-white rounded hover:bg-[#37378c] text-center"
        >
          Read more
        </a>
      </div>
    ))}
  </div>
</section>

    );
};

export default Testimonials;