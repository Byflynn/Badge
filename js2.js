import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

async function loadKindness() {
  const querySnapshot = await getDocs(collection(db, "kindness"));
  querySnapshot.forEach(doc => {
    console.log(doc.data());
  });
}
