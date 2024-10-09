import blogs from "../../constants/data.json"
import Card from "../../components/card/Card.jsx";
import "./OverView.css";

function OverView() {
  return (
    <>
      <h1>Bekijk alle {blogs.length} posts op het platform</h1>
      <div className="overview">
        {
          blogs.map(blog => (
              <Card
                key={blog.id}
                className={"overview-card"}
                title={blog.title}
                author={blog.author}
                comments={blog.comments}
                shares={blog.shares}
                id={blog.id -  1}
              />
            )
          )
        }
      </div>
    </>
  )
}

export default OverView;