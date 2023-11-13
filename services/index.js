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

export const getAemtliDetails = async (aemtliName) => {
  const query = gql`
  query MyQuery($aemtliName: String!) {
    aemtli(where: {name: $aemtliName}) {
      leiters {
        aemtli
        email
        gruppe
        kurse
        name
        taufname
      }
      name
      foto {
        url
      }
    }
  }
      
  `;

  const result = await request(graphqlAPI, query, { aemtliName });

  return result.aemtli;
};

export const getLeiter = async () => {
  //first: anpassen wenn mehr leiter vorhanden. leer = es werden nur 10 aufgelistet
  const query = gql`
  query MyQuery {
    leitersConnection(orderBy: jahrgang_DESC, first: 20) {
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