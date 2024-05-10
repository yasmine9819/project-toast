import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import Toast from "../Toast";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant]= React.useState("notice");
  const {toasters, setToasters}= React.useContext(ToastContext);


  // React.useEffect(()=>{
  //   window.addEventListener("keydown", (e)=>{
  //     if(e.key=="Escape"){
  //       setToasters([]);
  //     }
  //   })

  //   return ()=>{
  //     window.removeEventListener("keydown");
  //   }

  // },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", message, variant);
    setToasters([...toasters, {
      id: crypto.randomUUID(),
      variant,
      message
    }]);

  
    setVariant("notice");
    setMessage("");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      
    {/* <Toast variant={variant} message={message} setIsActive={setToaster} isActive={toaster}/> */}
      
      <ToastShelf toasterList={toasters} setToasterList={setToasters}/>
      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor= {`variant-${option}`} key={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={variant===option}
                  onChange={e=>setVariant(e.target.value)}
                  
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
