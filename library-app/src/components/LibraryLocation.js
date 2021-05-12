import React from 'react'

const LibraryLocation = (props) => {

    console.log(props)

    // const isTacoma = false

    // const libraryLocationName = "Seattle Public Library"

    // const tacomaLocationName = "Tacoma Public Library"
    // const seattleLocationName = "Seattle Public Library"

    // function add(num, num2) {
    //     return num + num2
    // }

    function displayLocation(location) {
        // let output

        const locationObject = {
            "TACOMA": "Tacoma Public Library",
            "SEATTLE": "Seattle Public Library",
            "BREMERTON": "Bremerton Public Library"
        }

        // if (location = "TACOMA") {
        //     output = "Tacoma Public Library"
        // } else if (location = "SEATTLE") {
        //     output = "Seattle Public Library"
        // } else if (location = "BREMERTON") {
        //     output = "Bremerton Public Library"
        // }

        // return output

        return locationObject[location]
    }

    return <div>You are at the {displayLocation(props.location)}</div>

    // return <div>You are at the {if (isTacoma) {}}</div> - DOES NOT WORK
}

// export const AnotherComponent = () => {
//     return <div>This is a different component</div>
// }

export default LibraryLocation