import Quantity from '../components/Quantity';
import ShopingCard from '../components/ShopingCard'

import styles from './TestB.module.scss';

function TestB() {

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <ShopingCard
          isInCart={true}
        />
        <ShopingCard
          isInCart={false}
        />
      </div>
    </div>
  )
}

export default TestB