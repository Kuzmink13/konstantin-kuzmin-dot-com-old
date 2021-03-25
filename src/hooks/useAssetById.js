/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

export default function useAssetById(id) {
  const query = graphql`
    query {
      allContentfulAsset {
        edges {
          node {
            contentful_id
            title
            gatsbyImageData(width: 640, formats: [AUTO, WEBP])
          }
        }
      }
    }
  `;
  const { allContentfulAsset } = useStaticQuery(query);

  const asset = allContentfulAsset.edges.filter(
    (edge) => edge.node.contentful_id === id
  )[0].node;

  return [getImage(asset), asset.title];
}
