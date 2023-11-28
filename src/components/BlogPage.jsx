import React, {useEffect} from 'react'
import BlogCard from './BlogCard'
import { blogData } from '../constants'

const BlogPage = () => {
   const blogs = blogData
  return (
    <div id='document'>
      <div>
        <BlogCard blogs={blogs}/>
      </div>
    </div>
  )
}

export default BlogPage
