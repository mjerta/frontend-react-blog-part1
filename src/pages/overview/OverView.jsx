import blogs from "../../constants/data.json"
import Card from "../../components/card/Card.jsx";
import "./OverView.css";

function OverView() {
  return (
    <>
      <h1>Over View</h1>
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
              />
            )
          )
        }
      </div>
    </>
  )
}

export default OverView;