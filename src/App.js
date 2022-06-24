import './App.css';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import {db, fbAuth, signInWithGoogle} from './firebase-config'
import { collection, query, orderBy, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';
import ChatRoom from './components/ChatRoom';

function App() {

  const [user] = useAuthState(fbAuth)
  const [messages, setMessages] = useState([])
  const [newMsg, setNewMsg] = useState("")
  const messagesRef = collection(db, 'messages')
  const q = query(messagesRef, orderBy("createdAt"))

  const createMessage = async () => {
    const { uid, photoURL } = user;
    await addDoc(messagesRef, {
      text: newMsg, 
      createdAt: new Date(),
      uid,
      photoURL 
    })
    setNewMsg("")
  }

  const deleteMessage = async (id) => {
    const msgDoc = doc(db, "messages", id) 
    await deleteDoc(msgDoc)
  }

  useEffect(() => { 

    onSnapshot(q, (snapshot) => (
      setMessages(snapshot.docs.map((doc) => 
        ({ ...doc.data(), id: doc.id})))
    ))

  }, [])


 

  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}

      <section>
        {user ? <ChatRoom 
          messages={messages}
          deleteMessage={deleteMessage}
          createMessage={createMessage}
          setNewMsg={setNewMsg}
          newMsg={newMsg}
          /> : <SignIn />}
        <SignOut />
      </section>

    </div>
  );
}

function SignIn() {
  return (
    <button className='ui green button' onClick={signInWithGoogle} >Sign in with Google</button>
  )
}

function SignOut() {
  return fbAuth.currentUser && (
    <button className='ui red button' onClick={() => fbAuth.signOut()} >Sign Out</button>
  )
}


export default App;


  
