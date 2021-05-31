import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postStory } from "../../store/user/actions"
import { useDispatch } from "react-redux"

const MySpace = (props)=> {
    const [showForm, setShowForm] = useState(false)
    const [postName, setPostName] = useState("");
    const [postContent, setPostContent] = useState("");
    const [imgURL, setImgURL] = useState("")
    const [showImage, setShowImage] = useState(false)
    const dispatch = useDispatch()

    const submitPost = (e)=> {
        e.preventDefault();
        console.log({postName, postContent, imgURL})
        dispatch(postStory(postName, postContent, imgURL))
        setImgURL("")
        setPostContent("")
        setPostName("")
    }
    
    return (
        <div>
            {!showForm && 
            <button onClick={()=> {setShowForm(true)}}>Post a cool story bro</button>}

            {showForm && (
                <Form onSubmit={(e)=>submitPost(e)}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" 
                  placeholder="Enter name of post" 
                  value={postName}
                  onChange={event => setPostName(event.target.value)}/>
                </Form.Group>
              
                <Form.Group controlId="formBasicContent">
                  <Form.Label>Content</Form.Label>
                  <Form.Control type="text" placeholder="Content"
                  value={postContent} 
                  onChange={event => {
                      setPostContent(event.target.value)
                      }}/>
                </Form.Group>

                <Form.Group controlId="formBasicImage">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control type="text" placeholder="Image URL"
                  value={imgURL} 
                  onChange={event => {
                      setImgURL(event.target.value)
                      setShowImage(true)}}/>
                </Form.Group>
                {showImage && (<img src={imgURL} alt="img"/>)}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
           

        </div>
    )
}

export default MySpace