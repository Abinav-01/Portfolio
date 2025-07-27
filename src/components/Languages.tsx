import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Languages as LanguagesIcon } from 'lucide-react';
import { languages } from '../data/portfolio';

const Languages: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'native':
        return 'text-green-400 bg-green-900/30 border-green-500/30';
      case 'very fluent':
        return 'text-blue-400 bg-blue-900/30 border-blue-500/30';
      case 'beginner':
        return 'text-orange-400 bg-orange-900/30 border-orange-500/30';
      default:
        return 'text-gray-400 bg-gray-800/30 border-gray-600/30';
    }
  };

  return (
    <section className="section-padding bg-slate-900/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Languages <span className="gradient-text">Known</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Communication is key in any field. Here are the languages I'm proficient in.
          </p>
        </motion.div>

        {/* Languages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600/30 text-center hover:border-purple-500/50"
            >
              {/* Language Icon */}
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>

              {/* Language Name */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {language.name}
              </h3>

              {/* Proficiency Level */}
              <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getLevelColor(language.level)}`}>
                {language.level}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-slate-600/30">
            <div className="flex items-center justify-center mb-4">
              <LanguagesIcon className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">
                Language Proficiency
              </h3>
            </div>
            <p className="text-gray-300">
              I'm comfortable communicating in multiple languages, which helps me collaborate effectively in diverse teams and understand different perspectives in technology and development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages; 