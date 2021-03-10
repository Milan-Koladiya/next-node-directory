import Head from 'next/head'
import styles from '../styles/Home.module.css'
import path from 'path'

// This will execute before page render and it render on server side
export const getStaticProps = ({context}) => {
  console.log("getStaticProps => ");
  const fs = require('fs')
  const txt = fs.readFileSync(path.join(process.cwd(),'public/robots.txt'),'utf-8');

  return {
    props: {
      revalidate: 10,
      txt
    }
  }
}

export default function Home(props) {
  return (
   <h1>Hello In index.js ::: {props.txt}</h1>
  )
}
