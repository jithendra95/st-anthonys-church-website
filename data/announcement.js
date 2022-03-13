import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export async function getAnnouncements() {
  return new Promise(async function (resolve, reject) {
    const announcements = []

    const querySnapshot = await getDocs(collection(firestore, `announcements`));
    querySnapshot.forEach(async (announcement)=>{
        announcements.push(announcement.data());
    })

    resolve(announcements);
  });
}