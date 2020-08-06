// Tool Imports
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"

// Page Imports
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import ProjectCollection from "./pages/ProjectCollection"
import Project from "./pages/Project"
import BlogCollection from "./pages/BlogCollection"
import BlogPost from "./pages/BlogPost"
import Inspiration from "./pages/Inspiration"
import Contact from "./pages/Contact"

// Component Imports
import NavToggle from "./components/NavToggle"
import MainLogo from "./components/MainLogo"
import MainNav from "./components/MainNav"
import Footer from "./components/Footer"
import ScrollToTop from "./assets/logic/ScrollToTop"

const GlobalReset = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `

const GlobalStyles = createGlobalStyle`
    html {
      --text-black: #000;
      --text-white: #fff;
      --primary: #566573;
      --primary-rgb: 86, 101, 115;
      --box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      --ls-wide: 1rem;
      --ls-normal: .5rem;
      --ls-narrow: .1rem;
      --font-serif: 'Playfair Display', serif;;
      --font-sans-serif: "Poppins", sans-serif;
    }

    ul {
      list-style-type: none;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    a {
      text-decoration: none;
    }

    body {
      background: white;
      @media (min-width: 600px) {
      }
      @media (min-width: 800px) {
      }
    }
`

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  font-family: var(--font-sans-serif);
  font-size: 16px;
  overflow-x: hidden;
  overflow: hidden;

  @media (min-width: 800px) {
    padding: 10rem 15% 0;
  }

  @media (min-width: 1280px) {
    margin-top: 10rem;
    padding-top: 0;
  }
`

const App = props => {
  const [navOpen, setNavOpen] = useState(false)
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  // fetch data states
  const [blogLoading, setBlogLoading] = useState(true)
  const [blogData, setBlogData] = useState([])
  const [projLoading, setprojLoading] = useState(true)
  const [projectData, setProjectData] = useState([])

  const navToggle = () => {
    setNavOpen(!navOpen)
  }

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }
    window.addEventListener("resize", handleResize, false)
    return _ => {
      window.removeEventListener("resize", handleResize, false)
    }
  })

  useEffect(() => {
    fetch(
      "https://api.cosmicjs.com/v1/0206e2d0-74c0-11ea-8c41-cf1a15c2a736/objects?pretty=true&hide_metafields=true&type=blog-posts&read_key=rJuCAICzaLkFBbQv9WflxvHiMWsivSEb8fO2vhT9UFA39BpIDp&limit=20&props=slug,title,content,metadata,"
    )
      .then(res => res.json())
      .then(data => {
        setBlogData(data.objects)
        setBlogLoading(false)
      })
      .catch(err => {
        console.log(`An error has occured: ${err}`)
      })
  }, [blogLoading])

  useEffect(() => {
    fetch(
      "https://api.cosmicjs.com/v1/0206e2d0-74c0-11ea-8c41-cf1a15c2a736/objects?pretty=true&hide_metafields=true&type=project-posts&read_key=rJuCAICzaLkFBbQv9WflxvHiMWsivSEb8fO2vhT9UFA39BpIDp&limit=20&props=slug,title,content,metadata,"
    )
      .then(res => res.json())
      .then(data => {
        setProjectData(data.objects)
        setprojLoading(false)
      })
      .catch(err => console.log(err))
  }, [projLoading])

  return (
    <React.Fragment>
      <Router>
        <GlobalReset />
        <GlobalStyles />
        <ScrollToTop />
        <NavToggle
          handleClick={navToggle}
          navIsOpen={navOpen}
          mediaWidth={dimensions.width}
        />
        <MainNav
          navIsOpen={navOpen}
          mediaWidth={dimensions.width}
          toggleNav={navToggle}
        />
        <AppWrapper>
          <MainLogo />
          <Switch>
            <Route path="/" exact>
              <Home
                blogLoading={blogLoading}
                projectLoading={projLoading}
                blogData={blogData}
                projectData={projectData}
              />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/projects" exact>
              <ProjectCollection loading={projLoading} data={projectData} />
            </Route>
            <Route path="/projects/:slug" component={Project} />
            <Route path="/blog" exact>
              <BlogCollection loading={blogLoading} data={blogData} />
            </Route>
            <Route path="/blog/:slug" component={BlogPost} />
            <Route path="/inspiration" component={Inspiration} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </AppWrapper>
      </Router>
    </React.Fragment>
  )
}

export default App
