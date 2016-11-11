import React from 'react';
import styles from './countdown.scss';

export default class Counterdown extends React.Component {
  constructor() {
    super();
    this.goal  = '2016-12-20 9:00';
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
    let t       = Date.parse(this.goal) - Date.parse(new Date());
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