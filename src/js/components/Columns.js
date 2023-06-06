const  Columns = (props) => {
    return(
        <div className="columnDivs">
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
export default Columns;