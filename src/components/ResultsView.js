import React, {useState} from "react";
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import CloseOutlineIcon from '@rsuite/icons/CloseOutline';
import {Col, Grid, List, Row, FlexboxGrid, Animation, IconButton} from "rsuite";
import ImageViewer from "./ImageViewer";
import PanelView from "./PanelView";

const style={
    padding:20
}
const styleCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px'
};
const titleStyle = {
    paddingBottom: 5,
    whiteSpace: 'nowrap',
    fontWeight: 500
};

const ResultsView=({groups, selected, setSelected, show, setShow}) => {



    return(
     <>

         <Grid fluid style={style}>
             <List hover>
                 {
                     groups.map(element => (
                         <List.Item key={element.id} style={{cursor:"pointer"}} onClick={() => {
                             setShow(false)
                             setTimeout(() => {
                                 setSelected(element)
                                 setShow(true)
                             },100)

                         }}>
                             <FlexboxGrid>
                                 <FlexboxGrid.Item colspan={4} style={styleCenter}>
                                     <h4 style={titleStyle}>Kimlik {element.id}</h4>
                                 </FlexboxGrid.Item>

                                 {
                                     element.imgs.map((img, index)=>(
                                         index<4 &&
                                         <FlexboxGrid.Item key={index} colspan={4}>
                                             <img width={200} height={200} src={img.url} alt=""/>
                                         </FlexboxGrid.Item>
                                     ))
                                 }
                                 <FlexboxGrid.Item colspan={2} style={styleCenter}>
                                     <ArrowRightLineIcon style={{fontSize:'4em'}}/>{element.imgs.length > 4 && <span style={titleStyle}>{element.imgs.length - 4} tane daha</span>}
                                 </FlexboxGrid.Item>
                             </FlexboxGrid>
                         </List.Item>
                     ))
                 }
             </List>
         </Grid>
     </>
    )
}
export default ResultsView
