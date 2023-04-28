const HeroPost = () => {
  return (
    <section className="mb-5">
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-10 text-4xl lg:text-5xl leading-tight">
            Welcome to my blog!
          </h3>
          <div className="text-xl">
            This is the place where I share my thoughts, experiences, and
            insights on a variety of topics.
          </div>
          <br />
          <div className="mb-4 md:mb-0 text-lg">April 28, 2023</div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
