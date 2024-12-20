import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./client";

export async function getChartData() {
  try {
    const querySnapShot = await getDocs(collection(db, "dummy-market-data"));
    const data: MarketDataItem[] = [];
    querySnapShot.forEach((doc) => {
      const docData = doc.data();
      data.push({ id: doc.id, ...docData } as MarketDataItem);
    });
    data.sort((a, b) => {
      // Replace 'propertyName' with the actual property name you want to sort on
      if (a.date < b.date) {
        return -1;
      } else if (a.date > b.date) {
        return 1;
      } else {
        return 0; // Equal values (optional for stability)
      }
    });
    return data;
  } catch (e) {
    console.log("error occured while retriving market data: ", e);
    return null;
  }
}

export async function getTableData() {
  try {
    const docRef = doc(db, "dummy-table-data", "VNoYYtFJxySVNNPvWCoV");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data()
    }
  } catch (e) {
    console.log("error occured while fetching table data:", e);
    return null;
  }
}
