// import "./CustomerItem.css";

import styles from "./CustomerItem.module.css"

/* import styled from "styled-components";
const DeleteButton = styled.button`
  background-color: red;
  padding: 8px;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.5;
  }
`;
 */
const CustomerItem = ({ customer, handleDelete }) => {

  return (
    <li className={styles.customerItem}>
      <div className={styles.customerInfo}>
        <img
          src="https://i.pravatar.cc/300"
          alt=""
          className={styles.customerAvatar}
        />
        <span className={styles.customerName}>{customer.customerName}</span>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => handleDelete(customer)}
      >
        <i className="bi bi-trash3"></i>
      </button>
    </li>
  );
};

export default CustomerItem;
