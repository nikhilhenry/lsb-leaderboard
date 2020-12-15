import firebase from 'firebase'

export async function getMessages(){

  //message collection ref
  const messageRef = firebase.firestore().collection('messages').where('mode', '==', 'live').orderBy('created','desc')

  //get messages
  const snapshot = await messageRef.limit(6).get();
  return snapshot
}

export async function getMoreMessages(){

}