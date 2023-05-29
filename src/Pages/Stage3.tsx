import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CARD_LIST } from "../Data";

const Stage3 = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const CARD = CARD_LIST.find((card) => card.id === +id!)!;
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <input
        type="password"
        placeholder="ادخل الرقم السري"
        onChange={(e) => {
          e.preventDefault();
          setPassword(e.target.value);
        }}
      />

      <h2>عدد المحاولات الخاطئة {counter}</h2>

      <input
        type="button"
        value="التالي"
        onClick={() => {
          if (CARD.password === password) {
            navigate("/stage4/" + id);
          } else {
            alert("خطأ، الرقم السري غير صحيح");
            if (counter < 3) {
              setCounter((prev) => prev + 1);
            } else {
              alert("سيتم سحب البطاقة والغاء الطلب");
              navigate("/");
            }
          }
        }}
      />
    </div>
  );
};

export default Stage3;
