import React, { useEffect} from 'react'
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useDispatch } from 'react-redux';
import { deleteStory } from '../../store/user/actions'

const StoryCarousel = (props)=> {
    const dispatch = useDispatch()
    const onDelete = (storyId, spaceId)=> {
        console.log(storyId, spaceId)
        dispatch(deleteStory(storyId, spaceId))
    }

    return (
        <Carousel className='mt-5'>
      {props.space.stories.map(story => {
        return (
          <Carousel.Item key={story.id}>
            {story.imageUrl ? (
              <img
                className='d-block w-100'
                src={story.imageUrl}
                alt={story.name}
              />
            ) : null}
            <Carousel.Caption
              style={{
                backgroundColor: `${props.space.backgroundColor}99`,
                color: props.space.color
              }}
              className='p-5'
            >
              <h3>{story.name}</h3>
              <p>{story.content}</p>
              <Button variant='danger' onClick={() => onDelete(story.id, props.space.id)}>
                Delete story
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
    )
}

export default StoryCarousel