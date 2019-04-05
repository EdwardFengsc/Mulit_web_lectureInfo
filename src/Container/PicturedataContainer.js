// import React,{Component} from "react"
// import JsonUtils from "../JsonParse/JsonUitl"
// // import eventProxy from "react-eventproxy/src/eventProxy";
// import Picturedata from "../Component/Picturedata";
// var formData = new FormData()
// class PicturedataContainer extends Component{
    
//     constructor(){
//         super()
//         this.state={
//             id:"",
//             host_avatar:"",
//             host_avatar_rect:"",
//             lecture_banner:"",
//             sharing_pic:"",
//             // formdata = new FormData()
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleReset = this.handleReset.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//     componentDidMount(){
//         eventProxy.on("id",(ID) => {this.setState({id:ID})})
//     }
//     handleChange(event){
//         event.preventDefault()
//         const {name,value,files} = event.target
//         this.setState({[name]:value})
//         console.log(files[0])
//         formData.append(name,files[0])
//         console.log(formData)
//         // console.log(event.target.files[0])
//         // console.log(formData[name])
//         // console.log(Array.from(files))
        

//     }
//     handleReset(event){
//         event.preventDefault()
//         this.setState(prevState => ({
//             id:prevState.id,
//             host_avatar:"",
//             host_avatar_rect:"",
//             lecture_banner:"",
//             sharing_pic:""
//         }))
//         formData = new FormData()
//     }
//     handleSubmit(event){
//         event.preventDefault()
//         const metedatajson = JsonUtils.mapToJson(JsonUtils.objToStrMap(this.state))
//         const url = "http://localhost:8080/family/lecture/pictures"
//         // console.log(formData.getAll())
//         // var formData = new FormData()
//         // this.state.map(item => item.)
//         console.log(this.state)
//         formData.append("id",this.state.id)
//         // for (var i=0; i < photos.files.length; i++){
//         //     formData.append()
//         // }

//         fetch(url,{
//             method: 'POST',
//             body: formData,
//             headers:{
//               'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyZGU0YmMxZi0zY2IxLTQ4ZDMtOWY3NC0wYTAxYmU5M2RkZDQiLCJpc3MiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJhdWQiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJzdWIiOiJGYW1pbHktVXNlci1iOTNjN2YxNC0xMjI0LTQ1OGItYWFmMS02NTI5NjM3MTA5M2QiLCJpYXQiOjE1NTM4OTU4MDgsImV4cCI6MTU1NjQ4NzgwOCwiYXV0aG9yaXRpZXMiOlsiU1lTVEVNX0FETUlOIl0sInJlZnJlc2hDb3VudCI6MCwicmVmcmVzaExpbWl0IjoyMDAwfQ.LwFp-NR5Wdmo2lxzOoRM7t0uze1EFcLhRGiVfdJR6cI'
//             }
//           }).then(res => res.json()).then(response => {
//               console.log(response)
//             //   this.setState({id: ID})
//             //   alert("Lecture text information upload success!")
//             //   eventProxy.trigger("id",ID)
//               // this.props.transferId(ID)
//           }).catch(error => console.error("Error",error))
//     }

//     render(){
//         console.log(this.state)
//         console.log(formData)
//         return(
//             <div>
//                 <header>
//                 <Picturedata 
//                 handleChange = {this.handleChange}
//                 handleReset = {this.handleReset}
//                 handleSubmit = {this.handleSubmit}
//                 {...this.state}
//                 />
//                 </header>
//             </div>
//         )
//     }

// }
// export default PicturedataContainer;