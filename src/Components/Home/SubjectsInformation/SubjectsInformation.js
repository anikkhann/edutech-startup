import React from 'react';
import { Card } from 'react-bootstrap';

const SubjectsInformation = (props) => {
    const { img, title } = props.data;
    return (
        <div className="col-md-2 m-3 ">

            <Card

                style={{ width: '200px', height: '155px', marginTop: '-300px', borderRadius: '10px', border: '1px solid', padding: '10px', boxShadow: '4px 4px #888888' }}

            >
                <Card.Img

                    style={{ width: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }} variant="top" src={img}

                />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center', color: 'blue', width: '152px' }}>

                        {title}

                    </Card.Title>

                </Card.Body>
            </Card>

        </div>

    );
};

export default SubjectsInformation;