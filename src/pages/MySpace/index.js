import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postStory } from "../../store/user/actions"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from '../../store/user/selectors'
import Space from '../../components/Space'
import StoryCarousel from '../../components/StoryCarousel'
import { useHistory } from 'react-router-dom'
import Loading from "../../components/Loading";

const MySpace = (props)=> {
    const [showPostForm, setShowPostForm] = useState(false)
    const [showPostEditForm, setShowPostEditForm] = useState(false)
    const [postName, setPostName] = useState("");
    const [postContent, setPostContent] = useState("");
    const [imgURL, setImgURL] = useState("")
    const [showImage, setShowImage] = useState(false)
    const dispatch = useDispatch()
    const {space, token, id} = useSelector(selectUser)

    const history = useHistory();

    if (token === null) {
      history.push("/");
    }

    if (space === null) {
      return <Loading />;
    }

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
          <Space
              id={space.id}
              title={space.title}
              description={space.description}
              backgroundColor={space.backgroundColor}
              color={space.color}
              showLink={false}
          />
            {!showPostForm && 
            <button onClick={()=> {setShowPostForm(true)}}>Post a cool story bro</button>}

            <button onClick={()=> {setShowPostEditForm(true)}}>Edit My Space</button>

            {showPostForm && (
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
                <Button variant="primary" onClick={()=> setShowPostForm(false)}>
                  Cancel
                </Button>
              </Form>
            )}

            {}
           
           <StoryCarousel space={space} />
        </div>
    )
}

export default MySpace