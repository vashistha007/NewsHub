import React from 'react';


const NewsItem=(props)=>{

    let { title, description, imageUrl, newsUrl, author, date } = props;

    return (
      <div>
        
        <div className="card my-3 " >
          <img
            src={imageUrl ? imageUrl : "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg"}
            className="card-img-top align-middle"
            alt="..."
           
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>


            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
