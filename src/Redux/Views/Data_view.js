import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { success } from "../Action/Action2";

const Data_view = () => {
  const ref = useSelector((y) => y.users_data);

  const dis2 = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((y) => y.json())
      .then((y) => dis2(success(y.users)));
  }, []);

  console.log(ref.data);

  return( <>
        <div>
            {
                ref.data.map((e,i)=>{
                    return(<div key={i}>{e.firstName}</div>)
                })
            }
        </div>
  </>)
};

export default Data_view;
