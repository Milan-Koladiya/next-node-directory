import React from 'react'
import { useRouter } from 'next/router'

const About = () => {
    const router = useRouter()
    console.log(" About Router => ", router);
    return (
        <h1>This is post with all slug [ /about/about1/about1 ] but also [ /about] page</h1>
    )
}

export default About