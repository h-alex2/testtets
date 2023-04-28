import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./components/Layout";
import HeroPost from "./components/HeroPost";
import MoreStories from "./components/MoreStories";
import PostPreview from "./components/PostPreview";

export const schema = {
  schemaName: "post",
  schema: {
    title: "post",
    type: "object",
    properties: {
      picture: {
        type: "string",
        description: "text",
      },
      title: {
        type: "string",
        description: "textarea",
      },
      slug: {
        type: "string",
        description: "text",
      },
      post: {
        type: "string",
        description: "textarea",
      },
    },
  },
};

const test = [
  {
    picture:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MlatNnQUaDRjxlh35YVZRg.png",
    title: "Where does it come from?",
    post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function Home() {
  const [posts, setPosts] = useState([]);

  // TODO
  const schemaName = "posts";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0TmFtZSI6ImphYW0tdG9hc3QtYmxvZyIsImlhdCI6MTY4MjY2MDA1N30.0wERiY_GrTVAZqRwm2qNAZkc_oErq7KiKLpsKM-W4yU";

  const token2 =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0TmFtZSI6Imh5dW5qdW5nLXRlc3QtdGhyZWUiLCJpYXQiOjE2ODI2NjQ1ODJ9.RTPPM_IAdcLtb104Srye5r6egzyxxOJjSxQb_SMgZmI";

  useEffect(() => {
    (async () => {
      const { data } = await axios(
        `http://localhost:8000/api/storage/${schemaName}/contents`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token2}`,
          },
        }
      );

      console.log(data);

      if (!data) return;

      setPosts(data.result);
    })();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-5">
        <div className="px-5">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Blog.
          </h1>
          <HeroPost />
        </div>
        {posts && (
          <section className="p-5">
            <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
              {posts.map((post) => (
                <PostPreview
                  title={post.title}
                  key={post._id}
                  slug={post._id}
                  post={post.post}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
