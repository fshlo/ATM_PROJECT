import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CARD_LIST, CUSOMER_LIST } from "../Data";

const Stage4 = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const CARD = CARD_LIST.find((card) => card.id === +id!)!;
  const CUSTOMER = CUSOMER_LIST.find(
    (customer) => customer.id === CARD.customerId
  )!;
  const [amount, setAmount] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="ادخل المبلغ"
        onChange={(e) => {
          e.preventDefault();
          setAmount(e.target.value);
        }}
      />

      <input
        type="button"
        value="التالي"
        onClick={() => {
          if (+amount > CUSTOMER.allowedBalance) {
            alert("المبلغ غير مسموح سحبه");
            alert("سيتم اعادة البطاقة والغاء الطلب");
            navigate("/");
          } else if (
            +amount > CUSTOMER.balance &&
            CUSTOMER.allowedNegative === false
          ) {
            alert("المبلغ غير متوفر والرصيد السالب غير مسموح");
            alert("سيتم اعادة البطاقة والغاء الطلب");
            navigate("/");
          } else {
            navigate("/final-page");
          }
        }}
      />
    </div>
  );
};

export default Stage4;
