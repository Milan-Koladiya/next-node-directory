import { useRouter } from 'next/router';
import React from 'react'

const Post = () => {
    const router = useRouter()
    console.log(" About Router => ", router);
    return (
        <h1>This is post with all slug [ /post/post1/post1 ] but not [ /post] page</h1>
    )
}

export default Post