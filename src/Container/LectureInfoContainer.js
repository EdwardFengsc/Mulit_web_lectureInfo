import React, {Component} from "react"
import JsonUitl from "../JsonParse/JsonUitl"
import LectureUpdate from "../Component/LectureUpdate"
var formData = new FormData()
class LectureInfoContainer extends Component{
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
        this.handleChange = this.handleChange.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this._setState = this.setState.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSelectChange(event){
        const {name,value} = event.target
        // this.setState(prevState =>{
        //     console.log(prevState.allLectureInfo[key])
        // })
        this.setState(prevState => {
            const startDate = (new Date(prevState.allLectureInfo[value].startTime)).toISOString().slice(0,16)
            // var parts = startDate.match(/(\d{2}) (\d{2}) (\d{4}) (\d{2}):(\d{2})/);
            console.log(startDate)
            // console.log(parts)
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
            sharing_pic_uri:prevState.allLectureInfo[value].sharingPicUri
            // host_avatar:prevState.allLectureInfo[value].host_avatar,
            // host_avatar_rect:prevState.allLectureInfo[value].host_avatar_rect,
            // lecture_banner:prevState.allLectureInfo[value].lecture_banner,
            // sharing_pic:prevState.allLectureInfo[value].sharing_pic
            }
        })
    }

    handleChange(event){
        const {name,value,type,checked,files} = event.target
        if (name ==="startDate"){
          var parts = value.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
          console.log(parts)
          // const date = new Date(parts[1],parts[2] - 1,parts[3],parts[4],parts[5],0,0)
          // console.log(parts[0])
          // console.log(parts[1])
          // console.log(date.getMilliseconds())
          const starttime = (new Date(parts[1],parts[2] - 1,parts[3],parts[4],parts[5],0,0)).getTime()
          this.setState({startTime:starttime})
          // this.setState({startTime:Date.UTC(value)})
  
        }
        if(type === "file"){
          this.setState({[name]:value}) 
          formData.append(name,files[0])
        }
        else{
          type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value}) 
        }   
      }

    handleReset(event){
        event.preventDefault()
        this.setState(prevState => {
            return ({
          allLectureInfo: prevState.allLectureInfo,
          lectureName:"",
          hostName:"",
          hostTitle:"",
          hostTag:"",
          hostIntro:"",
          lectureTags:["aaa","bbb"],
          lectureIntro:"",
          startDate:"",
          startTime:0,
          recapVideoTimeElapsed:0,
          id:"",
          ongoing:false,
          host_avatar:"",
          host_avatar_rect:"",
          lecture_banner:"",
          sharing_pic:"",
        })
    })
    formData = new FormData()
    }

    handleSubmit(event){
        event.preventDefault()
        const metedatajson = JsonUitl.mapToJson(JsonUitl.objToStrMap(this.state))
        console.log(metedatajson)
        const url = "http://localhost:8080/family/lecture"
        fetch(url,{
          method: 'POST',
          body: metedatajson,
          headers:{
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyZGU0YmMxZi0zY2IxLTQ4ZDMtOWY3NC0wYTAxYmU5M2RkZDQiLCJpc3MiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJhdWQiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJzdWIiOiJGYW1pbHktVXNlci1iOTNjN2YxNC0xMjI0LTQ1OGItYWFmMS02NTI5NjM3MTA5M2QiLCJpYXQiOjE1NTM4OTU4MDgsImV4cCI6MTU1NjQ4NzgwOCwiYXV0aG9yaXRpZXMiOlsiU1lTVEVNX0FETUlOIl0sInJlZnJlc2hDb3VudCI6MCwicmVmcmVzaExpbWl0IjoyMDAwfQ.LwFp-NR5Wdmo2lxzOoRM7t0uze1EFcLhRGiVfdJR6cI'
          }
        }).then(res => {
          if (res.ok){
          res.json().then(response => {
            const ID = response.id
            console.log(ID)
            // console.log(response)
            this.setState({id: ID})
             alert("Uploading text part successful!")
            // eventProxy.trigger("id",ID)
            // this.props.transferId(ID)
        }).catch(error => console.error("Error",error))
        .then( () =>{
          console.log(this.state.id)
          const urlp = "http://localhost:8080/family/lecture/pictures"
        // console.log(formData.getAll())
        // var formData = new FormData()
        // this.state.map(item => item.)
        // console.log(this.state)
        formData.append("id","e4de3598-994b-4f60-8c13-c92366739bc8")
        // formData.append("id",this.state.id)
        // for (var i=0; i < photos.files.length; i++){
        //     formData.append()
        // }
  
        fetch(urlp,{
            method: 'POST',
            body: formData,
            headers:{
              'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyZGU0YmMxZi0zY2IxLTQ4ZDMtOWY3NC0wYTAxYmU5M2RkZDQiLCJpc3MiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJhdWQiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJzdWIiOiJGYW1pbHktVXNlci1iOTNjN2YxNC0xMjI0LTQ1OGItYWFmMS02NTI5NjM3MTA5M2QiLCJpYXQiOjE1NTM4OTU4MDgsImV4cCI6MTU1NjQ4NzgwOCwiYXV0aG9yaXRpZXMiOlsiU1lTVEVNX0FETUlOIl0sInJlZnJlc2hDb3VudCI6MCwicmVmcmVzaExpbWl0IjoyMDAwfQ.LwFp-NR5Wdmo2lxzOoRM7t0uze1EFcLhRGiVfdJR6cI'
            }
          }).then(res => res.json()).then(response => {
              console.log(response)
            //   this.setState({id: ID})
            //   alert("Lecture text information upload success!")
            //   eventProxy.trigger("id",ID)
              // this.props.transferId(ID)
          }).catch(error => console.error("Error",error))})
      }
      else{
        alert(res.statusText)
      }
          
        })
        
      //   console.log(JsonUtils.mapToJson(JsonUtils.objToStrMap(this.state)))
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
              // console.log(JSON.stringify(response))
              // const lectureInfo = JsonUitl.strMapToObj(response)
              // console.log(lectureInfo)
              // console.log(response.past)
              const lectureInfoJson = response.past
              const [lectureInfoActive] = response.active
              lectureInfoJson.push(lectureInfoActive)
              const res = []
              lectureInfoJson.map(item => res.push(item))
              // console.log(res[0])
          //    for (i = 0; i< lectureInfoJson.length; i++){
  
          //    }
              // const {lectureInfo} = lectureInfoJson
              // console.log(lectureInfo)
              // console.log(lectureInfoJson)
              // const lectureInfo = JsonUitl.strMapToObj(lectureInfoJson)
              this.setState({allLectureInfo:lectureInfoJson})
          //   const ID = response.id
            // console.log(ID)
          //   this.setState({id: ID})
          //    alert("Uploading text part successful!")
            // eventProxy.trigger("id",ID)
            // this.props.transferId(ID)
        }).catch(error => console.error("Error",error))}
        else{
          alert(res.statusText)
        }
      })
      }

    render(){
        console.log(this.state)
        if(this.state.allLectureInfo != []) {
        //         const lecturetaglist = (
        //     <select>
        //         {this.state.lectureTags.map(tag => <option>
        //             {tag.value}
        //             </option>)}
        //         </select>
        // )
        // const a = this.state.allLectureInfo.map(() => {})
        // this.state.allLectureInfo.map(lecture => console.log(lecture))
        const lectureList = (
            <select className="form-control" name="id" onChange={this.handleSelectChange} size="20">
                {this.state.allLectureInfo.map((lecture, index) => 
                {
                  const date =  (new Date(lecture.startTime)).toISOString().slice(0,16)
                // const date = (new Date(lecture.startTime)).toString()
                return(
                    <option value={index} key={index}> 
                    分享会名称:{lecture.lectureName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主讲人名字:{lecture.hostName} 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分享会开始时间: {date} 
                    </option>
                )
                }
                

        )}
         </select>
        )
        
        return(
        <div className="form-group">
            {/* {lecturetaglist} */}
            {lectureList}
            <LectureUpdate
            handleChange = {this.handleChange}
          handleReset = {this.handleReset}
          handleSubmit = {this.handleSubmit}
          setState = {this._setState}
          {...this.state}
          />
        </div>
        )
        }
        else{
            return(
                <p></p>
            )
        }
    }
}
export default LectureInfoContainer