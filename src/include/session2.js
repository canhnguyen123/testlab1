import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
function Session2() {
    return (
        <div className='row session-2'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 session-2-item session-2-item-left'>
                <img src='https://firebasestorage.googleapis.com/v0/b/newdoan-19717.appspot.com/o/Rectangle%2075.png?alt=media&token=8ca8e873-36f8-487e-a60e-f56ebc95e94f' />
                <div className='pd-5'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Floral</Accordion.Header>
                            <Accordion.Body>
                                The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Decor selection</Accordion.Header>
                            <Accordion.Body>
                                The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Hair & makeup</Accordion.Header>
                            <Accordion.Body>
                                The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Lighting & Sound  </Accordion.Header>
                            <Accordion.Body>
                                The Design is the imagination, creativity and inspiration that makes your event unique. We work closely with you to sleuth out your style and then use that insight to develop every aesthetic component of your event from stationery and lighting to flowers and furniture.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 session-2-item session-2-item-right'>
                <img src='https://firebasestorage.googleapis.com/v0/b/newdoan-19717.appspot.com/o/Rectangle%2074.png?alt=media&token=ca8eff7b-d81f-4b2f-9677-d56cb6d08d42' />
            </div>
        </div>
    )
}

export default Session2
