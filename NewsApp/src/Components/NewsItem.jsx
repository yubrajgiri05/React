import image from '../assets/news.png'
const NewsItem = ({ title, description, author, url,src,publishedAt }) => {
  return (
    <>
    <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card">
        <img src={src?src:image} className="card-img-top" alt="..." style={{height:"200px"}} />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
          <p className="card-author">{author?author.slice(0,20):"Ram Bahadur"}</p>
          <p className="card-publishedAt">{publishedAt?publishedAt.slice(0,20):"2023-05-87"}</p>
          </div>
          <h4 className="card-title">{title?title.slice(0,50):"it is not very uniform to do so so jfh hffi hfhfi bdhfi"}</h4>
          <p className="card-description">{description?description.slice(0,90):"it is not very uniform to do so so jfh hffi hfhfi bdhfi"}</p>
          <a href={url} className="btn btn-primary" target="_blank">Read more</a>
        </div>
        </div>
      </div>
    </>
  )
}

export default NewsItem

