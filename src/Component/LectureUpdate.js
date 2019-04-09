import React from "react"
import LectureTagsContainer from "../Container/LectureTagsContainer"
function LectureUpdate(props){
    // console.log(props.lectureTags)
    return(
        <div>
            <form>
                <br />
                        分享会名称:
                <br />
                <input 
                type="text" 
                name="lectureName" 
                value={props.lectureName}
                placeholder="LectureName"
                onChange={props.handleChange}
                size="12"
                />
                <br />
                        主讲人名字:
                <br />
                <input 
                type="text" 
                name="hostName" 
                value={props.hostName}
                placeholder="HostName"
                onChange={props.handleChange}
                size="12"
                />
                <br />
                        主讲人头衔:
                <br />
                <input 
                type="text" 
                name="hostTitle" 
                value={props.hostTitle}
                placeholder="hostTitle"
                onChange={props.handleChange}
                size="12"
                />
                <br />
                    讲师标签:
                <br />
                <input 
                type="text" 
                name="hostTag" 
                value={props.hostTag}
                placeholder="hostTag"
                onChange={props.handleChange}
                size="12"
                />
                {/* <br />
                <input 
                type="text" 
                name="hostIntro" 
                value={props.hostIntro}
                placeholder="hostIntro"
                onChange={props.handleChange}
                /> */}
                <br />
                    讲师介绍:
                <br />
                <textarea 
                name="hostIntro"
                value={props.hostIntro}
                rows="5"
                cols="40"
                placeholder="hostIntro"
                onChange={props.handleChange}
                />
                <br />
                    分享会标签:
                <br />
                <LectureTagsContainer
                setState = {props.setState}
                tags = {props.lectureTags}
                />
                {/* Todo lectureTags!!!!!! */}
                {/* <input 
                type="text" 
                name="startTime" 
                value={props.lectureIntro}
                placeholder="lectureIntro"
                onChange={props.handleChange}
                />
                <br /> */}
                <br />
                    分享会介绍:
                <br />
                <textarea 
                name="lectureIntro"
                value={props.lectureIntro}
                rows="5"
                cols="40"
                placeholder="lectureIntro"
                onChange={props.handleChange}
                />
                {/* <input 
                type="text" 
                name="lectureIntro" 
                value={props.lectureIntro}
                placeholder="lectureIntro"
                onChange={props.handleChange}
                /> */}
                <br />
                    分享会开始时间:
                <br />
                <input 
                type="datetime-local" 
                name="startDate" 
                value={props.startDate}
                // placeholder="startTime"
                onChange={props.handleChange}
                />
                {/* <br />
                    RecapVideoTimeElapsed:
                <br />
                <input 
                type="text" 
                name="recapVideoTimeElapsed" 
                value={props.recapVideoTimeElapsed}
                placeholder="recapVideoTimeElapsed"
                onChange={props.handleChange}
                /> */}
                {/* <br />
                    ID:
                <br />
                <input 
                type="text" 
                name="id" 
                value={props.id}
                placeholder="id"
                onChange={props.handleChange}
                size = "36"
                /> */}
                <br />
                <label>
                <input 
                type="checkbox" 
                name="ongoing" 
                checked={props.ongoing}
                onChange={props.handleChange}
                />是否是下一场分享会?
                </label>

                <br />
            主讲人头像:
            <br />
            <img 
            src={props.host_avatar_uri} 
            alt="主讲人头像"
            width="128" 
            height="128"
            />
            <br />
            {props.host_avatar == "" ? 
                <label>
                <div className="upload">上传</div>
                <input 
                type="file" 
                name="host_avatar"
                value={props.host_avatar}
                accept="image/png"
                onChange={props.handleChange}
                />
                </label> :  <label>
            <div className= "upload">{props.host_avatar}</div>
            <input 
            type="file" 
            name="host_avatar"
            value={props.host_avatar}
            accept="image/png"
            onChange={props.handleChange}
            />
            </label>
            }    
            <br />
            主讲人头像（矩形）:
            <br />
      
            <img 
            src={props.host_avatar_rect_uri} 
            alt="主讲人头像（矩形）"
            width="128" 
            height="128"
            />
                  <br />
            {props.host_avatar_rect == "" ? 
                <label>
                <div className="upload">上传</div>
                <input 
                type="file" 
                name="host_avatar_rect"
                value={props.host_avatar_rect}
                accept="image/png"
                onChange={props.handleChange}
                />
                </label> :  <label>
            <div className= "upload">{props.host_avatar_rect}</div>
            <input 
            type="file" 
            name="host_avatar_rect"
            value={props.host_avatar_rect}
            accept="image/png"
            onChange={props.handleChange}
            />
            </label>
            }    
            <br />
            分享会标题图:
            <br />
            <img 
            src={props.lecture_banner_uri} 
            alt="分享会标题图"
            width="128" 
            height="128"/>
            <br />
            {props.lecture_banner == "" ? 
                <label>
                <div className="upload">上传</div>
                <input 
                type="file" 
                name="lecture_banner"
                value={props.lecture_banner}
                accept="image/png"
                onChange={props.handleChange}
                />
                </label> :  <label>
            <div className= "upload">{props.lecture_banner}</div>
            <input 
            type="file" 
            name="lecture_banner"
            value={props.lecture_banner}
            accept="image/png"
            onChange={props.handleChange}
            />
            </label>
            }
            <br />
            分享会分享模板图:
            <br />
            <img 
            src={props.sharing_pic_uri}
            alt="分享会分享模板图"
            width="128" 
            height="128"
            />
            <br />
            {props.sharing_pic == "" ? 
                <label>
            <div className= "upload">上传</div>
            <input 
            type="file" 
            name="sharing_pic"
            value={props.sharing_pic}
            accept="image/png"
            onChange={props.handleChange}
            />
            </label> :  <label>
            <div className= "upload">{props.sharing_pic}</div>
            <input 
            type="file" 
            name="sharing_pic"
            value={props.sharing_pic}
            accept="image/png"
            onChange={props.handleChange}
            />
            </label>
            }            
            
            <br />
            <button 
            className="btn btn-primary btn-sm"
            onClick={props.handleSubmit} 
            style={{marginRight:"5px"}}>提交</button>
            <button 
            className="btn btn-primary btn-sm"
            onClick={props.handleReset}>重置</button>
                
                {/* <br />
                <button 
                className="btn btn-primary btn-sm" 
                style={{lineHeight: "5%"}} 
                onClick={props.handleSubmit} 
                style={{marginRight:"5px"}}>提交</button>
                <button 
                className="btn btn-primary btn-sm" 
                onClick={props.handleReset}>重置</button> */}
            </form>
        </div>
    )

}
export default LectureUpdate