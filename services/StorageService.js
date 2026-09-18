import { companyName } from "@/utils/constants"

export const setTrackingDetails = (numberOfTimesVisited, formattedTime) => {
    return localStorage.setItem(
        "user_tracking_details_bgd_" + companyName,
        JSON.stringify({numberOfTimesVisited, projectName: companyName, formattedTime})
    )
}

export const getTrackingDetails = () => {
    return (
        JSON.parse(localStorage.getItem("user_tracking_details_bgd_"+ companyName)) || "NOT_YET_VISITED"
    )
}

export const clearTrackingDetails = () => {
    localStorage.removeItem("user_tracking_details_bgd_" + companyName);
}