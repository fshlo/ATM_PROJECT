import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CARD_LIST } from "../Data";

const Stage2 = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const CARD = CARD_LIST.find((card) => card.id === +id!)!;
  useEffect(() => {
    if (CARD.date >= new Date()) {
      navigate("/stage3/" + id);
    } else {
      alert("عذرا ان تاريخ البطاقة غير ساري الفعالية");
      alert("سيتم اعادة البطاقة والغاء الطلب");
      navigate("/");
    }
  }, [CARD.date, id, navigate]);

  return <div></div>;
};

export default Stage2;
