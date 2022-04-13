import styled from "styled-components";
import Image from "next/image";
const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px; */
`;

function Home({ posts }: { posts: any }) {
  return <Wrapper>{/* <Image src="/vercel.svg" alt="Picture of the author" width={50} height={50} style={{ border: "1px solid black!important" }} /> */}</Wrapper>;
}
export async function getStaticProps() {
  const posts = "HOME PAGE";
  return {
    props: {
      posts,
    },
  };
}

export default Home;
