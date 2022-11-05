

const Cards = (props) => {
    return(
        <div className="border">
        <div className="card" style={{backgroundColor:props.colorCode}}>
        
        </div>
        <div className= "subCards">
        <div className="code">{props.colorCode}</div>
        <div style={{color:props.colorCode}} className="name">{props.name}</div>
        
        </div>
        </div> 
    );
}

export default Cards;