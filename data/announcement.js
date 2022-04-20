import { database } from "../firebase/firebase";
import { ref, onValue } from "firebase/database";

export async function getAnnouncements() {
  return new Promise(async function (resolve, reject) {
    const starCountRef = ref(database, 'announcements');
    onValue(starCountRef, (snapshot) => {
      let announcements = snapshot.val();
      resolve(announcements);
    });
  });
}