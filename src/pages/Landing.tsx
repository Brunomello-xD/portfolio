import { useEffect, useState } from 'react'
import { WhatsApp, LinkedIn, GitHub } from '@mui/icons-material'

import { Navbar } from '../components/Navbar'
import { Container, Home, Button, About, GitHubContainer, CardContainer, Contact } from '../styles/pages/Landing'

import MyPDF from '../assets/curriculum.pdf'

import api from '../services/api'

type UserData = {
    id: number
    name: string
    avatar_url: string
}

type Repository = {
    name: string
    description: string 
    html_url: string
}

export function Landing() {
    const [userData, setUserData] = useState<UserData>()
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        api.get('/users/BrunomelloxD').then(response => {
            setUserData(response.data)
        })
    })

    useEffect(() => {
        api.get('/users/BrunomelloxD/repos').then(response => {
            setRepositories(response.data)
        })
    })

    function test () {
        console.log(repositories)
    }

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
                            <a href={MyPDF} download="curriculum_bruno_mello">Download CV</a>
                        </div>
                    </div>
                </div>
            </About>  
            {/**
            * GitHub
            */}
            <GitHubContainer>
                <h2 className="title">GitHub</h2>
                <CardContainer> 
                    {repositories.map(repo => {
                        return( 
                            <div className='card'>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    <h2 className='titleCard'>{repo.name}</h2>
                                </a>

                                <p className='description'>{repo.description}</p>
                            </div>
                        )
                    })}
                </CardContainer>
            </GitHubContainer>
            <br />
            <br />
            {/**
             * Contact
             */}
            <Contact>
                <a href='https://wa.me/5519997119007' target="_blank" rel="noopener noreferrer">
                    <WhatsApp className='whatsapp-ri icon' /> 
                </a>
                
                <a href='https://www.linkedin.com/in/brunomello-xd/' target="_blank" rel="noopener noreferrer">
                    <LinkedIn className='linkedin-ri icon center' />
                </a>

                <a href='https://github.com/Brunomello-xD' target="_blank" rel="noopener noreferrer">
                    <GitHub className='github-ri icon' />
                </a> 
            </Contact>
        </Container>
    )
}