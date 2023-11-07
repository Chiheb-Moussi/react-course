import { useNavigate, useParams } from "react-router-dom";

const ContactPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      Contact {id}
      <br />
      <button onClick={goBack}>go back</button>
    </div>
  );
};

export default ContactPage;
