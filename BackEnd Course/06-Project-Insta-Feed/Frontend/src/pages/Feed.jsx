import React,{useState} from 'react'

const Feed = () => {

  const [posts, setPosts] = useState([
    {
        _id : 1,
        image : 'https://ik.imagekit.io/mudassir7987/image_mp9xpREMV.jpg',
        caption : 'This is a beautiful picture of nature.'
    }
  ])

  return (
    <section className = 'feed-section'>
        <h1>Feed</h1>

        <div className = 'posts-container'>
            {
                posts.map((post) => (
                    <div className = 'post-card' key = {post._id}>
                        <img src = {post.image} alt = 'Post' />
                        <p>{post.caption}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Feed
