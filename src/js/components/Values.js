

const  CoreValues = (props) => {
    return(
        <div className="corevalues">
            <div>
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
                
            </div>

            <div>
                <img src={props.images} alt='' />
            </div>
        </div>
    )
}
export default CoreValues;