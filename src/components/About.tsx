import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Phone, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo, timeline, education } from '../data/portfolio';

const About: React.FC = () => {
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

  return (
    <section id="about" className="section-padding bg-slate-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get to know me better - my journey, education, experience, and what drives me in the world of technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* About Text */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Who I Am
              </h3>
              <div className="prose prose-lg prose-invert max-w-none">
                {personalInfo.about.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Personal Details */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Personal Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">{personalInfo.title}</span>
                </div>
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div variants={itemVariants}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.resumeUrl}
                download
                className="button-primary inline-flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Education & Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-purple-400" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-600/30">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-sm font-medium text-purple-400 bg-purple-900/30 px-2 py-1 rounded">
                        {edu.cgpa}
                      </span>
                    </div>
                    <p className="text-gray-300 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-400">
                      {edu.duration}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-purple-400" />
                Experience
              </h3>
              <div className="space-y-6">
                {timeline.filter(item => item.type === 'experience').map((item, index) => (
                  <div key={index} className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-600/30">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                      <span className="text-sm font-medium text-purple-400">
                        {item.year}
                      </span>
                    </div>
                    {item.company && (
                      <p className="text-gray-300 font-medium mb-2">
                        {item.company}
                      </p>
                    )}
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '2', label: 'Dual Degrees' },
            { number: '4+', label: 'Projects Completed' },
            { number: '1', label: 'Research Internship' },
            { number: '9.1', label: 'VIT CGPA' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 