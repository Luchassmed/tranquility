import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const websites = [
  {
    id: 1,
    name: "European Audiohire",
    url: "https://www.europeanaudiohire.com/",
  },
  {
    id: 2,
    name: "Det Grønne Forskernetværk",
    url: "https://www.dgfn.org/",
  },
  {
    id: 3,
    name: "Colonzone",
    url: "https://colonzone.dk/",
  },
  {
    id: 4,
    name: "Polyrattan",
    url: "https://www.polyrattan.dk/",
  },
];

export default function Portfolio({ repos }) {
  const [selectedTab, setSelectedTab] = useState("repos");

  // Filter and sort repos - show only public repos with descriptions
  const filteredRepos = repos
    .filter((repo) => !repo.fork && repo.description)
    .slice(0, 6)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="border-4 border-black p-6 inline-block">
            <h2 className="text-5xl md:text-6xl font-black uppercase">
              My Work
            </h2>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-start mb-12">
          <div className="flex gap-0 border-4 border-black">
            <button
              onClick={() => setSelectedTab("repos")}
              className={`px-8 py-4 font-black uppercase text-sm border-r-4 border-black transition-all ${
                selectedTab === "repos"
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              GitHub
            </button>
            <button
              onClick={() => setSelectedTab("websites")}
              className={`px-8 py-4 font-black uppercase text-sm transition-all ${
                selectedTab === "websites"
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Websites
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {selectedTab === "repos" ? (
            <motion.div
              key="repos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredRepos.map((repo, index) => (
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-white border-4 border-black p-6 hover:bg-black hover:text-white transition-all duration-200 flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="border-2 border-black p-2 bg-white group-hover:bg-black group-hover:border-white transition-all">
                      <CodeBracketIcon className="w-5 h-5 text-black group-hover:text-white" />
                    </div>
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 uppercase">
                    {repo.name}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
                    {repo.description}
                  </p>
                  {repo.language && (
                    <div className="flex items-center gap-2 text-xs font-bold pt-4 border-t-2 border-black group-hover:border-white mt-auto">
                      <span className="w-3 h-3 bg-black group-hover:bg-white border-2 border-black group-hover:border-white"></span>
                      {repo.language}
                    </div>
                  )}
                </motion.a>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="websites"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {websites.map((website, index) => (
                <motion.a
                  href={website.url}
                  target="_blank"
                  rel="noreferrer"
                  key={website.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`group border-4 border-black p-8 transition-all duration-200 ${
                    website.url === "#"
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-white hover:bg-black hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-black">
                      {String(website.id).padStart(2, "0")}
                    </span>
                    {website.url !== "#" && (
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    )}
                  </div>
                  <h3 className={`text-lg font-black uppercase ${
                    website.url === "#" ? "text-gray-500" : ""
                  }`}>
                    {website.name}
                  </h3>
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
