// import React from "react"
// import "./Picturedata.css"
// function Picturedata(props){
//     return(
//         <div>
//             <form>
//             {/* <label> ID:
//             <input 
//             type="text"
//             name="id"
//             value={props.id}
//             onChange={props.handleChange}
//             size="36"
//             readOnly
//             />
//             </label> */}
//             <br />
//             主讲人头像:
//             <br />
//             {props.host_avatar == "" ? 
//                 <label>
//                 <div className="hint">上传</div>
//                 <input 
//                 type="file" 
//                 name="host_avatar"
//                 value={props.host_avatar}
//                 accept="image/png"
//                 onChange={props.handleChange}
//                 />
//                 </label> :  <label>
//             <div className= "hint">{props.host_avatar}</div>
//             <input 
//             type="file" 
//             name="host_avatar"
//             value={props.host_avatar}
//             accept="image/png"
//             onChange={props.handleChange}
//             />
//             </label>
//             }    
//             <br />
//             主讲人头像（矩形）:
//             <br />
//             {props.host_avatar_rect == "" ? 
//                 <label>
//                 <div className="hint">上传</div>
//                 <input 
//                 type="file" 
//                 name="host_avatar_rect"
//                 value={props.host_avatar_rect}
//                 accept="image/png"
//                 onChange={props.handleChange}
//                 />
//                 </label> :  <label>
//             <div className= "hint">{props.host_avatar_rect}</div>
//             <input 
//             type="file" 
//             name="host_avatar_rect"
//             value={props.host_avatar_rect}
//             accept="image/png"
//             onChange={props.handleChange}
//             />
//             </label>
//             }    
//             <br />
//             分享会标题图:
//             <br />
//             {props.lecture_banner == "" ? 
//                 <label>
//                 <div className="hint">上传</div>
//                 <input 
//                 type="file" 
//                 name="lecture_banner"
//                 value={props.lecture_banner}
//                 accept="image/png"
//                 onChange={props.handleChange}
//                 />
//                 </label> :  <label>
//             <div className= "hint">{props.lecture_banner}</div>
//             <input 
//             type="file" 
//             name="lecture_banner"
//             value={props.lecture_banner}
//             accept="image/png"
//             onChange={props.handleChange}
//             />
//             </label>
//             }
//             <br />
//             分享会分享模板图:
//             <br />
             
//             {props.sharing_pic == "" ? 
//                 <label>
//             <div className= "hint">上传</div>
//             <input 
//             type="file" 
//             name="sharing_pic"
//             value={props.sharing_pic}
//             accept="image/png"
//             onChange={props.handleChange}
//             />
//             </label> :  <label>
//             <div className= "hint">{props.sharing_pic}</div>
//             <input 
//             type="file" 
//             name="sharing_pic"
//             value={props.sharing_pic}
//             accept="image/png"
//             onChange={props.handleChange}
//             />
//             </label>
//             }            
            
//             <br />
//             <button 
//             className="btn btn-primary btn-sm"
//             onClick={props.handleSubmit} 
//             style={{marginRight:"5px"}}>提交</button>
//             <button 
//             className="btn btn-primary btn-sm"
//             onClick={props.handleReset}>重置</button>
//             </form>
//         </div>

//     )
// }
// export default Picturedata;