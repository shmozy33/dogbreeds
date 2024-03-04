import './App.css'
import data from './breeds.json'
import Breed from './Components/Breed'

const App = () => {
  console.log(data)
  return (
    <div className="breed-list">
      {data.breeds.map((breed) => (
        <Breed
          key={breed.id}
          image={breed.backdrop_path}
          name={breed.name}
          breed={breed.breed}
          color={breed.color}
          age={breed.age}
          size={breed.size}
        />
      ))}
    </div>
  )
}
export default App
