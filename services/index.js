import { request, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPostDetails = async (slug) => {
    const query = gql`
    query Assets($slug: String!) {
      post(where: {slug: $slug}) {
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        content {
          html
        }
      }
    }    
    `;

    const result = await request(graphqlAPI, query, { slug });

    return result.post;
};

export const getLeiter = async () => {
  const query = gql`
  query MyQuery {
    leitersConnection(orderBy: gruppe_ASC) {
      edges {
        node {
          aemtli
          email
          gruppe
          image {
            url
          }
          kurse
          name
          taufname
        }
      }
    }
  }  
  `;

    const result = await request(graphqlAPI, query);

    return result.leitersConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection(
      orderBy: publishedAt_DESC
      last: 4
      where: {categories_some: {slug: "aktuelles"}}
    ) {
      edges {
        node {
          createdAt
          excerpt
          featuredImage {
            url
          }
          slug
          title
        }
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};