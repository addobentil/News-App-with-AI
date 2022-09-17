import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import newsPlaceholder from '../../images/news-placeholder-738.png';
import classNames from 'classnames';
import useStyles from './styles.js';


const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, activeArticle, i }) => {
    const classes = useStyles();
    const [ elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50)

    useEffect(() => {
        window.scroll(0, 0);

        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {
        if(i === activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle]);
        }
    },
     [i, activeArticle, elRefs])

    return (
        <Card
         ref={elRefs[i]}
         className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)} >
            <CardActionArea
             href={url} 
            target='_blank' >
                <CardMedia
                 className={classes.media}
                 image={urlToImage || newsPlaceholder} />
                <div
                 className={classes.details}>
                    <Typography 
                    variant='body2'
                     color='textSecondary'
                     component='h2'>
                        {(new Date(publishedAt)).toDateString()}
                        </Typography>
                    <Typography 
                    variant='body2'
                     color='textSecondary'
                     component='h2'>
                        {source.name}
                        </Typography>
                </div>
                <Typography
                 className={classes.title}
                 gutterBottom 
                variant='h5'
                style={{ fontSize: 16 }}
                >{title}
                </Typography>
                <CardContent>
                    <Typography
                     variant='body2'
                     color='textSecondary'
                     component='p'
                    style={{ fontSize: 14 }}
                    >{description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions
             className={classes.cardActions}>
                <Button
                 size='small'
                 color='primary' >
                    Learn More
                </Button>
                <Typography
                 variant='h5'
                 color='textSecondary' >
                    {i + 1}
                </Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;
