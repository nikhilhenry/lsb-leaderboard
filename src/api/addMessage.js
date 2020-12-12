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
    
    // add user id to message
    message.uid = firebase.auth().currentUser.uid
    
    //add severTimestamp to message
    message.created = firebase.firestore.FieldValue.serverTimestamp();

    // add message
    try{
      await firebase.firestore().collection('messages').add(message)
    }
    catch(e){
      return {message:e,success:false}
    }
    //update points
    try{
      await houseRef.update({points:doc.data().points+Number(message.points)})
      return {message:'Points updated sucessfully.',success:true}
    }
    catch(e){
      return {message:e,success:false}
    }
  }

}