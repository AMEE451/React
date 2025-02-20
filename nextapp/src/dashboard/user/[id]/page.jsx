import React from 'react'

const page = async (props) => {
    console.log(await props.params);

    return (
        <div>page</div>
    )
}

export default page