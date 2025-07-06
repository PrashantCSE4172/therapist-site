'use client';
import Image from 'next/image';

const services = [
  {
    title: 'Anxiety & Stress',
    image: '/images/anxiety.jpg',
    description:
      'Support for managing overwhelming emotions and restoring balance.',
  },
  {
    title: 'Relationship Counseling',
    image: '/images/relationship.jpg',
    description: 'Helping you build stronger, healthier relationships.',
  },
  {
    title: 'Trauma Recovery',
    image: '/images/trauma.jpg',
    description: 'Compassionate care for healing from past experiences.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Services I Offer
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          I provide a safe, supportive space where healing and personal growth
          can take root.
        </p>

        <div className="grid md:grid-cols-3 gap-10 place-items-center">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-md p-6 max-w-sm text-left"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover w-full h-48"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
