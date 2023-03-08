import React from "react";
import {Row, Col, Grid, FlexboxGrid, Panel} from "rsuite";
const Card = ({name, url}) => (
    <Panel  bordered header={name} style={{
        border:' 1px dashed #f1f1f1',
        margin:10,
    }}>
        <img style={{width:100}} src={url} alt=""/>
    </Panel>
);
export default ({imgs}) => (
    <FlexboxGrid>
        {
            imgs?.map(img => (
                <FlexboxGrid.Item key={img.name} colspan={6}>
                    <Card name={img.name} url={img.url}/>
                </FlexboxGrid.Item>
            ))
        }
    </FlexboxGrid>
)
