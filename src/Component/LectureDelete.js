import React from "react"
import LectureTagsDeleteContainer from "../Container/LectureTagsDeleteContainer"
function LectureDelete(props){
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
                size="12"
                readOnly
                />
                <br />
                        主讲人名字:
                <br />
                <input 
                type="text" 
                name="hostName" 
                value={props.hostName}
                placeholder="HostName"
                size="12"
                readOnly
                />
                <br />
                        主讲人头衔:
                <br />
                <input 
                type="text" 
                name="hostTitle" 
                value={props.hostTitle}
                placeholder="hostTitle"
                size="12"
                readOnly
                />
                <br />
                    讲师标签:
                <br />
                <input 
                type="text" 
                name="hostTag" 
                value={props.hostTag}
                placeholder="hostTag"
                size="12"
                readOnly
                />
                
                <br />
                    讲师介绍:
                <br />
                <textarea 
                name="hostIntro"
                value={props.hostIntro}
                rows="5"
                cols="40"
                placeholder="hostIntro"
                readOnly
                />
                <br />
                    分享会标签:
                <br />
                <LectureTagsDeleteContainer
                setState = {props.setState}
                tags = {props.lectureTags}
                />
              
                <br />
                    分享会介绍:
                <br />
                <textarea 
                name="lectureIntro"
                value={props.lectureIntro}
                rows="5"
                cols="40"
                placeholder="lectureIntro"
                readOnly
                />
              
                <br />
                    分享会开始时间:
                <br />
                <input 
                type="datetime-local" 
                name="startDate" 
                value={props.startDate}
                readOnly
                />
               
                <br />
                <label>
                <input 
                type="checkbox" 
                name="ongoing" 
                checked={props.ongoing}
                readOnly
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
   
            <br />
            分享会标题图:
            <br />
            <img 
            src={props.lecture_banner_uri} 
            alt="分享会标题图"
            width="128" 
            height="128"/>
            <br />

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
            
            <br />
            <button 
            className="btn btn-primary btn-sm"
            onClick={props.handleDelete} 
            ////////////////////////////////
            type="button"
            >删除</button>
                
            </form>
        </div>
    )

}
export default LectureDelete