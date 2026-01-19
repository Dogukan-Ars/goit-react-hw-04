import { FiAlertCircle } from "react-icons/fi";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({
    message = "Aradığınız kriterlere uygun sonuç bulunamadı. Lütfen farklı bir arama terimi deneyin.",
}) => {
    return (
        <div className={styles.wrapper} role="alert">
            <FiAlertCircle className={styles.icon} />
            <p className={styles.text}>{message}</p>
        </div>
    );
};

export default ErrorMessage;
