import React from "react";
import {Link} from 'gatsby';
import Layout from "../components/layout/layout.js";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import '../styles/index.scss';
import SectionFull from '../components/sectionFull/sectionFull';
import SectionHalfSplit from "../components/sectionHalfSplit/sectionHalfSplit.js";
import SectionFullSplit from "../components/sectionFullSplit/sectionFullSplit.js";
import Carousel from "../components/carousel/carousel.js";

const IndexPage = ({data}) => {
    return (
        <Layout>
            <Helmet htmlAttributes={{ lang : 'en' }}>
                <meta charSet="utf-8" />
                <title>{data.site.siteMetadata.title}</title>
                <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
            </Helmet>
            <SectionFull
              type="light" 
              overlayColourRgba="255,255,255,0.8"
              backgroundImageName="home-main.jpg"
              sectionTitle="Form. Function. Beauty."
            >
              <p>I design high quality, functional graphics for startups. I provide inspiration and education for aspiring designers.</p>
            </SectionFull>
            <SectionHalfSplit
              textImagePosition="left-to-right"
              sectionTitle="Hello, I’m Tantalizea."
              asideImage="home-intro.jpg"
              asideImageAltText="Tantalizea leaning against the wall."
            >
              <p>I live and breathe all things design. From branding and website user experience to social media graphics, I help businesses like yours elevate their visual
                messaging through design that speaks for itself. My eight years of experience in the web
                and graphic design world means you can rest easy, knowing your dream designs are in
                good hands. Want to make design magic? Get in touch to find out more about how I can
                create graphics for your brand, that entice, engage and inspire your clients.</p>
              <p>Graphic design may be my first love, but learning is a sure-fire second. In fact, I would
                go as far as saying I am a forever learner. Sharing my learnings with aspiring designers is
                something I am deeply passionate about. Keen to take your first step into the creative
                industry? Get in touch, I’d love to be part of your journey.</p>
            </SectionHalfSplit>
            <SectionFullSplit
              type="dark"
              articleBkgColourRgba="101,60,75,1"
              imagePosition="end"
              textImagePosition="right-to-left"
              sectionTitle="how can i help you?"
              asideImage="home-services.jpg"
              asideImageAltText="Tantalizea leaning against the wall."
            >
              <p>Capturing the attention of your target audience requires eye-catching visuals
                across a variety of platforms:</p>
              <p>Looking to offer a seamless user experience on your website? Let me take the
                reins and create functional design elements that make your customer’s journey
                through your site easy and logical.</p>
              <p>Need to up the ante with inspiring social media content on your Instagram,
                Facebook and Pinterest feed? With my scroll-stopping social media graphics,
                you’ll get your audience’s eyes right where you want them: on your feed.</p>
              <p>Want something tangible to promote your business? Convey the very essence of
                your brand through my custom print designs for business cards, brochures, and
                fliers.</p>
              <Link to="/portfolio">View Portfolio</Link>
            </SectionFullSplit>
            <Carousel/>
            <SectionFullSplit
              type="light"
              articleBkgColourRgba="242,242,241,1"
              textImagePosition="left-to-right"
              sectionTitle="Let’s talk design!"
              asideImage="home-contact.png"
              imageSize="tall"
              asideImageAltText="Tantalizea leaning against the wall."
            >
              <p>I can’t wait to hear about your design requirements and start creating eye-catching graphics for your business. Schedule a meeting and let’s start the design journey today!</p>
              <Link to="/portfolio">Schedule meeting</Link>
            </SectionFullSplit>
        </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`

export default IndexPage;
