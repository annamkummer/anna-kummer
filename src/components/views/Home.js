import '../../../src/scss/Home.scss'
import photo from '../../../src/assets/photo.jpeg'

function Home() {

    return (
        <div className="home">
            <h1 className="home-title">Anna Kummer • Web Developer</h1>
            <img className="amk" src={photo} alt="Anna Kummer" />
        </div>
    )
}

export default Home