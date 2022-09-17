/** @type {import('next').NextConfig} */
import remarkFrontmatter from 'remark-frontmatter'
import nextMDX from '@next/mdx'

export const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
})

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})