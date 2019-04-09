import React, { Component } from 'react';
import Metadata from "../Component/Metadata"
import JsonUtils from "../JsonParse/JsonUitl"
// import eventProxy from "../../node_modules/react-eventproxy/src/eventProxy"
var formData = new FormData()
// import eventProxy from "../node_modules/react-eventproxy/src/eventProxy"
class MetadataContainer extends Component {
    constructor(){
      super()
      this.state={
        lectureName:"shichao",
        hostName:"shichao",
        hostTitle:"professor",
        hostTag:"great",
        hostIntro:"hhhadasdasdsadasdhasihfiahisahfihiahfiashfifhsai",
        lectureTags:[],
        lectureIntro:"aa",
        startDate:"",
        startTime:12312414,
        recapVideoTimeElapsed:123214,
        id:"",
        ongoing:true,
        host_avatar:"",
        host_avatar_rect:"",
        lecture_banner:"",
        sharing_pic:""
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleReset = this.handleReset.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this._setState = this.setState.bind(this)
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
      this.setState({
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
        host_avatar_rect:"",
        lecture_banner:"",
        sharing_pic:"",
      })
      formData = new FormData()
    }
    handleSubmit(event){
      event.preventDefault()
      let submitflag = true
      // for (let k of Object.values(this.state)){
      //   if (k === ""){
      //     submitflag = false
      //     break

      //   }

      // }
    if(submitflag){
      const metedatajson = JsonUtils.mapToJson(JsonUtils.objToStrMap(this.state))
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
          // console.log(ID)
          // console.log(response)
          this.setState({id: ID})
           alert("文字部分上传成功!")
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
      // formData.append("id","e4de3598-994b-4f60-8c13-c92366739bc8")
      formData.append("id",this.state.id)
      // for (var i=0; i < photos.files.length; i++){
      //     formData.append()
      // }

      fetch(urlp,{
          method: 'POST',
          body: formData,
          headers:{
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyZGU0YmMxZi0zY2IxLTQ4ZDMtOWY3NC0wYTAxYmU5M2RkZDQiLCJpc3MiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJhdWQiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJzdWIiOiJGYW1pbHktVXNlci1iOTNjN2YxNC0xMjI0LTQ1OGItYWFmMS02NTI5NjM3MTA5M2QiLCJpYXQiOjE1NTM4OTU4MDgsImV4cCI6MTU1NjQ4NzgwOCwiYXV0aG9yaXRpZXMiOlsiU1lTVEVNX0FETUlOIl0sInJlZnJlc2hDb3VudCI6MCwicmVmcmVzaExpbWl0IjoyMDAwfQ.LwFp-NR5Wdmo2lxzOoRM7t0uze1EFcLhRGiVfdJR6cI'
          }
        }).then(res => {
          if(res.ok){
          // console.log(res.status)
          res.json().then(response => {
            console.log(response)
            alert("图片部分上成功!")
            this.setState({
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
              host_avatar_rect:"",
              lecture_banner:"",
              sharing_pic:"",
            })
            formData = new FormData()
          //   this.setState({id: ID})
          //   alert("Lecture text information upload success!")
          //   eventProxy.trigger("id",ID)
            // this.props.transferId(ID)
        })
      }
      else{
        alert(res.statusText)
      }
      }).catch(error => console.error("Error",error))
      })
    }
    else{
      alert(res.statusText)
    }
        
      })
    }
    else{
      console.log("what happens?")
      // alert("Need to upload all necessary data to submit!")
    }
    //   console.log(JsonUtils.mapToJson(JsonUtils.objToStrMap(this.state)))
    }
    // componentDidUpdate(){
    //   // console.log("start")
    //   eventProxy.on("lectureTags",(newtags) => {
    //     this.setState({lectureTages: newtags})
    //     // const newlectureTag = (
    //     //   lectureTags.map(item => {return item.value})
    //     // )
    //     // this.setState({lectureTags: newlectureTag})
    //   }
    //   )
    // }
    render() {
      console.log(this.state)
      // console.log(Date(1548957600000))
        
      return (
        <div>
        {/* // <div> */}
          <header>
          {/* <header> */}
          <Metadata 
          handleChange = {this.handleChange}
          handleReset = {this.handleReset}
          handleSubmit = {this.handleSubmit}
          setState = {this._setState}
          {...this.state}
          />
          </header>
        </div>
      );
    }
  }
  
  export default MetadataContainer;