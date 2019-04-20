import React from "react";
import {Link} from 'gatsby';
import Layout from "../components/layout/layout.js";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import '../styles/index.scss';
import SectionFull from '../components/sectionFull/sectionFull';
import SectionHalfSplit from "../components/sectionHalfSplit/sectionHalfSplit.js";

const IndexPage = ({data}) => {
    console.log(data);
    return (
        <Layout>
            <Helmet>
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
