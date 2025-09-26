import { motion } from "framer-motion";

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#056608] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Job Seekers */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-bold mb-4">👩‍🎓 Job Seekers</h3>
            <p className="text-sm text-gray-600 mb-6">
              Create your free profile today and get matched with top job
              opportunities tailored for NYSC graduates.
            </p>
            <button className="px-6 py-3 bg-[#056608] text-white rounded-lg font-medium hover:bg-[#045206] transition-colors">
              Create Profile
            </button>
          </motion.div>

          {/* Employers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-bold mb-4">🏢 Employers</h3>
            <p className="text-sm text-gray-600 mb-6">
              Post a job and hire top NYSC talent with the skills your company
              needs to grow and succeed.
            </p>
            <button className="px-6 py-3 bg-[#056608] text-white rounded-lg font-medium hover:bg-[#045206] transition-colors">
              Post a Job
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
