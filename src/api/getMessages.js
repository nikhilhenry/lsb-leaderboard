import firebase from 'firebase'

export async function getMessages(){

  //message collection ref
  const messageRef = firebase.firestore().collection('messages')

  //get messages
  const snapshot = await messageRef.get();
  return snapshot
}