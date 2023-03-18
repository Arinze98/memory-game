import Nav from './nav'
function App() {

    return (
        <main>
            <Nav />
            
            <section className='content'>
                <article>
                    <h5>popular this week!</h5>
                    <h1>memory game</h1>
                    <h1>version 1.0</h1>
                    <p>
                        Challenge your brain with our fun and addictive memory game.
                    </p>
                    <a href="#"><button>play now</button></a>
                </article>
            </section>

            <div className="container">
                <div className="box1">
                    <h2>total downloads</h2>
                    <p>10k+</p>
                </div>
                <div className="box1">
                    <h2>currently playing</h2>
                    <p>3k+</p>
                </div>
                <div className="box1">
                    <h2>high score</h2>
                    <p>500 points</p>
                </div>
            </div>

            <div className="container2">
                <div className="box">
                    <h2>how to play</h2>
                    <ul>
                        <li>The game consists of a grid of cards with hidden symbols.</li>
                        <li>Flip over two cards at a time to reveal their symbols.</li>
                        <li>If the symbols match, the cards will stay face up and you'll earn points.</li>
                        <li>If the symbols don't match, the cards will flip back over and you'll need to try again.</li>
                        <li>The game ends when you've matched all the pairs.</li>
                    </ul>
                </div>
                
                <div className="box">
                    <h2>features</h2>
                    <ul>
                        <li>Multiple levels of difficulty to suit all skill levels.</li>
                        <li>Choose from a variety of card sets, including animals, emojis, and more.</li>
                        <li>Play solo or challenge your friends to see who can get the highest score.</li>
                        <li>Track your progress and see how you stack up against other players on the leaderboard.</li>
                    </ul>
                </div>
            </div>


        </main>
    )
}


export default App;