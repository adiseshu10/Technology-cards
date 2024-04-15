import './index.css'

const CardItem = props => {
  const {cardlist} = props
  const {title, description, imgUrl, className} = cardlist
  return (
    <li className={`${className} card-item`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img className="card-img" alt={title} src={imgUrl} />
      </div>
    </li>
  )
}

export default CardItem
