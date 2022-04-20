import { database } from "../firebase/firebase";
import { ref, onValue } from "firebase/database";

export async function getBibleVerse() {
  return new Promise(async function (resolve, reject) {
    const starCountRef = ref(database, 'bible_verse');
    onValue(starCountRef, (snapshot) => {
      let bibleVerse = snapshot.val();
      resolve(bibleVerse);
    });
  });
}