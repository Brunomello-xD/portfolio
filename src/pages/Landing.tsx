import { useEffect, useState } from 'react'

import { Navbar } from '../components/Navbar'
import { Container, Home, Button, About, CardContainer } from '../styles/pages/Landing'

import api from '../services/api'

type UserData = {
    id: number
    name: string
    avatar_url: string
}

type Repository = {
    full_name: string
    description: string 
}

export function Landing() {
    const [userData, setUserData] = useState<UserData>()
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        api.get('/users/Brunomello-xD').then(response => {
            setUserData(response.data)
        })
    })

    useEffect(() => {
        api.get('/users/Brunomello-xD/repos').then(response => {
            setRepositories(response.data)
        })
    })

    return (
        <Container>
            <Navbar />
            <Home>
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Olá, meu nome é</div>
                        <div className="text-2">{userData?.name}</div>
                        <div className="text-3">
                            Eu sou desenvolvedor
                            <span> front-end</span>
                        </div>
                        <br />
                        <br />
                        <Button>
                            <div className='typing-demo'>
                                #Contrate-me
                            </div>
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
                            <img src={userData?.avatar_url} />
                        </div>
                        <div className="column right">
                            <div className="text">
                                Sou Bruno e sou desenvolvedor
                                <span> front-end</span>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <a href="#">Download CV</a>
                        </div>
                    </div>
                </div>
            </About>  

            <CardContainer> 
                {repositories.map(repo => {
                    return( 
                        <div className='card'>
                            <h2 className='title'>{repo.full_name}</h2>

                            <p className='description'>{repo.description}</p>
                        </div>
                    )
                })}
            </CardContainer>
        </Container>
    )
}
