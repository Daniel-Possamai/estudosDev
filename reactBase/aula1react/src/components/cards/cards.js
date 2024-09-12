import Card from '../card/card'

export default function Cards(){
    return(
        <div>
            <h2>Meus cards</h2>
            <div className="list-cards">
                <Card>
                    <h3>Titulo</h3>
                    <p>esse é um txt</p>
                </Card>
                <Card>
                    <h3>Titulo</h3>
                    <p>esse é um txt</p>
                </Card>
                <Card>
                    <h3>Titulo</h3>
                    <p>esse é um txt</p>
                </Card>q
            </div>
        </div>
    )
}