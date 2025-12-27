import Head from "next/head";
import Navbar from "@/components/NavBar/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/AboutSection/About";
import Experience from "@/components/Experience";
import Projects from "@/pages/Projects";
import Archieve from "@/components/Archieve";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import LazySection from "@/components/LazySection";
export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Gamal Ezzat | Backend & Full Stack Engineer</title>
        <meta
          name="description"
          content="Backend & Full Stack Engineer specializing in secure payment systems, real-time features, and scalable automation workflows."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.png" />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />

        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          {/* Left Sidebar - Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>

          {/* Main Content */}
          <div className="h-[88vh] w-full mx-auto p-4">
            {/* Banner - No lazy load (above the fold) */}
            <Banner />

            {/* Experience - Lazy loaded */}
            <LazySection delay={0.1}>
              <Experience />
            </LazySection>

            {/* Projects - Lazy loaded */}
            <LazySection delay={0.2}>
              <Projects />
            </LazySection>

            {/* About - Lazy loaded */}
            <LazySection delay={0.1}>
              <About />
            </LazySection>

            {/* Contact - Lazy loaded */}
            <LazySection delay={0.1}>
              <Contact />
            </LazySection>

            {/* Footer */}
            <Footer />
          </div>

          {/* Right Sidebar - Email */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
