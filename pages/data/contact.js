import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

export async function getContactInfo() {
  return new Promise(async function (resolve, reject) {
    const docRef = doc(firestore, "static_data", "contact");
    const docSnap = await getDoc(docRef);
    let conactInfo = null;

    if (docSnap.exists()) {
      conactInfo = docSnap.data();
    }

    resolve(conactInfo);
  });
}
