import Quantity from '../components/Quantity';
import ShopingCard from '../components/ShopingCard'

import styles from './App.module.scss';

function App() {
 
  return (
    <div className={styles.container}>
        <ShopingCard />
        {/* <Quantity></Quantity> */}
    </div>
  )
}

export default App
