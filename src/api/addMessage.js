import firebase from 'firebase'

export async function addMessage(message){

  console.log(message)

  //create house document ref
  const houseRef = firebase.firestore().collection('houses').doc(message.house);

  //get house document
  const doc = await houseRef.get();
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', doc.data());    
    //update points
    await houseRef.update({points:doc.data().points+Number(message.points)})

    //add severTimestamp to message
    message.created = firebase.firestore.FieldValue.serverTimestamp();

    // add message
    await firebase.firestore().collection('messages').add(message)


    return {message:'Points updated sucessfully',success:true}
  }

}