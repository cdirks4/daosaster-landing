"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Leandra T.",
      role: "Research Lead",
      image: "/images/leandra.jpeg",
      bio: "ML HCI Research @ MIT. Previously cofounder of Vidcode (acquired), an award-winning creative coding platform reaching 10M+ learners globally. Forbes 30 Under 30 honoree with extensive experience in AI, human-computer interaction, and educational technology.",
      achievements: [
        "MIT IDM Fellow",
        "YC Alum (Vidcode)",
        "Forbes 30 Under 30",
        "Parent's Choice Awards Best Learning Website",
      ],
      education: [
        {
          school: "Massachusetts Institute of Technology",
          degree: "Dual MS in Computer Science & Engineering & Management",
          focus: "Human Centered Design",
        },
      ],
      links: {
        calendly: "https://calendly.com/cdirks4/new-meeting",
      },
    },
    {
      name: "Jonathan H.",
      role: "Technology Strategy",
      image: "/images/jonathan.jpeg",
      bio: "Founder of Neverware (acquired by Google). Led the development of CloudReady, a secure and manageable operating system based on Google's Chromium OS. Experienced in building and scaling technology companies with a focus on system security and management.",
      achievements: [
        "Neverware Founder",
        "Google Acquisition",
        "Venture-Backed Success",
        "Enterprise OS Innovation",
      ],
      education: [
        {
          school: "The Wharton School",
          degree: "Bachelor's Degree",
          focus: "Finance",
        },
      ],
      expertise: [
        "Strategic Partnerships",
        "Start-ups",
        "Technology Strategy",
        "Enterprise Systems",
      ],
      links: {
        calendly: "https://calendly.com/cdirks4/new-meeting",
      },
    },
    {
      name: "Narasimha Teja Reddy",
      role: "Technical Lead",
      image: "/images/narasimha.jpeg",
      bio: "Boston-based developer specializing in blockchain and AI integration. Technical Ambassador for Oasis Protocol and LAOS Network, focusing on expanding developer communities. 12x Web3 Hackathon winner with extensive experience in decentralized systems and autonomous agents.",
      achievements: [
        "ETHGlobal SF Top 10 Finalist",
        "12x Web3 Hackathon Winner",
        "Technical Ambassador",
        "Full Stack Blockchain Developer",
      ],
      education: [
        {
          school: "Northeastern University",
          degree: "Master's Degree",
          focus: "Information Systems",
        },
        {
          school: "B.M.S. College of Engineering",
          degree: "BTech",
          focus: "Mechanical Engineering",
        },
      ],
      expertise: [
        "Blockchain Development",
        "Smart Contracts",
        "Web3 Integration",
        "Decentralized Systems",
      ],
      links: {
        calendly: "https://calendly.com/cdirks4/new-meeting",
      },
    },
    {
      name: "Connor Dirks",
      role: "Software Engineer",
      image: "/images/connor.jpeg",
      bio: "Full-stack developer currently building StoryHunt, a Story-native DEX transforming stories into assets through IP and token swaps. Previously developed decentralized platforms at Flybloc and Dequency, focusing on blockchain technology, NFTs, and seamless user experiences.",
      achievements: [
        "DeFi Developer",
        "EasyA x Polkadot Winner",
        "ETHGlobal SF Top 10 Finalist",
        "Full Stack Engineer",
      ],
      education: [
        {
          school: "Self-Taught Hacker",
          degree: "Full Stack Development",
          focus: "Web3 & Blockchain",
        },
      ],
      expertise: [
        "DEX Development",
        "Story Protocol",
        "Smart Contracts",
        "Web3 Integration",
      ],
      currentWork: [
        "IP Trading Platform",
        "Concentrated Liquidity AMM",
        "Token Swap Systems",
        "IPFi Mechanics",
      ],
      links: {
        calendly: "https://calendly.com/cdirks4/new-meeting",
        email: "dirks.connor4@gmail.com",
      },
    },
  ];

  // Create refs for each section
  const photoRef = useRef(null);
  const titleRef = useRef(null);
  const membersRef = useRef(null);

  // Check if sections are in view
  const isPhotoInView = useInView(photoRef, { once: true, amount: 0.3 });
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isMembersInView = useInView(membersRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Group Photo Section */}
        <motion.div
          ref={photoRef}
          initial={{ opacity: 0 }}
          animate={isPhotoInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          {/* Outer Frame */}
          <div className="p-4 bg-gradient-to-r from-primary-light/5 to-accent-light/5 dark:from-primary-dark/5 dark:to-accent-dark/5 rounded-3xl shadow-2xl">
            {/* Inner Frame */}
            <div className="rounded-2xl overflow-hidden border-2 border-primary-light/10 dark:border-primary-dark/10 hover:border-primary-light/20 dark:hover:border-primary-dark/20 transition-all duration-300 bg-surface-light dark:bg-surface-dark shadow-lg">
              {/* Photo Container */}
              <div className="relative aspect-[21/9] w-full group">
                <Image
                  src="/images/team-daosaster.jpg"
                  alt="DisasterResponse.AI Team"
                  fill
                  className="object-cover transform hover:scale-[1.02] transition-transform duration-700"
                  priority
                />
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />

                {/* Text Overlay with Enhanced Styling */}
                <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-sm bg-gradient-to-t from-background-dark/80 to-transparent">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      ETHGlobal SF Finalists
                    </h2>
                    <p className="text-gray-200 max-w-2xl text-shadow leading-relaxed">
                      Our team at ETHGlobal San Francisco, where we developed a
                      decentralized, autonomous disaster response system
                      combining AI agents, drones, and blockchain technology.
                    </p>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Title Section */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-light dark:text-secondary-dark mb-6">
            Our Research Team
          </h1>
          <p className="text-xl text-secondary-light dark:text-secondary-dark max-w-3xl mx-auto">
            Meet the researchers working to understand and improve disaster
            response through AI and human-centered design.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div ref={membersRef} className="grid grid-cols-1 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.8,
                delay: isTitleInView ? index * 0.5 : 0,
              }}
              className="bg-surface-light/50 dark:bg-surface-dark/50 rounded-2xl p-8 backdrop-blur-sm shadow-lg border border-primary-light/10 dark:border-primary-dark/10"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Profile Image with Enhanced Frame */}
                <div className="md:col-span-1">
                  <div className="p-2 bg-gradient-to-r from-primary-light/5 to-accent-light/5 dark:from-primary-dark/5 dark:to-accent-dark/5 rounded-2xl shadow-lg">
                    <div className="relative aspect-square rounded-xl overflow-hidden border border-primary-light/10 dark:border-primary-dark/10 hover:border-primary-light/20 dark:hover:border-primary-dark/20 transition-all duration-300 group">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                      />
                      {/* Corner Accents */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/20 rounded-tl-lg" />
                      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/20 rounded-tr-lg" />
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/20 rounded-bl-lg" />
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/20 rounded-br-lg" />
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    {member.achievements.map((achievement) => (
                      <div
                        key={achievement}
                        className="text-sm text-secondary-light dark:text-secondary-dark bg-surface-light dark:bg-surface-dark rounded-full px-4 py-1 border border-primary-light/10 dark:border-primary-dark/10"
                      >
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bio and Details */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-secondary-light dark:text-secondary-dark mb-2">
                      {member.name}
                    </h2>
                    <h3 className="text-lg text-primary-light dark:text-primary-dark mb-4">
                      {member.role}
                    </h3>
                    <p className="text-secondary-light dark:text-secondary-dark">
                      {member.bio}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-secondary-light dark:text-secondary-dark mb-2">
                      Education
                    </h4>
                    {member.education.map((edu) => (
                      <div key={edu.degree} className="mb-4">
                        <p className="font-medium text-secondary-light dark:text-secondary-dark">
                          {edu.school}
                        </p>
                        <p className="text-primary-light dark:text-primary-dark">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-primary-light dark:text-primary-dark">
                          {edu.focus}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={member.links.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Schedule a Call
                    </a>
                    <a
                      href={`mailto:${member.links.email}`}
                      className="inline-flex items-center space-x-2 bg-surface-light dark:bg-surface-dark text-secondary-light dark:text-secondary-dark px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl border border-primary-light/10 dark:border-primary-dark/10 hover:border-primary-light/30 dark:hover:border-primary-dark/30 transition-all duration-300"
                    >
                      <span>Email</span>
                      <svg
                        className="w-4 h-4"
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
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
