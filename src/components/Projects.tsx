import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Eye, Filter } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'featured', name: 'Featured' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  // Improved filtering logic with better organization
  const getFilteredProjects = () => {
    switch (filter) {
      case 'all':
        return projects;
      case 'featured':
        return projects.filter(p => p.featured);
      case 'frontend':
        return projects.filter(p => 
          p.technologies.some(t => 
            ['React', 'Vue', 'Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript'].includes(t)
          )
        );
      case 'fullstack':
        return projects.filter(p => 
          p.technologies.some(t => 
            ['React', 'Vue', 'Flask', 'NestJS', 'Node.js', 'Python', 'MongoDB', 'SQLite', 'Prisma'].includes(t)
          )
        );
      default:
        return projects;
    }
  };

  const getProjectCount = (filterId: string) => {
    switch (filterId) {
      case 'all':
        return projects.length;
      case 'featured':
        return projects.filter(p => p.featured).length;
      case 'frontend':
        return projects.filter(p => 
          p.technologies.some(t => 
            ['React', 'Vue', 'Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript'].includes(t)
          )
        ).length;
      case 'fullstack':
        return projects.filter(p => 
          p.technologies.some(t => 
            ['React', 'Vue', 'Flask', 'NestJS', 'Node.js', 'Python', 'MongoDB', 'SQLite', 'Prisma'].includes(t)
          )
        ).length;
      default:
        return 0;
    }
  };

  const filteredProjects = getFilteredProjects();

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
    <section id="projects" className="section-padding bg-slate-900/50">
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="mobile-text-lg text-slate-200 max-w-2xl mx-auto px-4">
            A showcase of my recent work, featuring web applications and projects that demonstrate my skills and creativity.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4"
        >
          {filters.map((filterOption) => {
            const projectCount = getProjectCount(filterOption.id);

            return (
              <motion.button
                key={filterOption.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterOption.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                  filter === filterOption.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-700/80 text-slate-200 hover:bg-slate-600/80 border border-slate-600/50'
                }`}
              >
                <Filter size={16} />
                <span>{filterOption.name}</span>
                <span className="ml-1 text-xs opacity-75">({projectCount})</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={filter} // Add key to force re-render when filter changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-700/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="mobile-padding">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-500/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-slate-600/80 text-slate-300 text-xs rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Actions */}
                  <div className="flex items-center justify-between">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Eye size={16} />
                      <span className="text-sm font-medium">View Details</span>
                    </motion.button>

                    <div className="flex items-center space-x-2">
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-600/80 hover:bg-slate-500/80 rounded-lg transition-colors"
                        >
                          <Github size={16} className="text-slate-200" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-600/80 hover:bg-slate-500/80 rounded-lg transition-colors"
                        >
                          <ExternalLink size={16} className="text-slate-200" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-slate-400 text-lg">No projects found for this category.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-4 sm:p-6 border-b border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <X size={24} className="text-slate-400" />
                    </motion.button>
                  </div>
                  {selectedProject.featured && (
                    <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      Featured Project
                    </span>
                  )}
                </div>

                {/* Modal Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-slate-200 mb-6 leading-relaxed text-sm sm:text-base">
                    {selectedProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full border border-purple-500/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    {selectedProject.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors w-full sm:w-auto justify-center"
                      >
                        <Github size={16} className="text-slate-200" />
                        <span className="text-slate-200 font-medium">View Code</span>
                      </motion.a>
                    )}
                    {selectedProject.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-colors w-full sm:w-auto justify-center"
                      >
                        <ExternalLink size={16} />
                        <span className="font-medium">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 