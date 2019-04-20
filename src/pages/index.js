import React from "react";
import {Link} from 'gatsby';
import Layout from "../components/layout/layout.js";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import '../styles/index.scss';
import SectionFull from '../components/sectionFull/sectionFull';
import SectionHalfSplit from "../components/sectionHalfSplit/sectionHalfSplit.js";
import SectionFullSplit from "../components/sectionFullSplit/sectionFullSplit.js";
import Button from "../components/button/button.js";

const IndexPage = ({data}) => {
    console.log(data);
    return (
        <Layout>
            <Helmet htmlAttributes={{ lang : 'en' }}>
                <meta charSet="utf-8" />
                <title>{data.site.siteMetadata.title}</title>
                <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
            </Helmet>
            <SectionFull 
              overlayColourRgba="255,255,255,0.5"
              backgroundImageName="home-main.jpg"
              sectionTitle="making life beautiful"
              sectionBlurb="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonText="send me a copy"
            />
            <SectionHalfSplit
              textImagePosition="left-to-right"
              articleText="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              asideImage="home-intro.jpg"
              asideImageAltText="Tantalizea leaning against the wall."
            />
            <SectionFullSplit
              articleBkgColourRgba="101,60,75,1"
              textImagePosition="right-to-left"
              articleText="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              asideImage="home-services.jpg"
              asideImageAltText="Tantalizea leaning against the wall."
            >
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
