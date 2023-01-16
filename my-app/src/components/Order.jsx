import React, { useState, useEffect } from "react";
import styles from "../styles/hero.module.css";
import { orders } from "../utils/constants";

const Order = ({ order, setOrder }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const newArr = orders.slice(0, count);
    setOrder(newArr);
  }, [count, setOrder]);

  return (
    <>
      <div className={styles.wrapper}>
        {order.map((item) => {
          return (
            <div className={styles.list} key={item.id}>
              <span>{item.id}</span>
              <span>{item.email}</span>
              <span>{item.amount}</span>
              <span>{item.date}</span>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setCount((prev) => prev + 5)}
        className={styles.btn}
      >
        Показать больше
      </button>
    </>
  );
};

export default Order;
