import React, { useEffect } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Fun1 = React.forwardRef(({onClick, href},ref) => {
    return (
        <a href={href} ref={ref} onClick={onClick}>Go to Home page</a>
    )
})

const Daynamic = (props) => {
    const router = useRouter()

    useEffect(() => {
        console.log("router => ", router);
    }, [])

    console.log("props => ", props);
    return (
        <>
        <h1>This is Daynamic page</h1>
        <Link href="/home" passHref><Fun1/></Link>
        </>
    )
}

export default Daynamic