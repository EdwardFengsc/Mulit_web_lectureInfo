import React from "react"
function LectureTag(props){
    return(
        <div>
        <input type="text" 
        id={props.id} 
        value={props.value} 
        onChange={props.handleChange}
        size="10"
        style={{marginTop:"5px"}}
        />
        <button 
        className="btn btn-primary btn-sm"
        type="button" 
        onClick={() => props.handleDelete(props.id)}
        style={{marginLeft:"5px"}}
        >  删除  </button>
        </div>
    )
}
export default LectureTag;