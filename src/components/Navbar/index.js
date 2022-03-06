import './styles.css';
import Menu from '../Menu';

export default function Navbar() {

    return (
        <header>
            <nav className="container">

                <div className="pokechoice-nav-content">

                    <h1 className="title">PokeChoice</h1>
                    <h2 className="subtitle">Consumo da API <a href="https://pokeapi.co/" target="_blank"
                    rel="noreferrer">PokéAPI</a></h2>

                    <Menu />
                </div>
            </nav>
        </header>
    );
}

