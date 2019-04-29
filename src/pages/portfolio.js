import React from 'react';
import {Link, useStaticQuery} from 'gatsby';
import Layout from "../components/layout/layout.js";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import '../styles/index.scss';
import SectionFull from '../components/sectionFull/sectionFull';
import SectionHalfSplit from "../components/sectionHalfSplit/sectionHalfSplit.js";
import SectionFullSplit from "../components/sectionFullSplit/sectionFullSplit.js";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import SectionTriple from '../components/sectionTriple/sectionTriple.js';

const PortfolioPage = () => {
const data = useStaticQuery(graphql`
    query {
        allContentfulPortfolioItem {
            edges {
                node {
                    title
                    slug
                    body {
                        json
                    }
                    image {
                        file {
                            url
                        }
                        description
                    }
                }
            }
        }
    }
`)

    return (
        <Layout>
            {data.allContentfulPortfolioItem.edges.map((edge, key) => {
                return (
                    <SectionFullSplit
                        key={key}
                        type="light"
                        articleBkgColourRgba="255,255,255,1"
                        imagePosition="center"
                        textImagePosition="left-to-right"
                        sectionTitle={edge.node.title}
                        asideImage={edge.node.image.file.url}
                        asideImageAltText={edge.node.image.description}
                        >
                        {documentToReactComponents(edge.node.body.json)}
                    </SectionFullSplit>
                )
            })}
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
            <SectionTriple/>
        </Layout>
    )
}

export default PortfolioPage;