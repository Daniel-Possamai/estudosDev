import './home.scss'


export default function Home() {
    return (
        <div className='container-home-englobador'>
            <div className='container-titulo'>
                <h1>Bem vindo ao ShowCase React</h1>
                <p>Projetos, e estudos</p>
            </div>
            <div className="box-pages">
                <a className="link-page" href="/todo">ToDo List</a>
                <a className="link-page" href="/todo">Basic Calculator</a>
                <a className="link-page" href="/todo">App de clima</a>                
            </div>
        </div>
    )
}