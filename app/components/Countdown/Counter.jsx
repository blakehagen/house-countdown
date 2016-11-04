import React from 'react';
import Countdown from 'react-count-down';
import styles from './counter.scss';

export default class Counter extends React.Component {
  render() {
    let countdownOptions = {endDate: '12/20/2016 9:00 AM'};

    return (
      <div className={styles.container}>
        <div className={styles.timerContainer}>
          <div className={styles.timer}>
            <Countdown options={countdownOptions}/>
          </div>
        </div>
      </div>
    )
  }
}