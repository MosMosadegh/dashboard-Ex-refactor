import React, {useState} from 'react'

function withShowToggle(OriginalComponent) {
    const NewComponent = (props) =>{
        console.log(props)
        const [showInfo, setShowInfo] = useState(false)
        const toggleShowInfoHandler = () =>{
          setShowInfo(prevShowInfo => !prevShowInfo)
        }
        return <OriginalComponent showInfo={showInfo} toggleShowInfoHandler= {toggleShowInfoHandler} {...props}/>
    }
return NewComponent
}

export default withShowToggle