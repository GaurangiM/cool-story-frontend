import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { fetchUserSpaces } from '../../store/spaces/actions'
import { selectSpaces } from '../../store/spaces/selectors'
import Space from '../../components/Space'

const Spaces = ()=> {
    const spaces = useSelector(selectSpaces);
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchUserSpaces())
    }, [ dispatch])

    return (
        <div>
            {spaces.map(space=> {
                return <Space key={space.id}
                id={space.id}
                title={space.title}
                description={space.description}
                backgroundColor={space.backgroundColor}
                color={space.color}
                showLink={true}/>;
            })}
        </div>
    )
}

export default Spaces;