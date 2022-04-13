import { Button } from "@mantine/core";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function Home({ posts }: { posts: any }) {
  return (
    <Wrapper>
      <Button>TEST</Button>
      <Button>TEST</Button>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img> <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img> <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <img src="./vercel.svg" style={{ width: "100px" }}></img>
      <Button>TEST</Button>
      <Button>TEST</Button>
      <Button>TEST</Button>
      <Button>TEST</Button>
      <Button>TEST</Button>
      <Button>TEST</Button>
      <Button>TEST</Button>
      <Button>TEST</Button>
      <Button>TEST</Button>
      <Button>TEST</Button>
      <Button>TEST</Button>
    </Wrapper>
  );
}
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   // const res = await fetch("https://.../posts");
//   // const posts = await res.json();
//   const posts = "CUONG";
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default Home;
