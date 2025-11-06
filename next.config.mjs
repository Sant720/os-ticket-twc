import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  }
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  reactStrictMode: true,
})