import * as SecureStore from "expo-secure-store";
import { useRef, useState } from "react";

class UserStore {
  constructor(){
   if(! UserStore.instance){
    SecureStore.getItemAsync("userId").then((userIdSecure) => {
      if(userIdSecure) {
        console.log("setting userid", userIdSecure);
        this.userId = userIdSecure;
      }
    });
     UserStore.instance = this;
   }
   return UserStore.instance;
  }
  get() {
    return this.userId;
  }
}

const instance = new UserStore();
Object.freeze(instance);

export default instance;


// export function loadUserData() {
//   // const [userId, setUserId] = useRef(null);
//   const userId = '';
//   try {
//     console.log("before setting userid", userId);
//     if(!userId) {
//       SecureStore.getItemAsync("userId").then((userIdSecure) => {
//         if(userIdSecure) {
//           console.log("setting userid", userIdSecure);
//           userId = (userIdSecure);
//         }
//       });
//     }
//     return userId;
//   } catch (error) {
//     console.log("unable to get user data", error);
//     return null;
//   }
// }
