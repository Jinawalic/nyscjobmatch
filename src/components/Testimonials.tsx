import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aisha Mohammed",
      role: "NYSC Graduate – Abuja",
      story:
        "Within a month of creating my profile, I landed a great internship opportunity through this platform. The process was simple and fast!",
      image: "/assets/img/user1.jpg",
    },
    {
      id: 2,
      name: "Chinedu Okafor",
      role: "Frontend Developer – Lagos",
      story:
        "I applied to just two jobs and got invited for interviews almost immediately. Now I’m working full-time at a tech startup.",
      image: "/assets/img/user2.jpg",
    },
    {
      id: 3,
      name: "Grace Oluwaseun",
      role: "HR Assistant – Port Harcourt",
      story:
        "This platform connected me with companies looking for NYSC skills like mine. I wouldn’t have gotten this opportunity elsewhere.",
      image: "/assets/img/user3.jpg",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Success Stories
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-100">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-[#056608]"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                “{testimonial.story}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
