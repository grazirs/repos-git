import { useState, useEffect } from "react"

const Input = () => {
    const [repositorios, setRepositorios] = useState([])
    const [busca, setBusca] = useState('')
    const [filtro, setFiltro] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/grazirs/repos')
            .then(resposta => resposta.json())
            .then(dados => setRepositorios(dados))
    }, [])
    console.log(repositorios)

    useEffect(() => {
        setFiltro(
            repositorios.filter(repositorio => {
                return repositorio.name.includes(busca)
            })
        )

    }, [repositorios, busca])

    return (
        <>
            <div className='input-area'>
                <input type='text' placeholder='Digite um Repositório do Github'
                    onChange={e => { setBusca(e.target.value) }} />
            </div>
            <div className='repos'>
                {filtro.map(repo =>
                    <div key={repo.id} >
                        <div className='cards'>
                            <p>{repo.name}</p>
                        </div>
                    </div>
                
            )}
            </div>
        </>)

}

export default Input