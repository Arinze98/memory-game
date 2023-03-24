import Cards from "./Cards"
import Button from "./button"

function GameApp() {
  
  return (
    <section className="game">
      <div className='App'>
        <h1>Memory Game</h1>
        <Cards />
        <Button />
      </div>
    </section>
  )
}

export default GameApp