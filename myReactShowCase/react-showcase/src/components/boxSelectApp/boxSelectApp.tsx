import './boxSelectApp.scss'


interface BoxSelectAppProps{
    links: { href: string, text: string }[];
}

export default function BoxSelectApp({links}: BoxSelectAppProps) {
    return (
        <div className='container-home-englobador'>
            <div className='container-titulo'>
                <h1>Bem vindo ao ShowCase React</h1>
                <p>Projetos, e estudos</p>
            </div>
            <div className="box-pages">
                {links.map((link, index) => (
                    <a key={index} className="link-page" href={link.href}>{link.text}</a>
                ))}             
            </div>
        </div>
    )
}