import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1> الرجاء ادخال البطاقة ثم اضغط التالي للمتابعة</h1>
      <input
        type="button"
        value="التالي"
        onClick={() => {
          navigate("/stage1");
        }}
      />
    </div>
  );
};

export default Home;
