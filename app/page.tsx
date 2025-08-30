'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si'

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
]

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-32 h-32 mx-auto mb-8 bg-white rounded-full shadow-2xl flex items-center justify-center"
          >
            <span className="text-4xl font-bold text-gradient">MA</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl font-bold text-white mb-4"
          >
            MotoyamaA
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-white/80 mb-8"
          >
            システムエンジニア / フルスタック開発者
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/MotoyamaA" className="text-white/80 hover:text-white text-2xl transition-colors">
              <FaGithub />
            </a>
            <a href="#" className="text-white/80 hover:text-white text-2xl transition-colors">
              <FaLinkedin />
            </a>
            <a href="mailto:your@email.com" className="text-white/80 hover:text-white text-2xl transition-colors">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="glass rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <p className="text-white/90 text-lg leading-relaxed">
            情熱的なシステムエンジニアとして、モダンなWeb技術を使用してスケーラブルで効率的なソリューションの構築に専念しています。
            React、Next.js、TypeScriptを中心としたフロントエンド開発から、Node.js、Pythonを使ったバックエンド開発まで、
            フルスタック開発の経験を積んでいます。
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="glass rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
              >
                <skill.icon className="text-3xl mx-auto mb-2 text-white" style={{ color: skill.color }} />
                <p className="text-white font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="glass rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">プロジェクト 1</h3>
              <p className="text-white/80 mb-4">
                React、Next.js、TypeScriptを使用したWebアプリケーション。
                レスポンシブデザインとSEO最適化を実装。
              </p>
              <div className="flex space-x-2">
                <span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-gray-500/20 text-gray-200 px-2 py-1 rounded text-sm">Next.js</span>
                <span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-sm">TypeScript</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">プロジェクト 2</h3>
              <p className="text-white/80 mb-4">
                Node.js、Express、MongoDBを使用したRESTful API。
                認証機能とデータベース設計を担当。
              </p>
              <div className="flex space-x-2">
                <span className="bg-green-500/20 text-green-200 px-2 py-1 rounded text-sm">Node.js</span>
                <span className="bg-gray-500/20 text-gray-200 px-2 py-1 rounded text-sm">Express</span>
                <span className="bg-green-500/20 text-green-200 px-2 py-1 rounded text-sm">MongoDB</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
          <p className="text-white/80 mb-8">
            新しいプロジェクトや協力の機会について話し合いましょう
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            お問い合わせ
          </motion.button>
        </motion.section>
      </div>
    </main>
  )
}