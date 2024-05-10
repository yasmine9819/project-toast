import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({id,variant, message, setDeletedToaster}) {
  const getIcon=(variant)=>{
    const tag = ICONS_BY_VARIANT[variant];
    if(!tag){
      throw Error("Unsupported Variant value");
    }
    return tag;
  }
  
  const Tag = getIcon(variant);
  
  return (
  
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <p className={styles.content}>
      <VisuallyHidden>{message}</VisuallyHidden>

        {message}
      </p>
      <button className={styles.closeButton} ariaLabel="Dismiss message" ariaLive="off">
        <X size={24} onClick={()=>setDeletedToaster(id)} />
      </button>
    </div>
  );
}

export default Toast;
