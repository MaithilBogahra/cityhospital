import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";


function List({ data }) {
    const abc = (o) => {
        console.log(o.id)
    }
    return (
        <div>
            {
                data.map((o, i) => {
                    return (
                        <div key={i}>
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {o.name}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6" >
                                        {o.price}
                                    </CardSubtitle>
                                    <CardText>
                                        {o.expiry}
                                    </CardText>
                                    <Button onClick={() => abc(o)}>
                                        Button
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default List;