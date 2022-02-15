import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const Logout = () => {

  const history = useNavigate()

  const logout = async () => {
    try{
      const res = await fetch('/logout', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type":  "application/json"
        },
        credentials: "include"
      })

      if(res.status === 401 || !res) {
        window.alert("Please Logout Later");
      } else {
        history('/');
        // window.location.reload();
      }
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
      logout();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div>

    </div>
  )
}

export default Logout;
