export const typeDefs = `
  type Query {
    name: Name
  }

  type Name {
    first: String!
    middle: String!
    last: String!
  }
`
