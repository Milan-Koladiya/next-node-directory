import { useRouter } from "next/router";
import React from "react";

// This will run only server-side // and it run before page is render  // if we want to pass a data in component then we should use useEffect OR getstaticprops
// This will only run in page not daynamic in page
const getStaticProps = (contaxt) => {
  return {
    revalidate: 10,
    props: {
      myFavNum: Math.random(),
    },
  };
};

// this page only run with /post1 || /post2 || /post3 when fallback is false
// if fallback is true this page run evry route 
// this function make fats run  beacause when we visit /post1 for first time it will create static file in locally when we run /post1 for second time it will not run hall page just run that file // This will run only on production
const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          name: "post1",
        },
      },
      {
        params: {
          name: "post2",
        },
      },
      {
        params: {
          name: "post3",
        },
      },
    ],
    fallback: false,
  };
};

const Post = (props) => {
  const router = useRouter();

  if(router.isFallback){
      <h1>Loading ....</h1>
  }

  console.log(" About Router => ", router);
  return (
    <>
      <h1>
        This is post with all slug [ /post/post1/post1 ] but not [ /post] page
      </h1>
      <h2>{props.myFavNum}</h2>
    </>
  );
};

export default Post;
