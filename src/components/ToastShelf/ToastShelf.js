import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";



function ToastShelf({setToasterList, toasterList}) {

  const handleToasterDismiss=(id)=>{
    const newToasterList = toasterList.filter(toaster=>toaster.id!=id);
    setToasterList(newToasterList);
  }
  return (
    <ol className={styles.wrapper} role="region" ariaLive="polite" ariaLabel="Notification">
      {toasterList.map(({ id,variant, message }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast id={id} variant={variant} message={message} setDeletedToaster={handleToasterDismiss}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
