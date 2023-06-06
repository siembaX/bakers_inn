import IMAGES from "../../images/index1"

export const  Footer = () => {
    return ( 
    <div className="footer">
        <div className="top-row">
            <div>
                <hr />
                <img src={IMAGES.footerlogo} alt="footerlogo" />
                <hr />
            </div>

        <div className="row">
            <div className="col-lg-4">
            <div className="stacked-items1">
                <h3>Instagram Feed</h3>
                <div className="row-items">
                    
                </div>

                </div>
            </div>
        </div>
        </div>
    </div>
     )
}