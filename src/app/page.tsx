"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const features = [
    {
      title: "AI Network",
      description:
        "Distributed AI agents working together to detect and validate disasters",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Sensor Integration",
      description: "Real-time data from IoT sensors and autonomous drones",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      title: "Autonomous Response",
      description:
        "AI-driven coordination of emergency resources and rescue efforts",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const capabilities = [
    "Multi-Agent Consensus",
    "Real-time Monitoring",
    "Autonomous Decision Making",
    "Drone Fleet Control",
    "Emergency Response",
    "Resource Allocation",
    "Data Collection",
    "Predictive Analytics",
  ];

  // Create refs for each section
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const descriptionRef = useRef(null);
  const featuresRef = useRef(null);
  const capabilitiesRef = useRef(null);

  // Check if sections are in view
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isVideoInView = useInView(videoRef, { once: true, amount: 0.3 });
  const isDescriptionInView = useInView(descriptionRef, {
    once: true,
    amount: 0.3,
  });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isCapabilitiesInView = useInView(capabilitiesRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark">
      <section className="relative py-16 md:py-24 lg:py-26 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Hero Content */}
          <div ref={heroRef} className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark mb-6">
                Share Your Disaster Response Experience
              </h1>
              <p className="text-xl text-secondary-light dark:text-secondary-dark mb-4">
                Help us understand real-world disaster response challenges. Your
                field experience and insights will shape the future of
                autonomous response systems.
              </p>
              <p className="text-lg text-secondary-light dark:text-secondary-dark mb-8">
                Schedule a 30-minute call with our research team to share your
                experiences.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://calendly.com/cdirks4/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Schedule a Call</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.button>
                </a>

                <a href="mailto:dirks.connor4@gmail.com">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-surface-light dark:bg-surface-dark text-secondary-light dark:text-secondary-dark px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl border border-primary-light/10 dark:border-primary-dark/10 hover:border-primary-light/30 dark:hover:border-primary-dark/30 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Email Us</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Video Section */}
          <motion.div
            ref={videoRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isVideoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-20 bg-surface-light dark:bg-surface-dark border border-primary-light/10 dark:border-primary-dark/10"
          >
            <div className="relative aspect-video p-2">
              <video
                className="w-full rounded-xl object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300"
                controls
              >
                <source src="/videos/high.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            ref={descriptionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isDescriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-24 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-light dark:text-secondary-dark mb-6">
              About Our Research
            </h2>
            <div className="space-y-4 text-lg text-secondary-light dark:text-secondary-dark">
              <p>
                In disasters where traditional communication and coordination
                fail, our project introduces a decentralized, autonomous
                disaster response system leveraging AI agents, drones, and
                blockchain technology.
              </p>
              <p>
                We deploy a network of AI agents—global, regional, and
                local—that continuously monitor environments for signs of
                disasters. Upon detecting an event, these agents collaborate
                through a consensus mechanism to confirm the disaster, collect
                data, and coordinate responses.
              </p>
              <p>
                Our research focuses on understanding real-world disaster
                response challenges and how autonomous systems can support human
                responders. Your insights and experiences are crucial in shaping
                this technology to be more effective and responsive to actual
                needs on the ground.
              </p>
            </div>
          </motion.div>

          {/* Features Section */}
          <div ref={featuresRef} className="mt-24 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isFeaturesInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.8,
                  delay: isFeaturesInView ? index * 0.2 : 0,
                }}
                className="p-6 rounded-xl bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-light/10 dark:border-primary-dark/10"
              >
                <div className="text-primary-light dark:text-primary-dark mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-light dark:text-secondary-dark">
                  {feature.title}
                </h3>
                <p className="text-secondary-light dark:text-secondary-dark">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Capabilities Section */}
          <div ref={capabilitiesRef} className="mt-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={
                isCapabilitiesInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark"
            >
              System Capabilities
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isCapabilitiesInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: isCapabilitiesInView ? index * 0.1 : 0,
                  }}
                  className="px-6 py-3 rounded-full bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-sm text-secondary-light dark:text-secondary-dark border border-primary-light/10 dark:border-primary-dark/10 hover:border-primary-light/30 dark:hover:border-primary-dark/30 transition-all duration-300"
                >
                  {capability}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
