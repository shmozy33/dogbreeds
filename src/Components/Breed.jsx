const Breed = (props) => {
  return (
    <div className="breeds">
      <img src={props.image} />
      <h4>{props.name}</h4>
      <p>Breed: {props.breed}</p>
      <p>Color: {props.color}</p>
      <p>Age: {props.age}</p>
      <p>Size: {props.size}</p>
    </div>
  )
}

export default Breed
