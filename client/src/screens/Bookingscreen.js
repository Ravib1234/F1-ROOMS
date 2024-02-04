import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Bookingscreen({ match }) {
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  const [room, setroom] = useState([]);
  const { roomid } = useParams();
  // useEffect(() => {
  //   // try {
  //   setloading(true);

  //   axios
  //     .post("/api/rooms/getroombyid", {
  //       roomid: match.params.roomid,
  //     })
  //     .then((data) => {
  //       setroom(data);
  //     })
  //     .catch((err) => {
  //       setloading(false);
  //       seterror(true);
  //     });

  //   return () => {};
  // }, []);
  // const axioscall = async () => {
  //   // setloading(true);
  //   try {
  //     const data = await axios.post("/api/rooms/getroombyid", {
  //       roomid: match.params.roomid,
  //     }).data;
  //     // .then((data) => {
  //     setroom(data);
  //     seterror(false);
  //     setloading(false);
  //   } catch (error) {
  //     seterror(true);
  //     setloading(false);
  //   }
  // };

  // useEffect(() => {
  //   setloading(true);

  //   // axioscall();

  //   return () => {};
  // }, [axioscall]);

  useEffect(() => {
    try {
      setloading(true);

      const data = axios.post("/api/rooms/getroombyid", {
        roomid,
      }).data;
      console.log(data);
      setroom(data);
      console.log(data);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(true);
    }
  }, []);

  return (
    <div>
      <h1>Bookingscreen</h1>
      <h1>Room id = {roomid}</h1>
    </div>
  );
}

export default Bookingscreen;
