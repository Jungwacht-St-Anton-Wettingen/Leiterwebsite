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

    const result = await request(graphqlAPI, query, { slug }, { cacheTime: 60 });

    return result.post;
};

export const getAemtliDetails = async (name) => {
  const query = gql`
  query MyQuery($name: ID!) {
    aemtli(where: {id: $name}) {
      leiters {
        aemtli
        email
        gruppe
        kurse
        name
        taufname
        telefon
      }
      name
      foto {
        url
      }
    }
  }
  
  `;

  const result = await request(graphqlAPI, query, { name }, { cacheTime: 60 });

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

    const result = await request(graphqlAPI, query, { cacheTime: 60 });

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

  const result = await request(graphqlAPI, query, { cacheTime: 60 });

  return result.postsConnection.edges;
};