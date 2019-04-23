import React from 'react';
import {Link, useStaticQuery} from 'gatsby';
import Layout from "../components/layout/layout.js";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import '../styles/index.scss';
import SectionFull from '../components/sectionFull/sectionFull';
import SectionHalfSplit from "../components/sectionHalfSplit/sectionHalfSplit.js";
import SectionFullSplit from "../components/sectionFullSplit/sectionFullSplit.js";

const PortfolioPage = () => {
const data = useStaticQuery(graphql`
    query {
        allContentfulPortfolioSection (sort: {order: DESC}) {
            edges {
                node {
                    title
                    slug
                    content
                    image
                }
            }
        }
    }
`)

    return (
        <Layout>
            <SectionFullSplit
              type="light"
              articleBkgColourRgba="255,255,255,1"
              imagePosition="center"
              textImagePosition="left-to-right"
              sectionTitle="la mink lashes"
              asideImage="computer-monitor-png-image.png"
              asideImageAltText="La minx project on a large Apple screen."
            >
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </SectionFullSplit>
            <SectionFullSplit
              type="light"
              articleBkgColourRgba="237,235,237,1"
              imagePosition="end"
              textImagePosition="right-to-left"
              sectionTitle="gathering information"
              asideImage="stacked-docs.png"
              asideImageAltText="Stacked documents"
            >
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </SectionFullSplit>
            <SectionFullSplit
              type="light"
              articleBkgColourRgba="255,255,255,1"
              imagePosition="center"
              textImagePosition="left-to-right"
              sectionTitle="icon design"
              asideImage="icon-design.png"
              asideImageAltText="Icon design examples."
            >
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </SectionFullSplit>
        </Layout>
    )
}

export default PortfolioPage;