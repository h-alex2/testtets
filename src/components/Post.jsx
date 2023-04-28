import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import Container from "./Container";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import classNames from "classnames";

const test = [
  {
    picture:
      "https://user-images.githubusercontent.com/59520911/205429514-5171a3f9-e0cd-47e9-985a-5a190060d619.svg",
    title: "testtt",
    slug: "testet",
    post: "asfsasdfsdfsdffdsafddf",
  },
];

export default function Post() {
  const [posts, setPosts] = useState(test[0]);

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
      {posts && (
        <Container>
          <article className="mb-32">
            {/* <PostHeader title={posts.title} coverImage={posts.picture} /> */}
            <>
              <h2 className="text-xl py-5">{posts.title}</h2>
              <div className="mb-8 md:mb-16 sm:mx-0">
                <div className="sm:mx-0">
                  <img
                    src={posts.picture}
                    alt={`Cover Image for ${posts.title}`}
                    className={
                      "shadow-sm w-full hover:shadow-lg transition-shadow duration-200"
                    }
                    width={1300}
                    height={630}
                  />
                </div>
              </div>
            </>
            <PostBody content={posts.post} />
          </article>
        </Container>
      )}
    </Layout>
  );
}
