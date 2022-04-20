import { database } from "../firebase/firebase";
import { ref, onValue } from "firebase/database";

export async function getAlert() {
  return new Promise(async function (resolve, reject) {
    const starCountRef = ref(database, 'alerts');
    onValue(starCountRef, (snapshot) => {
      let alert = snapshot.val();
      resolve(alert);
    });
  });
}
