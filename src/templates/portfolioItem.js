import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout/layout';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import SectionFullSplit from "../components/sectionFullSplit/sectionFullSplit.js";

export const query = graphql`
    query($slug: String!){
        contentfulPortfolioItem(slug: {eq: $slug}) {
            title
            section1
            section2
            body {
                json
            }
            section1Body {
                json
            }
            section2Body {
                json
            }
            image {
                file {
                    url
                }
                description
            }
            section1Image {
                file {
                    url
                }
                description
            }
            section2Image {
                file {
                    url
                }
                description
            }
        }
    }
`

const PortfolioItem = props => {
    return(
        <Layout>
            <SectionFullSplit
              type="light"
              articleBkgColourRgba="255,255,255,1"
              imagePosition="center"
              textImagePosition="left-to-right"
              sectionTitle={props.data.contentfulPortfolioItem.title}
              asideImage={props.data.contentfulPortfolioItem.image.file.url}
              asideImageAltText={props.data.contentfulPortfolioItem.image.description}
            >
              {documentToReactComponents(props.data.contentfulPortfolioItem.body.json)}
            </SectionFullSplit>
            
            <SectionFullSplit
              type="light"
              articleBkgColourRgba="237,235,237,1"
              imagePosition="end"
              textImagePosition="right-to-left"
              sectionTitle={props.data.contentfulPortfolioItem.section1}
              asideImage={props.data.contentfulPortfolioItem.section1Image.file.url}
              asideImageAltText={props.data.contentfulPortfolioItem.section1Image.description}
            >
              {documentToReactComponents(props.data.contentfulPortfolioItem.section1Body.json)}
            </SectionFullSplit>
            <SectionFullSplit
              type="light"
              articleBkgColourRgba="255,255,255,1"
              imagePosition="center"
              textImagePosition="left-to-right"
              sectionTitle={props.data.contentfulPortfolioItem.section2}
              asideImage={props.data.contentfulPortfolioItem.section2Image.file.url}
              asideImageAltText={props.data.contentfulPortfolioItem.section2Image.description}
            >
              {documentToReactComponents(props.data.contentfulPortfolioItem.section2Body.json)}
            </SectionFullSplit>
        </Layout>
    )
}

export default PortfolioItem;