import { useQuery, gql } from "@apollo/client";

const avocadoFragment = `
  id
  image
  name
  createdAt
  sku
  price
  attributes {
    description
    taste
    shape
    hardiness
  }
`;

const GET_AVOCADOS = () => {
  const query = gql`
    query GetAllAvos {
      avos{
        ${avocadoFragment}
      }
    }
  `;
  return useQuery(query);
};

const GET_AVOCADO = (id: number | string) => {
  const query = gql`
  query GetAvo($avoId: ID!) {
      avo(id: $avoId) {
        ${avocadoFragment}
      }
    }
  `;

  return useQuery(query, { variables: { avoId: id } });
};

export { GET_AVOCADOS, GET_AVOCADO };
