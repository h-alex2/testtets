import cn from "classnames";

const CoverImage = ({ title, src, slug }) => {
  return (
    <div className="sm:mx-0">
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MlatNnQUaDRjxlh35YVZRg.png"
        alt={`Cover Image for ${title}`}
        className={cn("shadow-sm w-full", {
          "hover:shadow-lg transition-shadow duration-200": slug,
        })}
        width={1300}
        height={630}
      />
    </div>
  );
};

export default CoverImage;
