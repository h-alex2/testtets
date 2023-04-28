import CoverImage from "./CoverImage";

const PostHeader = ({ title, coverImage }) => {
  return (
    <>
      <h2 className="text-xl py-5">{title}</h2>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
};

export default PostHeader;
