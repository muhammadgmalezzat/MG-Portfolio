import Head from 'next/head'
import Navbar from '@/components/NavBar/Navbar'
import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'
import { motion } from 'framer-motion'
import Banner from '@/components/Banner'
import About from '@/components/AboutSection/About'
import Experience from '@/components/Experience'
import Projects from '@/pages/Projects'
import Archieve from '@/components/Archieve'
import { Contact } from '@/components/Contact'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>MG&#39; Portfolio</title>
        <meta name="description" content="portfolio" />
        <link rel='icon' href='/assets/images/logo.png' />
      </Head>
      <main
        className='w-full h-screen font-bodyFont bg-bodyColor text-textLight  overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60' >
        <Navbar />
        <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between '>
          <motion.div
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            transition={{delay:1.5 }}
            className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0 '
          >
            <LeftSide />
          </motion.div>

          <div className='h-[88vh] w-full mx-auto p-4'>
            <Banner />
            <About />
            <Experience />
            <Projects />
            {/* <Archieve /> */}
            <Contact />
            <Footer />


          </div>
            
          <motion.div
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            transition={{delay:1.5 }}
            className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0 '
          >
            <RightSide/>
          </motion.div>

        </div>
      </main>
    </div>
  )
}
