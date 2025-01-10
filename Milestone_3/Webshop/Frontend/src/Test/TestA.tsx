import ShopingCard from '../components/ShopingCard'

import styles from './TestA.module.scss';

function TestA() {

  return (
    <div className={styles.container}>
      <ShopingCard
        isInCart={false}
      />
      <ShopingCard
        isInCart={false}
      />
    </div>
  )
}

export default TestA
