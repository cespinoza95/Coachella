import React from 'react';
import {scroller} from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

  const scrollToElement= (element) => {
    scroller.scrollTo(element,{
      duration: 1500,
      delay: 100,
      smooth: true, 
      offset: -150
    });
    props.onClose(false)
  }

  return(
    <Drawer
      anchor="right"
      open={props.open}
      onClose={()=> props.onClose(false)}
      >

          <List component="nav">
          <ListItem button onClick ={()=> scrollToElement('featured')}>
            Event starts in
          </ListItem>


          <ListItem button onClick={()=> scrollToElement('venuenfo')}>
            Venue NFO
          </ListItem>

        
          <ListItem button onClick ={()=> scrollToElement('highlights')}>
            Highlights
          </ListItem>

          <ListItem button onClick ={()=> scrollToElement('pricing')}>
            Pricing
          </ListItem>

          <ListItem button onClick ={()=> scrollToElement('location')}>
            Location
          </ListItem>

          <ListItem button onClick ={()=> window.location.href = "videos.html"}>
            Coachella Videos
          </ListItem>


          

          <ListItem button onClick ={()=> window.location.href = "advert.html"}>
            Advertise at Coachella
          </ListItem>

          <ListItem button on Click={()=> scrollToElement
                ('Contact')}>

                    Contact Us
                </ListItem>

        </List>
      </Drawer>
      );
  
};

export default SideDrawer;