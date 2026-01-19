import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";
import styles from "./ErrorFallback.module.css";

const ErrorFallback = ({ error, onReset }) => {
    return (
        <div className={styles.wrapper} role="alert">
            <FiAlertTriangle className={styles.icon} />

            <h2 className={styles.title}>
                Beklenmeyen bir hata oluştu
            </h2>

            <p className={styles.message}>
                Uygulama çalışırken bir sorunla karşılaştık. Sayfayı yenileyerek tekrar deneyebilirsiniz.
            </p>

            {error && (
                <pre className={styles.error}>
                    {error.message}
                </pre>
            )}

            <button className={styles.button} onClick={onReset}>
                <FiRefreshCw />
                Sayfayı Yenile
            </button>
        </div>
    );
};

export default ErrorFallback;
