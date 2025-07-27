import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Settings, Palette, Brain, Cpu } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Code },
    { id: 'frontend', name: 'Frontend', icon: Palette },
    { id: 'backend', name: 'Backend', icon: Database },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'embedded', name: 'Embedded', icon: Cpu },
    { id: 'tools', name: 'Tools', icon: Settings },
  ];

  // Improved filtering logic with better organization
  const getFilteredSkills = () => {
    switch (activeCategory) {
      case 'all':
        return skills;
      case 'frontend':
        return skills.filter(skill => skill.category === 'frontend');
      case 'backend':
        return skills.filter(skill => skill.category === 'backend');
      case 'ai':
        return skills.filter(skill => skill.category === 'ai');
      case 'embedded':
        return skills.filter(skill => skill.category === 'embedded');
      case 'tools':
        return skills.filter(skill => skill.category === 'tools');
      default:
        return skills;
    }
  };

  const getSkillCount = (categoryId: string) => {
    switch (categoryId) {
      case 'all':
        return skills.length;
      case 'frontend':
        return skills.filter(skill => skill.category === 'frontend').length;
      case 'backend':
        return skills.filter(skill => skill.category === 'backend').length;
      case 'ai':
        return skills.filter(skill => skill.category === 'ai').length;
      case 'embedded':
        return skills.filter(skill => skill.category === 'embedded').length;
      case 'tools':
        return skills.filter(skill => skill.category === 'tools').length;
      default:
        return 0;
    }
  };

  const filteredSkills = getFilteredSkills();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section-padding bg-slate-800/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mobile-margin"
        >
          <h2 className="mobile-text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="mobile-text-lg text-slate-200 max-w-2xl mx-auto px-4">
            A comprehensive overview of my technical skills and expertise across various technologies and domains.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const skillCount = getSkillCount(category.id);
            
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-700/80 text-slate-200 hover:bg-slate-600/80 border border-slate-600/50'
                }`}
              >
                <Icon size={18} className="sm:w-5 sm:h-5" />
                <span>{category.name}</span>
                <span className="ml-1 text-xs opacity-75">({skillCount})</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory} // Add key to force re-render when filter changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4"
        >
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-700/80 backdrop-blur-sm rounded-xl mobile-padding shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50"
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center shadow-lg">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white text-sm sm:text-base">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-purple-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-slate-600/50 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-2 gradient-bg rounded-full"
                    />
                  </div>
                </div>

                {/* Skill Level Indicator */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-slate-400 text-lg">No skills found for this category.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 bg-slate-700/80 backdrop-blur-sm rounded-2xl mobile-padding border border-slate-600/50"
        >
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="mobile-text-2xl sm:text-3xl font-bold gradient-text mb-2">
                {skills.filter(s => s.category === 'frontend').length}
              </div>
              <div className="text-slate-200 font-medium text-sm sm:text-base">
                Frontend Technologies
              </div>
            </div>
            <div className="text-center">
              <div className="mobile-text-2xl sm:text-3xl font-bold gradient-text mb-2">
                {skills.filter(s => s.category === 'backend').length}
              </div>
              <div className="text-slate-200 font-medium text-sm sm:text-base">
                Backend Technologies
              </div>
            </div>
            <div className="text-center">
              <div className="mobile-text-2xl sm:text-3xl font-bold gradient-text mb-2">
                {skills.filter(s => s.category === 'ai').length}
              </div>
              <div className="text-slate-200 font-medium text-sm sm:text-base">
                AI & ML Skills
              </div>
            </div>
            <div className="text-center">
              <div className="mobile-text-2xl sm:text-3xl font-bold gradient-text mb-2">
                {skills.filter(s => s.category === 'embedded').length}
              </div>
              <div className="text-slate-200 font-medium text-sm sm:text-base">
                Embedded Systems
              </div>
            </div>
            <div className="text-center col-span-2 lg:col-span-1">
              <div className="mobile-text-2xl sm:text-3xl font-bold gradient-text mb-2">
                {skills.filter(s => s.category === 'tools').length}
              </div>
              <div className="text-slate-200 font-medium text-sm sm:text-base">
                Development Tools
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center px-4"
        >
          <p className="text-slate-200 max-w-2xl mx-auto mobile-text-base">
            I'm constantly learning and expanding my skill set to stay up-to-date with the latest technologies in AI, web development, and embedded systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 