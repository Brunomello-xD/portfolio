import { useQuery } from 'react-query'

import { Navbar } from '../components/Navbar'
import { Container, Home, Button, About } from '../styles/pages/Landing'

import api from '../services/api'

type githubProps = {
    id: number
    name: string
    avatar_url: string
}

export function Landing() {
    const { data, isFetching } = useQuery<githubProps>(
        'repos',
        async () => {
            const response = await api.get('/users/Brunomello-xD')

            return response.data
        },
        {
            staleTime: 1000 * 60 // 1 minuto
        }
    )

    return (
        <Container>
            {isFetching && <p>Carregando...</p>}
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
                        <Button to="/">
                            <span>Contrate-me</span>
                        </Button>
                    </div>
                </div>
            </Home>
            {/**
             * About
             */}
            <About className="about" id="about">
                <div className="max-width">
                    <h2 className="title">Sobre</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={data?.avatar_url} />
                        </div>
                        <div className="column right">
                            <div className="text">
                                Sou Bruno e sou desenvolvedor
                                <span> front-end</span>
                            </div>
                            <p>
                                Atualmente trabalho na Conexão Telecom, uma
                                empresa de telecomunicações onde sou suporte
                                técnico de campo onde desempenho as funções de
                                ativador, manutenção e agendamento de visita
                                técnica. Atualmente trabalho na Conexão Telecom,
                                uma empresa de telecomunicações onde sou suporte
                                técnico de campo onde desempenho as funções de
                                ativador, manutenção e agendamento de visitas
                                técnicas. Busco me tornar um programador
                                front-end e atualmente venho estudando ReactJS,
                                não tenho nenhuma experiência na área ainda mas
                                a vontade e o desejo em sempre melhorar tenho de
                                sobra.
                            </p>
                            <a href="#">Download CV</a>
                        </div>
                    </div>
                </div>
            </About>
        </Container>
    )
}
