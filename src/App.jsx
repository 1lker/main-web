import React, {useEffect} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import FAQSection from './Sections/FAQSection'
import { OuterLayout } from './styles/Layout'
import ScrolledButton from "./components/ScrolledButton"
const App = () => {

  return (
  <>
    <Header />
    <Nav />
    <OuterLayout>
      <main>
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <FAQSection />
      </main>
    </OuterLayout>
    <Contact />
    <Footer />
    <ScrolledButton />
  </>
  )
};

export default App;