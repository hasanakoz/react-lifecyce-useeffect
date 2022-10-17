//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useState, useEffect } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("componentDidMount");
  //   setTimeout(() => {
  //     alert("data fetched");
  //   }, 3000);
  // }, []); //! Array olmadığı durumda mount+update,boş array olduğu zaman sadece mount, dolu array olduğu zaman yine mount+update çalışır.

  // useEffect(() => {
  //   console.log("componentDidMount + componentDidUpdate");
  //   setTimeout(() => {
  //     alert("data fetched");
  //   }, 3000);
  // }, [count]);

  const fetchData = () => {
    console.log("data fetched");
  };
  useEffect(() => {
    const timerId = setInterval(fetchData, 1000);
    console.log("mounting");

    return () => {
      clearInterval(timerId);
      console.log("unmounted");
    };
  }, []);

  return (
    <div className="container text-center">
      <h1 className="text-danger">USE EFFECT</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
