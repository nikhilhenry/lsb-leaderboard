import firebase from 'firebase'

export async function getPoints(){

  //house collection ref
  const houseRef = firebase.firestore().collection('houses').orderBy("order", "asc")

  //get points
  const snapshot = await houseRef.get()
  return snapshot
}