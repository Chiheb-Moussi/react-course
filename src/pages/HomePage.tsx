import { Link, Outlet, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("contact/55");
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div>Home</div>
      <Link to={"contact/100"}>contact 100</Link>
      <button onClick={goToContact}>contact 55</button>
      <button onClick={goBack}>go back</button>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
