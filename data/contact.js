import { database } from "../firebase/firebase";
import { ref, onValue } from "firebase/database";
export async function getContactInfo() {
  return new Promise(async function (resolve, reject) {
    // const docRef = doc(firestore, "static_data", "contact");
    // const docSnap = await getDoc(docRef);
    // let conactInfo = null;

    // if (docSnap.exists()) {
    //   conactInfo = docSnap.data();
    // }

    const starCountRef = ref(database, 'static_data');
    onValue(starCountRef, (snapshot) => {
      let contacts = snapshot.val();
      resolve(contacts);
    });

  });
}
