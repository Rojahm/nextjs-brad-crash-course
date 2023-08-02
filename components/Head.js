import styles from "@/styles/Head.module.css";
function Head() {
  return (
    <>
      <div className="text-center my-5">
        <h1 className={styles.title}>
          <span>WebDev</span> News
        </h1>
        <h3 className={styles.subTitle}>
          Keep up to date with the latest web dev ews
        </h3>
      </div>
    </>
  );
}

export default Head;
