import React from "react"
function LectureTagDelete(props){
    return(
        <div>
        <input type="text" 
        id={props.id} 
        value={props.value} 
        onChange={props.handleChange}
        size="10"
        style={{marginTop:"5px"}}
        readOnly
        />
        </div>
    )
}
export default LectureTagDelete