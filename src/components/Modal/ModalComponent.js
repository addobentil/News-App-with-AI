import React from 'react';
import {
  Typography,
  Divider,
  Chip,
} from '@material-ui/core';

import SimpleModal from '@material-ui/core/Modal';

import useStyles from './model.styles.js';

const Modal = ({ isOpen, setIsOpen, showFeedback }) => {
  const classes = useStyles();
  let body;
   
    body = (
      <div className={classes.paper}>
        <Typography variant='h3'>Instructions</Typography>
        <Divider />
        <div className={classes.infoContainer}>
          <Typography variant='h5'>Latest News</Typography>
          {}
        </div>
        <Typography variant='body1' className={classes.trySaying}>
          Try saying: &quot;Give me the latest{' '}
          <strong>
            <em>News</em>
          </strong>
          &quot;
        </Typography>
        <Divider />

        <div className={classes.infoContainer}>
          <Typography variant='h5'>News by Categories</Typography>
          <div className={classes.chipContainer}>
            {[
              'Business',
              'Entertainment',
              'General',
              'Health',
              'Science',
              'Sports',
              'Technology',
            ].map((category) => (
              <Chip label={category} color='primary' className={classes.chip} />
            ))}
          </div>
        </div>
        <Typography variant='body1' className={classes.trySaying}>
          Try saying: &quot;Give me the latest{' '}
          <strong>
            <em>Business</em>
          </strong>{' '}
          news&quot;
        </Typography>
        <Divider />
        <div className={classes.infoContainer}>
          <Typography variant='h5'>News by Terms</Typography>
          <div className={classes.chipContainer}>
            {['Donald Trump', 'Bitcoin', 'PlayStation 5', 'Smartphones'].map(
              (term) => (
                <Chip label={term} color='primary' className={classes.chip} />
              )
            )}
            <Chip label='...and more' className={classes.chip} />
          </div>
        </div>
        <Typography variant='body1' className={classes.trySaying}>
          {/* Try saying: &quot;What&apos;s up with{' '} */}
          <strong>
            <em>COMING SOON ......</em>
          </strong>
          &quot;
        </Typography>
        <Divider />
        <div className={classes.infoContainer}>
          <Typography variant='h5'>News by Sources</Typography>
          <div className={classes.chipContainer}>
            {[
              'CNN',
              'Wired',
              'BBC News',
              'Time',
              'IGN',
              'Buzzfeed',
              'ABC News',
            ].map((source) => (
              <Chip label={source} color='primary' className={classes.chip} />
            ))}
            <Chip label='...and more' className={classes.chip} />
          </div>
        </div>
        <Typography variant='body1' className={classes.trySaying}>
          {/* Try saying: &quot;Give me the news from{' '} */}
          <strong>
            <em>COMING SOON .....</em>
          </strong>
          &quot;
        </Typography>
      </div>
    );

  return (
    <SimpleModal open={isOpen} onClose={() => setIsOpen(false)}>
      {body}
    </SimpleModal>
  );
};

export default Modal;
