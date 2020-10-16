import { Avatar, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Card } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    }
  }));

const Clients = ({clientFeed}) => {
    const classes = useStyles();
    return (
        
                <div className="col-md-4 d-flex">
                        <Card className={classes.root}>
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
                    </Card>
                </div>
    );
};

export default Clients;