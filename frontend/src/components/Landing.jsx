import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Gamepad2, 
  Brain,
  Target,
  ArrowRight,
  Trophy,
  Rocket,
  Bird,
  Download
} from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Alert } from "./ui/Alert";

const FeatureCard = ({ icon: Icon, title, description, techDetail }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="relative"
  >
    <Card glowing className="h-full">
      <div className="relative z-10 space-y-4">
        <Icon className="w-8 h-8 text-violet-500" />
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <div className="pt-2 border-t border-gray-800">
          <p className="text-sm text-violet-400">{techDetail}</p>
        </div>
      </div>
    </Card>
  </motion.div>
);

const StatCard = ({ value, label, description }) => (
  <div className="text-center p-6">
    <h4 className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text mb-2">
      {value}
    </h4>
    <p className="text-white font-medium mb-2">{label}</p>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

export const Landing = () => {
  const navigate = useNavigate();
  const gameDownloadLink = 'https://github.com/dhananjaypai08/ETHArena/releases/tag/mac'; 
  
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Gaming Evolution",
      description: "Transform your gameplay with intelligent AI agents that turn every move into a strategic masterpiece. We're not just playing games, we're rewriting the blockchain gaming rulebook!",
      techDetail: "RAG-based AI analysis with Ethereum-powered insights"
    },
    {
      icon: Trophy,
      title: "On-Chain Reputation System",
      description: "Earn, track, and showcase your gaming prowess. Your skills are no longer just pixels—they're permanent, verifiable achievements on the blockchain.",
      techDetail: "Decentralized reputation tracking across game engines"
    },
    {
      icon: Rocket,
      title: "NFT Gameplay Forge",
      description: "Every game moment becomes a unique, AI-generated NFT. Your gaming journey isn't just played—it's minted, traded, and celebrated!",
      techDetail: "DeepAI NFT generation based on real-time gameplay"
    },
    {
      icon: Target,
      title: "Cross-Engine Gaming Nexus",
      description: "One SDK to rule them all. Seamlessly integrate blockchain rewards across Unity, Unreal, Godot, and beyond. Your game, your rules, our tech!",
      techDetail: "Account abstraction with ERC2771 technology"
    }
  ];

  const stats = [
    {
      value: "3.2B+",
      label: "Global Gaming Reach",
      description: "Potential users waiting to go on-chain"
    },
    {
      value: "1000+",
      label: "Game Patterns",
      description: "AI-powered performance insights"
    },
    {
      value: "∞",
      label: "Gaming Possibilities",
      description: "Your blockchain gaming future"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="relative pt-32 pb-20 px-4">
        {/* Gradient Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center items-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Gamepad2 className="w-16 h-16 text-violet-500" />
              </motion.div>
            </div>

            <h1 className="text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">
              Bringing Steam on-chain! 
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 text-transparent bg-clip-text">
              On-chain Rewards 
              with AI tadka
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Welcome to ETHArena—where your gaming skills mint wealth, your achievements become NFTs, 
              and every play transforms into a blockchain-powered narrative. We're not just disrupting gaming; 
              we're creating a whole new metaverse of play-to-earn possibilities!
            </p>

            
          <Alert type="warning" message="The only way to interact with the blockchain, earn NFTs, and build your reputation is by playing the game." />

            <div className="flex justify-center gap-6">

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={gameDownloadLink} download className="group">
                <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 text-white group">
                  <Download className="w-5 h-5 mr-2" /> Download Game
                </Button>
              </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={() => navigate('/performance')} className="group">
                  <span>AI Gaming Companion</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => navigate('/gaming')}
                  variant="secondary"
                  className="group border border-violet-500/20 hover:border-violet-500/50"
                >
                  <span>View On-Chain Reputation</span>
                  <Bird className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-24 mb-32"
          >
            <Card glowing className="border border-violet-500/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 text-center">
                <div>
                  <p className="text-violet-400 font-medium">AI Agents</p>
                  <p className="text-gray-400 mt-1">Smart gaming companions</p>
                </div>
                <div>
                  <p className="text-violet-400 font-medium">Web3 Native</p>
                  <p className="text-gray-400 mt-1">Blockchain-powered gaming</p>
                </div>
                <div>
                  <p className="text-violet-400 font-medium">Game Discovery</p>
                  <p className="text-gray-400 mt-1">Cross-engine recommendations</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </motion.div>

          {/* Platform Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card glowing className="border border-violet-500/20">
              <h3 className="text-2xl font-bold text-center pt-8 mb-8">
                Platform Potential
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;