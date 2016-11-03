import React from 'react';
import Countdown from 'react-count-down';
import autoBind from 'react-autobind';
import styles from './counter.scss';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    let OPTIONS = {endDate: '12/16/2016 10:00 AM'};

    return (
      <div className={styles.container}>
        <div className={styles.timerContainer}>
          <div className={styles.timer}>
            <Countdown options={OPTIONS}/>
          </div>
        </div>
      </div>
    )
  }
}