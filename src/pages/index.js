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
            </Helmet>
            <SectionFull
              type="light" 
              overlayColourRgba="255,255,255,0.8"
              backgroundImageName="home-main.jpg"
              sectionTitle="making life beautiful"
              sectionBlurb="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonText="send me a copy"
            />
            <SectionHalfSplit
              textImagePosition="left-to-right"
              sectionTitle="hello!"
              asideImage="home-intro.jpg"
              asideImageAltText="Tantalizea leaning against the wall."
            >
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </SectionHalfSplit>
            <SectionFullSplit
              type="dark"
              articleBkgColourRgba="101,60,75,1"
              imagePosition="end"
              textImagePosition="right-to-left"
              sectionTitle="so what do I do?"
              asideImage="home-services.jpg"
              asideImageAltText="Tantalizea leaning against the wall."
            >
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Link to="/portfolio">View Portfolio</Link>
            </SectionFullSplit>
            <Carousel/>
            <SectionFullSplit
              type="light"
              articleBkgColourRgba="242,242,241,1"
              textImagePosition="left-to-right"
              sectionTitle="let's talk!"
              asideImage="home-contact.png"
              imageSize="tall"
              asideImageAltText="Tantalizea leaning against the wall."
            >
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Link to="/portfolio">Portfolio</Link>
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
