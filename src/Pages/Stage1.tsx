import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CARD_LIST } from "../Data";

const Stage1 = () => {
  const navigate = useNavigate();
  const [id, setID] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="ادخل رقم البطاقة"
        onChange={(e) => {
          e.preventDefault();
          setID(e.target.value);
        }}
      />

      <input
        type="button"
        value="التالي"
        onClick={() => {
          if (CARD_LIST.find((card) => card.id === +id)) {
            navigate("/stage2/" + id);
          } else {
            alert("خطأ، رقم البطاقة غير موجود");
            alert("سيتم اعادة البطاقة والغاء الطلب")
            navigate("/");
          }
        }}
      />
    </div>
  );
};

export default Stage1;
