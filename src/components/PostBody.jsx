import markdownStyles from "./markdown-styles.module.css";

const PostBody = ({ content }) => {
  console.log({ content });
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div>{content}</div>
    </div>
  );
};

export default PostBody;
