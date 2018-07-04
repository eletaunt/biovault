export const mocks = {
  Query: () => ({
    name: () => ({
      first: () => "Robert",
      middle: () => `Atkins`,
      last: () => `Smith`,
    })
  })
}