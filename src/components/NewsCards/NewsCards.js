import React from 'react';
import { Grid, Grow } from '@material-ui/core';
import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';
import Homepage from '../Homepage/Homepage.jsx';



const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles();
    
  
    if (!articles.length) {
      return (
        <div className={classes.homepage}>
        <Homepage />
        </div>
        
      );
    }

    return (

        <Grow in>

            <Grid 
            className={classes.container} 
            container 
            alignItems='stretch'
             spacing={3}>
                {articles.map((article, i) => (
                    <Grid
                     item 
                    xs={12}
                     sm={6}
                     md={4}
                     lg={3}
                     style={{ display: 'flex' }}>
                        <NewsCard article={article} activeArticle={activeArticle} i={i} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
       
    )
}

export default NewsCards
