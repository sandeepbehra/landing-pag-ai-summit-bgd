"use client";
import { POST } from "@/services/APIService";
import {
  clearTrackingDetails,
  getTrackingDetails,
  setTrackingDetails,
} from "@/services/StorageService";
import { differenceInMinutes, format } from "date-fns";
import React, { useEffect } from "react";

const UserTracker = () => {

  useEffect(() => {
    const visited = getTrackingDetails();
    if (visited === "NOT_YET_VISITED") {
      const now = new Date();
      const formattedTime = format(now, "yyyy-MM-dd HH:mm:ss");
      setTrackingDetails(0, formattedTime);
    } else {
      const formattedTime = visited.formattedTime;
      setTrackingDetails(visited.numberOfTimesVisited + 1, formattedTime);
    }
  }, []);

  useEffect(() => {
    const visited = getTrackingDetails();
    const now = new Date();
    const currentFormattedTime = format(now, 'yyyy-MM-dd HH:mm:ss');
    const difference = differenceInMinutes(currentFormattedTime, visited.formattedTime);

    if (visited !== "NOT_YET_VISITED" && !visited.alreadyAddedToDB && visited.numberOfTimesVisited > 1 && difference < 10) {
      POST("https://51s4esii35.execute-api.ap-south-1.amazonaws.com/addUserData", visited)
        .then((res) => {
          setTrackingDetails(visited.numberOfTimesVisited, visited.formattedTime);
          console.log({ res });
        })
        .catch((error) => {
          console.log({ error });
        });
    } else if(difference > 10) {
      clearTrackingDetails();
    }
  }, []);

  return <div></div>;
};

export default UserTracker;
