import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components/index.js";

const post = [
  { title: "react", excerpt: "learn react" },
  { title: "angular", excerpt: "learn angular" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {post.map((posts) => (
            <PostCard post={posts} key={posts.title} />
          ))}
        </div>
        <div className="lg-col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
