import React from "react";
import {Col, Grid, IconButton, List, Row, Checkbox, CheckboxGroup, Divider, Input} from "rsuite";
import CloseOutlineIcon from "@rsuite/icons/CloseOutline";
import ImageViewer from "./ImageViewer";

const PanelView = React.forwardRef((props, ref) => {
    const [value, setValue] = React.useState([]);
    return(
        <Grid fluid
              ref={ref}
              style={{
                  background: '#000',
                  width: '100%',
                  height:window.innerHeight,
                  overflowX: 'hidden',
                  zIndex:10000,
                  padding:20
              }}
        >
            <Row className="show-grid">
                <Col xs={4} mdOffset={20}>
                    <IconButton onClick={() => props.setShow(false)} circle icon={ <CloseOutlineIcon />} />
                </Col>
            </Row>
            <Row>
                <Col xs={24}> <h3>Müşteri: {props.selected.id}</h3></Col>
                <Col xs={24} md={18} >
                    <ImageViewer imgs={props.selected.imgs}/>
                </Col>
                <Col xs={24} md={6}>
                    <List hover>
                        <List.Item>Reports(pdf)</List.Item>
                        <List.Item>Send e-Mail</List.Item>
                        <List.Item>E-Kimlik API/Customer ID</List.Item>
                    </List>
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Col xs={24} md={8}>
                    <CheckboxGroup
                        style={{
                            border:' 1px dashed #f1f1f1',
                            marginTop:10
                        }}
                        name="checkboxList"
                        value={value}
                        onChange={value => {
                            console.log(value, 'onChange');
                            setValue(value)
                        }}
                    >
                        <Checkbox value="A">Skor Düşük</Checkbox>
                        <Checkbox value="B">Yüz İmgesi Problemli</Checkbox>
                        <Checkbox value="C">Yüz İmgesi Benzemiyor</Checkbox>
                        <Checkbox value="D">Yüz İmgesi Fraud</Checkbox>
                    </CheckboxGroup>
                </Col>
                <Col xs={24} md={16}>
                    <Input as="textarea" rows={7} placeholder="Açıklama" />
                </Col>
            </Row>
        </Grid>
    )
})
export default PanelView
