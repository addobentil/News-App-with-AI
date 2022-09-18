import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Typography } from "@material-ui/core";
import wordsToNumbers from 'words-to-numbers';
import Modal from './components/Modal/ModalComponent';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';
require('dotenv').config();



const App = () => {
    const [ newsArticles, setNewsArticles ] = useState([]);
    const [ activeArticle, setActiveArticle] = useState(-1);
 const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        // let alanBtnInstance =
         alanBtn({
            key: process.env.API_KEY,
            onCommand: ({ command, articles, number }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if (command === 'instructions'){
                    setIsOpen(true);
                }
                 else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                    const parsedNumber = number.length > 2
                     ? wordsToNumbers(number, { fuzzy: true }) 
                     : number;
                    const article = articles[parsedNumber - 1];

                    if(parsedNumber > articles.length){
                        alanBtn().playText('Please try that again.');
                    } else if(article) {
                        window.open(article.url, '_blank');
                    }
                }
            },
            // onConnectionStatus: async function (status) {
            //     if (status === 'authorized') {
            //       await alanBtnInstance.activate();
            //       alanBtnInstance.playText(
            //         'Welcome to the Alan AI News Reader App by Grind'
            //       );
            //     }
            //   },
        });
    }, []);

    return (
        <div>
            <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div
           className={classes.infoContainer}>
            <div
             className={classes.card}>
                 <Typography
              variant="h5" 
             component="h2"
              style={{fontSize:13}} >
                 Try saying: <br />
                 <br />
                 Open article number [any]
                 </Typography>
                 </div>
            <div
             className={classes.card}>
                <Typography
             variant="h5"
             component="h2"
             style={{fontSize:13}} >
                Try saying: 
                <br /><br />
                Go back
                </Typography>
                </div>
          </div>
        ) : null}
        {/* { <img
         src={require('./images/alan-trans.png')}
          className={classes.alanLogo}
          alt="Alan Logo"/> } */}
        </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default App;