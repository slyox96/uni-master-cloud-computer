import React from 'react'
import styles from './ShopingCard.module.scss';

import minus from "../assets/minus-solid.svg"

const ShopingCard = () => {
    return (
        <div className={styles.card}>
            <img src={minus} alt="Minus Icon" />
            {/* <div className={styles.information}>
                <h2>Item</h2>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <Quantity />
            </div> */}
            <div className={styles.information}>
                <div className={styles.title}>
                    <h2>Item</h2>
                </div>
                <div className={styles.description}>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <div className={styles.buy}>
                    <span><b>Price:</b> 12$</span>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ShopingCard