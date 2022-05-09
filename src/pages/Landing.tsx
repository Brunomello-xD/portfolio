import { Navbar } from '../components/Navbar'
import { Container, Home, Button, About } from '../styles/pages/Landing'
import { useFetch } from '../hooks/useFetch'

type githubProps = {
    id: number
    name: string
}

export function Landing() {
    const { data } = useFetch<githubProps>(
        'https://api.github.com/users/Brunomello-xD'
    )

    console.log(data)

    return (
        <Container>
            <Navbar />
            <Home>
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Olá, meu nome é</div>
                        <div className="text-2">{data?.name}</div>
                        <div className="text-3">
                            Eu sou desenvolvedor
                            <span> front-end</span>
                        </div>
                        <br />
                        <br />
                        <Button to="/">Contrate-me</Button>
                    </div>
                </div>
            </Home>
            {/**
             * Sobre
             */}
            <About>
                <div className="max-width">
                    <div className="about-content">
                        <h2 className="title">Sobre</h2>
                        <div className="column left"></div>
                    </div>
                </div>
            </About>
        </Container>
    )
}
