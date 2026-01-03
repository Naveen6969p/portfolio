
import { collection, onSnapshot, orderBy, query,  } from 'firebase/firestore'
import './getpost.css'
import { db } from '../firebase.config'
import Post from '../post/Post'
import { useState,useEffect } from 'react'


const GetPost = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
   const postQuery = query(collection(db,"post"),orderBy("time", "desc"))

   const fetchData = async() => {
    await onSnapshot(postQuery,(snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({
        ...doc.data(),id:doc.id
      })))
    })
   }
  fetchData();
  console.log(posts)
   
  }, [])
  
  return <>
  {posts.map((data) => <Post key={data.id} data={data} />)}
  </>
  
}

export default GetPost