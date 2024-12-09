import React from 'react'
import styles from '../css/Time.module.css'



export default function Timer(): React.JSX.Element {

  return (
<div className={styles.countdown_timer}>
  <div className={styles.timer}>
    <span className={styles.time} id="minutes">00</span>:<span className={styles.time} id="seconds">00</span>
  </div>
  <div className={styles.label}>Осталось времени</div>
</div>
  )
}
