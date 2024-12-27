import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Alice Johnson',
      role: 'Founder & Cat Whisperer',
      image: 'data:image/jpeg;base64,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', // Replace with actual image URLs
    },
    {
      name: 'Bob Smith',
      role: 'Adoption Coordinator',
      image: 'data:image/jpeg;base64,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', // Replace with actual image URLs
    },
    {
      name: 'Charlie Brown',
      role: 'Web Developer',
      image: 'data:image/jpeg;base64,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', // Replace with actual image URLs
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <h1 className="text-3xl font-semibold text-center my-7">
          About Purrfect Adoption
        </h1>
        <div className="text-md text-gray-500 flex flex-col gap-6">
          <p>
            Welcome to Purrfect Adoption! Our mission is to connect loving
            families with their purrfect feline companions.
          </p>
          <p>
            At Purrfect Adoption, we work with local shelters and rescues to
            showcase cats in need of a forever home. From playful kittens to
            gentle seniors, every cat deserves a chance to find their family.
          </p>
          <p>
            Thank you for supporting our mission to give every cat the love and
            care they deserve. Together, we can make a difference, one paw at a
            time!
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-4xl mx-auto p-3 mt-10">
        <h2 className="text-2xl font-semibold text-center my-5">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-md p-5 rounded-md"
            >
              <img
                src={member.image}
                alt={`${member.name}`}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;