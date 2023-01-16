import styles from "../styles/hero.module.css";
import Order from "../components/Order";
import { useNavigate } from "react-router-dom";
import surt from "../assets/surt.png";
import Select from "../components/Select";
import { useState } from "react";
import { orders } from "../utils/constants";

const Hero = () => {
  const [order, setOrder] = useState([orders]);
  const [selectedSort, setSelectedSort] = useState("");
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("user"));

  const handleExit = () => {
    navigate("auth");
    localStorage.clear();
  };

  const sortProducts = (sort) => {
    setSelectedSort(sort);
    if (sort === "order") {
      setOrder([...order].sort((a, b) => a.id - b.id));
    }
    if (sort === "min") {
      setOrder([...order].sort((a, b) => a.amount - b.amount));
    }
    if (sort === "max") {
      setOrder([...order].sort((a, b) => b.amount - a.amount));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={surt} alt="surt" />
        <div className={styles.info}>
          <h3>{admin.name}</h3>
          <p>{admin.email}</p>
        </div>
        <button onClick={handleExit}>Выход</button>
      </div>
      <div className={styles.orders}>
        <div className={styles.order}>
          <h2>Заказы</h2>
          <Select
            defaultValue={"По номеру заказа..."}
            options={[
              { value: "order", name: "По номеру заказа" },
              { value: "max", name: "По убыванию" },
              { value: "min", name: "По возрастанию" },
            ]}
            value={selectedSort}
            onChange={sortProducts}
          />
        </div>
        <ul className={styles.list_main}>
          <li>Номер заказа</li>
          <li>Email</li>
          <li>Сумма</li>
          <li>Дата</li>
        </ul>
        <Order order={order} setOrder={setOrder} />{" "}
      </div>
    </div>
  );
};

export default Hero;
