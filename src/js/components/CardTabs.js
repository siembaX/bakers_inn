import { Tabs,TabIndicator, TabList,Tab, TabPanel,TabPanels} from '@chakra-ui/react';
import IMAGES from '../../images/index1'
import { useState } from 'react'


export default function CardTabs(){
    const [tabdetails,]= useState([
        {card_images: <img src={ IMAGES.card1} alt="bread" className='card1' />,title: 'pie',id:1 },
        {card_images: <img src={ IMAGES.card1} alt="bread" className='card1' />,title: 'pie',id:1 },
        {card_images: <img src={ IMAGES.card1} alt="bread" className='card1' />,title: 'pie',id:1 },
      ]);
    return ( 
        <div className="tabs_section">
            <div className="row">
                <div className="col-lg-4">
                {tabdetails.map((reference) => (
                  <div className="card" key={reference.id}>
                    <img src={IMAGES.card1} alt="" />
                        <div className="card-body">
                        {tabdetails.card_images}
                        
                        </div>
                  </div>
                ))}
                </div>
            </div>
        </div>
     );
}
 