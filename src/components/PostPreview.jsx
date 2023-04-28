import { useNavigate } from "react-router-dom";

const PostPreview = ({ title, slug, post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/hi");
  };

  return (
    <div className="flex flex-col pointer-cursor ">
      <h3 className="title">
        <div
          className="hover:underline pointer-cursor border"
          onClick={handleClick}
        >
          {title}
        </div>
      </h3>
      <p className="truncate whitespace-nowrap">{post}</p>
    </div>
  );
};

export default PostPreview;
