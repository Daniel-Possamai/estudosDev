import './home.scss'
import BoxSelectApp from '../../components/boxSelectApp/boxSelectApp'


export default function Home() {
    const links = [
        { href: "/todo", text: "ToDo List" },
        { href: "/calculator", text: "Basic Calculator" },
        { href: "/weather", text: "App de clima" }
    ]

    return (
        <BoxSelectApp links={links}/>
    )
}