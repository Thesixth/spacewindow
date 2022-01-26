function ImageCard({ image, handleLikes, likes }) {
  return (
    <li>
      <div className="card">
        <img className="card-img" src={image.hdurl} alt="" />
        <h2>{image.title}</h2>
        <p>Date of capture: {image.date}</p>
        <button
          id={image.title}
          className="iconButton"
          onClick={() => handleLikes(image.title)}
        >
          {likes.includes(image.title) ? (
            <>
              <i className="like fa fa-heart" />
              <h3>You like this</h3>
            </>
          ) : (
            <i className="fa fa-heart" />
          )}
        </button>
      </div>
    </li>
  );
}

export default ImageCard;
