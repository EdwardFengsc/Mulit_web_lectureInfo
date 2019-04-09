import React, {Component} from "react"
import JsonUitl from "../JsonParse/JsonUitl"
import LectureDelete from "../Component/LectureDelete"
class DeleteLectureInfoContainer extends Component{
    constructor(){
        super()
        this.state={
            allLectureInfo:[],
            lectureName:"",
            hostName:"",
            hostTitle:"",
            hostTag:"",
            hostIntro:"",
            lectureTags:[],
            lectureIntro:"",
            startDate:"",
            startTime:0,
            recapVideoTimeElapsed:0,
            id:"",
            ongoing:false,
            host_avatar:"",
            host_avatar_uri:"",
            host_avatar_rect:"",
            host_avatar_rect_uri:"",
            lecture_banner:"",
            lecture_banner_uri:"",
            sharing_pic:"",
            sharing_pic_uri:""
        }
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleSelectChange(event){
        const {value} = event.target
        this.setState(prevState => {
          const year = (new Date(prevState.allLectureInfo[value].startTime)).getFullYear()
          const month = (new Date(prevState.allLectureInfo[value].startTime)).getMonth().toString().length === 1 ? 
          '0' + ((new Date(prevState.allLectureInfo[value].startTime)).getMonth() + 1).toString() : 
          ((new Date(prevState.allLectureInfo[value].startTime)).getMonth() + 1)
          const date = (new Date(prevState.allLectureInfo[value].startTime)).getDate().toString().length === 1 ? 
          '0' + ((new Date(prevState.allLectureInfo[value].startTime)).getDate()).toString() : 
          ((new Date(prevState.allLectureInfo[value].startTime)).getDate()).toString()
          const hour = ((new Date(prevState.allLectureInfo[value].startTime)).getHours()).toString().length === 1 ?
          '0' +  ((new Date(prevState.allLectureInfo[value].startTime)).getHours()).toString() :
          ((new Date(prevState.allLectureInfo[value].startTime)).getHours()).toString()
          const minute = ((new Date(prevState.allLectureInfo[value].startTime)).getMinutes()).toString().length === 1 ?
          '0' + ((new Date(prevState.allLectureInfo[value].startTime)).getMinutes()).toString() :
          ((new Date(prevState.allLectureInfo[value].startTime)).getMinutes()).toString()
          // console.log(year,month,date,hour,minute)
          const startDate = year + '-' + month + '-' + date + 'T' + hour + ':' + minute
            return {
            allLectureInfo:prevState.allLectureInfo,
            lectureName:prevState.allLectureInfo[value].lectureName,
            hostName:prevState.allLectureInfo[value].hostName,
            hostTitle:prevState.allLectureInfo[value].hostTitle,
            hostTag:prevState.allLectureInfo[value].hostTag,
            hostIntro:prevState.allLectureInfo[value].hostIntro,
            lectureTags:prevState.allLectureInfo[value].lectureTags,
            lectureIntro:prevState.allLectureInfo[value].lectureIntro,
            startDate:startDate,
            startTime:prevState.allLectureInfo[value].startTime,
            recapVideoTimeElapsed:prevState.allLectureInfo[value].recapVideoTimeElapsed,
            id:prevState.allLectureInfo[value].id,
            ongoing:prevState.allLectureInfo[value].ongoing,
            host_avatar_uri:prevState.allLectureInfo[value].hostAvatarUri,
            host_avatar_rect_uri:prevState.allLectureInfo[value].hostAvatarRectUri,
            lecture_banner_uri:prevState.allLectureInfo[value].bannerUri,
            sharing_pic_uri:prevState.allLectureInfo[value].sharingPicUri,
            sharing_pic:"",
            lecture_banner:"",
            host_avatar_rect:"",
            host_avatar:""
            }
        })
    }
    handleDelete(event){
        event.preventDefault()
        console.log("delete clicked!")



        
        const url = "http://localhost:8080/family/lecture"
              fetch(url,{
                method: 'GET',
                headers:{
                  'Content-Type': 'application/json',
                  'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyZGU0YmMxZi0zY2IxLTQ4ZDMtOWY3NC0wYTAxYmU5M2RkZDQiLCJpc3MiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJhdWQiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJzdWIiOiJGYW1pbHktVXNlci1iOTNjN2YxNC0xMjI0LTQ1OGItYWFmMS02NTI5NjM3MTA5M2QiLCJpYXQiOjE1NTM4OTU4MDgsImV4cCI6MTU1NjQ4NzgwOCwiYXV0aG9yaXRpZXMiOlsiU1lTVEVNX0FETUlOIl0sInJlZnJlc2hDb3VudCI6MCwicmVmcmVzaExpbWl0IjoyMDAwfQ.LwFp-NR5Wdmo2lxzOoRM7t0uze1EFcLhRGiVfdJR6cI'
                }
              }).then(res => {
                if (res.ok){
                res.json().then(response => {
                    const lectureInfoJson = response.past
                    const [lectureInfoActive] = response.active
                    lectureInfoJson.push(lectureInfoActive)
                    const res = []
                    lectureInfoJson.map(item => res.push(item))
              this.setState({allLectureInfo:lectureInfoJson,
                              lectureName:"",
                              hostName:"",
                              hostTitle:"",
                              hostTag:"",
                              hostIntro:"",
                              lectureTags:[],
                              lectureIntro:"",
                              startDate:"",
                              startTime:0,
                              recapVideoTimeElapsed:0,
                              id:"",
                              ongoing:false,
                              host_avatar:"",
                              host_avatar_uri:"",
                              host_avatar_rect:"",
                              host_avatar_rect_uri:"",
                              lecture_banner:"",
                              lecture_banner_uri:"",
                              sharing_pic:"",
                              sharing_pic_uri:""
                              })
        }).catch(error => console.error("Error",error))}
        else{
          alert(res.statusText)
        }
      })

    }


      componentWillMount(){
        const url = "http://localhost:8080/family/lecture"
        fetch(url,{
          method: 'GET',
          headers:{
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyZGU0YmMxZi0zY2IxLTQ4ZDMtOWY3NC0wYTAxYmU5M2RkZDQiLCJpc3MiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJhdWQiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJzdWIiOiJGYW1pbHktVXNlci1iOTNjN2YxNC0xMjI0LTQ1OGItYWFmMS02NTI5NjM3MTA5M2QiLCJpYXQiOjE1NTM4OTU4MDgsImV4cCI6MTU1NjQ4NzgwOCwiYXV0aG9yaXRpZXMiOlsiU1lTVEVNX0FETUlOIl0sInJlZnJlc2hDb3VudCI6MCwicmVmcmVzaExpbWl0IjoyMDAwfQ.LwFp-NR5Wdmo2lxzOoRM7t0uze1EFcLhRGiVfdJR6cI'
          }
        }).then(res => {
          if (res.ok){
          res.json().then(response => {
              const lectureInfoJson = response.past
              const [lectureInfoActive] = response.active
              lectureInfoJson.push(lectureInfoActive)
              const res = []
              lectureInfoJson.map(item => res.push(item))
              this.setState({allLectureInfo:lectureInfoJson})
        }).catch(error => console.error("Error",error))}
        else{
          alert(res.statusText)
        }
      })
      }

    render(){
        console.log(this.state)
        if(JsonUitl.mapToJson(JsonUitl.objToStrMap(this.state.allLectureInfo)) != JsonUitl.mapToJson(JsonUitl.objToStrMap([]))) {
        const lectureList = (
            <select className="form-control" name="id" onChange={this.handleSelectChange} size="20">
                {this.state.allLectureInfo.map((lecture, index) => 
                {
                  const year = (new Date(lecture.startTime)).getFullYear()
                  const month = (new Date(lecture.startTime)).getMonth().toString().length === 1 ? 
                  '0' + ((new Date(lecture.startTime)).getMonth() + 1).toString() : 
                  ((new Date(lecture.startTime)).getMonth() + 1)
                  const date = (new Date(lecture.startTime)).getDate().toString().length === 1 ? 
                  '0' + ((new Date(lecture.startTime)).getDate()).toString() : 
                  ((new Date(lecture.startTime)).getDate()).toString()
                  const hour = ((new Date(lecture.startTime)).getHours()).toString().length === 1 ?
                  '0' +  ((new Date(lecture.startTime)).getHours()).toString() :
                  ((new Date(lecture.startTime)).getHours()).toString()
                  const minute = ((new Date(lecture.startTime)).getMinutes()).toString().length === 1 ?
                  '0' + ((new Date(lecture.startTime)).getMinutes()).toString() :
                  ((new Date(lecture.startTime)).getMinutes()).toString()
                  const startDate = year + '-' + month + '-' + date + ' ' + hour + ':' + minute
                return(
                    <option value={index} key={index}> 
                    分享会名称:{lecture.lectureName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主讲人名字:{lecture.hostName} 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分享会开始时间: {startDate} 
                    </option>
                )
                }
        )}
         </select>
        )
        
        return(
        <div className="form-group">
            {lectureList}
            <LectureDelete
          setState = {this._setState}
          handleDelete = {this.handleDelete}
          {...this.state}
          />
        </div>
        )
        }
        else{
            return(
                <h1>无数据</h1>
            )
        }
    }
}
export default DeleteLectureInfoContainer