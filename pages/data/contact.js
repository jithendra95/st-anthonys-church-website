import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

export async function getContactInfo() {
  // const conactInfo = {
  //     phoneNo: '+94 112 843 561',
  //     address: 'Church Garden\'s, Mahamegawatte., Maharagama',
  //     priestName: "Rev. Fr. Edmund Thilakaratne",
  //     location: "St Mary's Church Maharagama",
  //     officeDay: "Wednesday",
  //     times: ["8:30 AM - 12:30 PM (Wednesday)", "4:00 PM - 7:00 PM (Wednesday)"],
  //   };
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
