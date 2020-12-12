import firebase from 'firebase'

export async function deleteLive(){

  //message collection ref
  const messageRef = firebase.firestore().collection('messages').where('mode', '==', 'live')

  //get all live messages
  const snapshot = await messageRef.get();

  var batch = firebase.firestore().batch();
  snapshot.forEach(doc=>{
    batch.delete(doc.ref)
  })

  await batch.commit()

  console.log('sucess')
}