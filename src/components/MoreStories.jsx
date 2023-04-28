import PostPreview from "./PostPreview";

const MoreStories = ({ posts }) => {
  return (
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
  );
};

export default MoreStories;
