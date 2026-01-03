
import './addPost.css'
import React, { useState } from 'react'

import {  storage } from '../firebase.config'
import {ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useNavigate } from 'react-router-dom'


const AddPost = () => 
  {
    const auth = getAuth()
  const navigate = useNavigate
    const [title, setTitle] = useState(" ")
    const [description, setDescription] = useState(" ")
    const [image, setImage] = useState(null)
  
  
    const handleImg = (e)  => {
      if(e.target.files[0]) {
        setImage(e.target.files[0])
      }
    }
  
    const handleAddPost = async(e) => {
  e.preventDefault();
  if(auth.currentUser) {
  try {
    const storageRef = ref(storage,`images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image)
    await uploadTask;
  
    const url = await getDownloadURL(uploadTask.snapshot.ref)
    console.log(url);
  
    const data = {
      author: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoUrl: auth.currentUser.photoURL,
      userId: auth.currentUser.uid,
      imageUrl: url,
      title,
      description,
      time:serverTimestamp(),
  
    
    }
    const saveData = await addDoc(collection(db, "post"),data)
    setTitle('')
    setDescription('')
    navigate('/')
  } catch (error) {
    console.error(error.message)
  }}
  else {
    alert("login first")
  }
    } 
    return (
    <>
    <form onSubmit={handleAddPost}>
      <div className="container  addpost my-5">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Title</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={title}  onChange={(e) => setTitle(e.target.value)}/>
    
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Description</label>
      <input type="text" class="form-control" id="exampleInputPassword1" value={description} onChange={(e) => setDescription(e.target.value)} />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label" >Add Image</label>
      <input type="file"
      accept='image/*'
      class="form-control" id="exampleInputPassword1" onChange={handleImg} />
    </div>
   
    <button type="submit" class="btn btn-primary">Add Post</button>
    </div>
  
  </form>
  
    </>
    )
  }
  
export default AddPost