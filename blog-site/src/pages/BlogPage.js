import Header from "../components/Header";
import { my_blogs } from "../blogs";
import { useLocation } from "react-router-dom";

const BlogPage = () => {
  let {state} = useLocation()
  let blog_id = state.blog_id;

  return (
    <div>
      <Header />
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">{my_blogs[blog_id].title}</h1>
          <div className="blog-subcontents">
            <p className="blog-author">{my_blogs[blog_id].author}</p>
            <p className="blog-date">{my_blogs[blog_id].date}</p>
          </div>
          <img src="./bgcolr.jpg" className="hero-image" alt="" />
          <div className="blog-content">
            <h4 className="blog-text">{my_blogs[blog_id].title1}</h4>
            <p className="blog-text">{my_blogs[blog_id].content}</p>
            <p className="blog-text">{my_blogs[blog_id].content1}</p>
            <p className="blog-text">{my_blogs[blog_id].content2}</p>
            <p className="blog-text">{my_blogs[blog_id].content3}</p>
            <h4 className="blog-text">{my_blogs[blog_id].title2}</h4>
            <p className="blog-text">{my_blogs[blog_id].content4}</p>
            <p className="blog-text">{my_blogs[blog_id].content5}</p>
            <p className="blog-text">{my_blogs[blog_id].content6}</p>
            <p className="blog-text">{my_blogs[blog_id].content7}</p>
            <h4 className="blog-text">{my_blogs[blog_id].title3}</h4>
            <p className="blog-text">{my_blogs[blog_id].content8}</p>
            <p className="blog-text">{my_blogs[blog_id].content9}</p>
            <h4 className="blog-text">{my_blogs[blog_id].title4}</h4>
            <p className="blog-text">{my_blogs[blog_id].content10}</p>
            <p className="blog-text">{my_blogs[blog_id].content11}</p>
            <p className="blog-text">{my_blogs[blog_id].content12}</p>
            <p className="blog-text">{my_blogs[blog_id].content13}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;