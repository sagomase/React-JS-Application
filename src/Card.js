

function Card(props) {
    return (
        <>
        <div className="card-container" style={{backgroundColor:"rgb(240, 240, 240)",marginInline:"50px"}}>
        <div className="card">
            <img src={props.imgsrc} className="card-img-top" alt="Card demos" width="20%" height="300" style={{border:"1px solid black",marginInline:"40%"}}/>
                <div className="card-body">
                    <h3 className="card-title" style={{marginInline:"30px", fontStyle:"inherit"}}>{props.title}</h3>
                    <p className="card-text"style={{marginInline:"30px"}}>{props.text}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.item}</li>
                    <li className="list-group-item">{props.sample}</li>
                    <li className="list-group-item">{props.list}</li>
                </ul>
                <div className="card-body"style={{marginInline:"30px"}}>
                    <a href={props.link} className="card-link">
                    <button>Learn Now</button>
                    </a>
                </div>
        </div>
        </div>
        
        </>
    );
}

export default Card;
