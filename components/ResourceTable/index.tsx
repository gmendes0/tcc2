import styles from "../../styles/ResourceTable.module.scss";

const ResourceTable: React.FC = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr style={{ height: "50px" }} className={styles["thead--tr"]}>
          <td style={{ padding: "20px" }}>ID</td>
          <td style={{ padding: "20px" }}>Name</td>
          <td style={{ padding: "20px" }}>Email</td>
          <td style={{ padding: "20px" }}>Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Corsair</td>
          <td>support@corsair.com</td>
          <td>adsad</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResourceTable;
