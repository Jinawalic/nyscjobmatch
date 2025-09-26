import { motion } from "framer-motion";
import { UserPlus, Search, Send, Briefcase } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Create a Profile",
      description: "Sign up, add your NYSC skills and personal details so recruiters can find you easily.",
      icon: <UserPlus className="w-10 h-10 text-white" />,
      color: "bg-[#056608]",
    },
    {
      id: 2,
      title: "Search Jobs",
      description: "Browse top opportunities that match your skills and career interests.",
      icon: <Search className="w-10 h-10 text-white" />,
      color: "bg-blue-600",
    },
    {
      id: 3,
      title: "Apply",
      description: "Send in your application with just a click and stand out from the crowd.",
      icon: <Send className="w-10 h-10 text-white" />,
      color: "bg-yellow-500",
    },
    {
      id: 4,
      title: "Get Hired",
      description: "Land your dream job and kick-start your career journey with confidence.",
      icon: <Briefcase className="w-10 h-10 text-white" />,
      color: "bg-indigo-600",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        >
           How It Works
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${step.color}`}>
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
