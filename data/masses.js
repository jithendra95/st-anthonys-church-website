import { database } from "../firebase/firebase";
import { ref, onValue } from "firebase/database";

export async function getMassess() {
  return new Promise(async function (resolve, reject) {
    let massSchedule = [];
    const starCountRef = ref(database, 'masses');
    onValue(starCountRef, (snapshot) => {
      massSchedule = snapshot.val();
      resolve(massSchedule);
    });

    
    
  });


}
