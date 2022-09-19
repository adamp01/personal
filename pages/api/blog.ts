import { getOrderedBlogPosts } from '../../utils/blog';
import type { NextApiRequest, NextApiResponse } from 'next'
import type { BlogPosts } from '../../types/blog'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPosts>
) {
  const { page, range } = req.query;
  const pageInt = parseInt(Array.isArray(page) ? page[0] : page ?? '1');
  const rangeInt = parseInt(Array.isArray(range) ? range[0] : range ?? '5');
  const { posts } = getOrderedBlogPosts(pageInt, rangeInt, 'dateDesc')

  res.status(200).json(posts);
}
