import firebase from 'firebase'

export async function getMessages(){

  //message collection ref
  const messageRef = firebase.firestore().collection('messages').orderBy('created','desc')

  //get messages
  const snapshot = await messageRef.where('mode', '==', 'live').get();
  return snapshot
}