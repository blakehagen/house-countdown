import React from 'react';
import moment from 'moment';
import styles from './countdown.scss';

export default class Countdown extends React.Component {
  constructor() {
    super();
    this.goal  = '2016-12-20 09:00';
    this.state = this.getTimeRemaining();
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(this.getTimeRemaining())
    }, 1000)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.timerContainer}>

          <div className={styles.timeBox}>
            <div className={styles.timeUnit}>
              <p>{this.state.days}</p>
            </div>
            <div className={styles.timeDescription}>
              <p>Days</p>
            </div>
          </div>

          <div className={styles.timeBox}>
            <div className={styles.timeUnit}>
              <p>{this.state.hours}</p>
            </div>
            <div className={styles.timeDescription}>
              <p>Hours</p>
            </div>
          </div>

          <div className={styles.timeBox}>
            <div className={styles.timeUnit}>
              <p>{this.state.minutes}</p>
            </div>
            <div className={styles.timeDescription}>
              <p>Minutes</p>
            </div>
          </div>

          <div className={styles.timeBox}>
            <div className={styles.timeUnit}>
              <p>{this.state.seconds}</p>
            </div>
            <div className={styles.timeDescription}>
              <p>Seconds</p>
            </div>
          </div>

        </div>
      </div>
    )
  }

  getTimeRemaining() {
    let t       = (moment(this.goal).unix()) * 1000 - (moment().utcOffset('-0700').unix()) * 1000;
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours   = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days    = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

}