import Header from "../components/Header";
import "./AuthorPage.css"
 
const AuthorPage = () => {
  return ( 
    <div>
      <Header/>
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">About the Author: Abi</h1>
          <img src="./" className="hero-image" alt="" />
          <div className="blog-content">
            <p className="blog-text">I believe that the main reason is that front-end development satisfies my need for creativity. It enabled me to easily put my ideas into digital form and get results back really quick. I still remember the first time I created an HTML page and opened it in the browser. A whole new world of possibilities appeared before my eyes. I became really passionate and kept creating since then. I’m really grateful that I’m able to make a living through it and made my passion my work. It absolutely has its ups and downs but if you love what you do and are able to provide value to people, the outcomes are far more rewarding! :-)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AuthorPage;