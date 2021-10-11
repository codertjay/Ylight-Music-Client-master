import axios from "axios";

// put your api keys in .env file you can get those here - https://developers.google.com/youtube/v3/getting-started
export const selectRandomKey = () => {
//  console.log(process.env.REACT_APP_YouTube_Keys)
 // const keys = process.env.REACT_APP_YouTube_Keys.split(" "); //we are splitting the api keys to make an array
 // const random = Math.floor(Math.random() * Math.floor(keys.length)); //this will get a random number
  // return keys[random];
  const key = "AIzaSyC7JYo3mTdByUt77WuZH9pKd9NiVAhJopA"
  return key
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    videoCategoryId: "10",
    type: "video",
    key: selectRandomKey()
  }
});
