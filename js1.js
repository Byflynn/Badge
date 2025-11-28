import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

async function addKindness(text, studentId) {
  await addDoc(collection(db, "kindness"), {
    text,
    studentId,
    date: new Date().toISOString()
  });
}
