import { useState } from 'react'

import { Nav, Hamburguer, Menu, MenuLink, Logo } from './styles'

export function Navbar() {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Nav>
            <Logo to="/">
                Port<span>fólio</span>
            </Logo>
            <Hamburguer onClick={() => setOpen(!open)}>
                <span className="span-1" />
                <span className="span-2" />
                <span className="span-3" />
            </Hamburguer>
            <Menu open={open}>
                <MenuLink to="/">Inicio</MenuLink>
                <MenuLink to="/">Especialidade</MenuLink>
                <MenuLink to="/">Sobre</MenuLink>
                <MenuLink to="/">Contato</MenuLink>
            </Menu>
        </Nav>
    )
}
