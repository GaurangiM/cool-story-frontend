import React, { useEffect} from 'react'
import { useParams } from 'react-router'
import { fetctSpace } from '../../store/spaceDetails/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectSpaceDetails } from '../../store/spaceDetails/selectors'
import Space from '../../components/Space'

const SpaceDetails = (props)=> {
    const spaceId = useParams("id")
    console.log(spaceId)
    const dispatch = useDispatch()
    const spaceDetails = useSelector(selectSpaceDetails)
    console.log(spaceDetails)

    useEffect(()=> {
        dispatch(fetctSpace(spaceId.id))
    },[dispatch, spaceId.id])

    return (
        <div>
            <Space id={spaceDetails.id}
                    title={spaceDetails.title}
                    description={spaceDetails.description}
                    backgroundColor={spaceDetails.backgroundColor}
                    color={spaceDetails.color}
                    showLink={false}
            />
            
        </div>
    )
}

export default SpaceDetails