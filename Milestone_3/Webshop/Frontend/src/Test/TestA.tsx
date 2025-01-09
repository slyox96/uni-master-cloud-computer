import Quantity from '../components/Quantity';
import ShopingCard from '../components/ShopingCard'

import styles from './TestA.module.scss';

function TestA() {

  return (
    <div className={styles.container}>
        <ShopingCard />
        <ShopingCard />
    </div>
  )
}

export default TestA
