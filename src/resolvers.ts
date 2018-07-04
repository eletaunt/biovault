export const resolvers = {
  Query: {
    name: {
      first: (_: any) => `First name`,
      middle: () => `Middle name`,
      last: () => `Last name`
    }
  },
}