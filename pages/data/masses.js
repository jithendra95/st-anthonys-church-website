import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

export async function getMassess() {
  // const massSchedule = [
  //     {
  //       header: "Regular Masses",
  //       updatedDate: "03rd March 2022",
  //       massess: [
  //         {
  //           name: "Sunday Eucharist",
  //           maharagama: [
  //             "6:00 PM - Saturday (English)",
  //             "7:30 AM - Sunday (Sinhala)",
  //             "5:00 PM - Sunday (English)",
  //           ],
  //           boralesgamuwa: ['09:30 AM - Sunday (Billigual)'],
  //         },

  //         {
  //           name: "Weekday",
  //           maharagama: [
  //             "5:00 PM - Wednesday - Perpetual help - Novena & Mass (Sinhala/English alternative)",
  //           ],
  //           boralesgamuwa: ['06:00 PM - Tuesday - Mass & Novena (English)'],
  //         },
  //       ],
  //     },
  //     {
  //       header: "Season of Lent",
  //       updatedDate: "03rd March 2022",
  //       massess: [
  //         {

  //           maharagama: [
  //             "5:00 PM - Friday - Mass, Gospel reflection & Benediction (Sinhala)",
  //           ],
  //           boralesgamuwa: [],
  //         }
  //       ],
  //     }
  //   ];
  //   return massSchedule;

  return new Promise(async function (resolve, reject) {
    let massSchedule = [];
    const querySnapshot = await getDocs(collection(firestore, "massess"));
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      let schedule = doc.data();
      schedule.massess = [];

      const querySnapshot2 = await getDocs(collection(firestore, `massess/${doc.id}/massess`));
      querySnapshot2.forEach((mass)=>{
        schedule.massess.push(mass.data())
      })
      massSchedule.push(schedule);
    });

    resolve(massSchedule);
  });
}
