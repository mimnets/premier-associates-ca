import { Avatar, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Card } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    }
  }));

const OurPartners = ({clientFeed}) => {
    const classes = useStyles();
    return (
        
                <div className="col-md-4 d-flex">

                    <div className="card" style={{width: '18rem;'}}>
                        <img className="card-img-top" src={clientFeed.img} width="120px" height="120px" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{clientFeed.title}</h5>
                            <p className="card-text">{clientFeed.description}</p>
                            <a href="#" class="btn btn-primary">Learn more about <strong>{clientFeed.name}</strong></a>
                        </div>
                        </div>

                        {/* <Card className={classes.root}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label={clientFeed.img} className={classes.avatar}>
                            <img src={clientFeed.img} alt=""/>
                        </Avatar>
                        }
                        
                        title={clientFeed.name}
                        subheader={clientFeed.title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {clientFeed.description}
                        </Typography>
                    </CardContent>
                    </Card> */}
                </div>
    );
};

export default OurPartners;