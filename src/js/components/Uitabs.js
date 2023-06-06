import { Tabs,TabIndicator, TabList,Tab, TabPanel,TabPanels} from '@chakra-ui/react';
import IMAGES from '../../images/index1'
import { useState } from 'react'

export const Uitabs = (props) => {
    return ( 


    <div className="">
    <Tabs position="relative" variant="unstyled" align='center' fontSize={40}>
    <TabList>
      <Tab>For Kids</Tab>
      <Tab>For Vegans</Tab>
      <Tab>For Family</Tab>

    </TabList>

    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
      align='center'
      height='4px'
    />

    <TabPanels>
      <TabPanel>  
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <img src={IMAGES.card1} alt="" />
            <div className="card-body">
              <h2>Shwarma Sandwich</h2>
              
            </div>
          </div>
        </div>
      </div>
      </TabPanel>

      <TabPanel>
      </TabPanel>

      <TabPanel>
      </TabPanel>

    </TabPanels>
  </Tabs>
        </div>
     );
}
