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
            <SectionTriple/>
        </Layout>
    )
}

export default PortfolioPage;