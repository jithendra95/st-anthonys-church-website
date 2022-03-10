import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export async function getMassess() {
  return new Promise(async function (resolve, reject) {
    let massSchedule = [];
    const queryRef = query(collection(firestore, "massess"), orderBy("order"));
    const querySnapshot = await getDocs(queryRef);
    querySnapshot.forEach(async (doc) => {
      let schedule = doc.data();
      schedule.massess = [];

      const querySnapshot2 = await getDocs(collection(firestore, `massess/${doc.id}/massess`));
      querySnapshot2.forEach(async (mass)=>{
        schedule.massess.push(mass.data());
      })
      massSchedule.push(schedule);
    });

    resolve(massSchedule);
  });
}
