"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Download, 
  Chrome, 
  Globe, 
  Eye, 
  Wallet, 
  BarChart3, 
  Target, 
  Zap,
  X,
  ArrowRight,
  Star,
  Shield,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getWalletAddress } from "@/lib/wallet/connectors";

export default function Landing() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter()

  const handleStoreClick = () => {
    setShowModal(true);
  };

  const handlePreviewClick = () => {
    router.push("/preview")
  };

  const features = [
    {
      icon: <Wallet className="w-8 h-8 text-purple-600" />,
      title: "Connect Any Stellar Wallet",
      description: "Seamlessly integrate with Freighter, Lobstr, WalletConnect and other popular Stellar wallets for secure access to your assets."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Analyze Idle Assets",
      description: "Smart detection of dormant assets in your portfolio with real-time analysis of earning potential and optimization opportunities."
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Top-Performing Vaults",
      description: "Access curated yield opportunities from DeFindex with up to 8.1% APY, carefully selected for optimal risk-adjusted returns."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Automated Optimization",
      description: "Set-and-forget DeFi strategies that automatically compound your returns and rebalance based on market conditions."
    }
  ];

  const storeButtons = [
    {
      name: "Chrome Store",
      icon: <Chrome className="w-5 h-5" />,
      gradient: "from-blue-500 to-blue-600",
      hoverGradient: "from-blue-600 to-blue-700"
    },
    {
      name: "Brave",
      icon: <Shield className="w-5 h-5" />,
      gradient: "from-orange-500 to-orange-600",
      hoverGradient: "from-orange-600 to-orange-700"
    },
    {
      name: "Mozilla",
      icon: <Globe className="w-5 h-5" />,
      gradient: "from-purple-500 to-purple-600",
      hoverGradient: "from-purple-600 to-purple-700"
    },
    {
      name: "Preview",
      icon: <Eye className="w-5 h-5" />,
      gradient: "from-green-500 to-green-600",
      hoverGradient: "from-green-600 to-green-700",
      isPreview: true
    }
  ];

 

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background with green arc inspired design */}
        <div className="absolute inset-0 bg-gray-50"></div>
        
        {/* Green arc background element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-[800px] h-[800px]">
            <div className="absolute inset-0 rounded-full bg-blue-500/5"></div>
            <div className="absolute inset-8 rounded-full bg-blue-500/10"></div>
            <div className="absolute inset-16 rounded-full bg-blue-500/15"></div>
            <div className="absolute inset-24 rounded-full bg-blue-500/20"></div>
            <div className="absolute inset-32 rounded-full bg-blue-500/25"></div>
          </div>
        </div>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto space-y-12">
            {/* Main Headlines */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900">
                Smarter DeFi.
              </h1>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Grow Your Wealth,{" "}
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Effortlessly
                </span>.
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              An <span className="font-semibold text-blue-600">AI-powered</span> wallet assistant that discovers, recommends, manages, and notifies — so you never miss a vault again.
            </motion.p>

            {/* Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {storeButtons.map((store, index) => (
                <motion.div
                  key={store.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Button
                    onClick={store.isPreview ? handlePreviewClick : handleStoreClick}
                    className={`w-full h-12 bg-gradient-to-r ${store.gradient} hover:bg-gradient-to-r hover:${store.hoverGradient} text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-xl`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {store.icon}
                      <span className="text-sm">{store.name}</span>
                      {store.isPreview && (
                        <ArrowRight className="w-3 h-3 ml-1" />
                      )}
                    </div>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Product Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Phone frame mockup */}
                <div className="relative bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
                  <div className="bg-black rounded-[1.75rem] p-1">
                    <div className="bg-white rounded-[1.5rem] overflow-hidden" style={{ width: '300px', height: '500px' }}>
                      {/* Chrome Extension Screenshot */}
                      <img 
                        src="/img/xtension-1.png"
                        alt="DeFi Platform Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Screen reflection effect */}
                  <div className="absolute inset-2 bg-gradient-to-tr from-white/10 to-transparent rounded-[1.75rem] pointer-events-none"></div>
                </div>

                {/* Floating badges - simpler design */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-8 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                >
                  AI-Powered
                </motion.div>
                
                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-8 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                >
                  8.1% APY
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform simplifies DeFi yield farming through intelligent automation and cross-protocol optimization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your DeFi Returns?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of users already earning optimized yields with our automated DeFi strategies.
            </p>
            <Button
              onClick={handlePreviewClick}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold text-lg px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Eye className="w-5 h-5 mr-3" />
              Try Preview Now
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Store Review Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2 text-center justify-center">
              <span className="text-2xl">🚧</span>
              <span>Extension Under Review</span>
            </DialogTitle>
          </DialogHeader>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center space-y-6"
          >
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The extension is currently under store review.
              <br />
              Please use the Preview button to test all features.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowModal(false)}
                className="flex-1"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setShowModal(false);
                  handlePreviewClick();
                }}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
              >
                <Eye className="w-4 h-4 mr-2" />
                Try Preview
              </Button>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  );
}