const  Content = (props) => {
    return(
        <div className="Contenttxt">
            <h4>{props.title}</h4>
            <img src={props.images} alt="pic" className="img-fluid" />
        </div>
    )
}
export default Content;