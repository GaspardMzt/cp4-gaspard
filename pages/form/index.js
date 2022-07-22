import style from "../../styles/Form.module.css";
import Layout from "../../components/Layout";
import AddProject from "../../components/AddProject";

const Form = () => {
  return (
    <Layout pageTitle="Ajout d'un projet">
      <div className={style.formContainer}>
        <h2>Ajouter un projet</h2>
        <AddProject />
      </div>
    </Layout>
  );
};

export default Form;
