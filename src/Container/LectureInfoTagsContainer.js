import React, {Component} from "react"
import LectureTag from "../Component/LectureTag"
import JsonUtils from "../JsonParse/JsonUitl";
// import eventProxy from "react-eventproxy/src/eventProxy";
var counter = 2
class LectureInfoTagsContainer extends Component{

    constructor(props){
        // console.log(props.tags)
        super(props)
        // if (props.tags === []){
        //     this.state={
        //         lectureTags:[{id:1,value:""}]
        //     }
        //     counter = 1
        // }
        // else{
        //     const newtags = []
        // for(let i=0;i < props.tags.length;i++){
        //     newtags.push({id:i,value:this.props.tags[i]})
        // }
        // this.state= {lectureTages:newtags}

        // }
        // console.log(props.tags[0])
        // console.log([][0] == [][0])
        // console.log(JsonUtils.mapToJson(JsonUtils.objToStrMap([])) === JsonUtils.mapToJson(JsonUtils.objToStrMap([])))
        // if (JsonUtils.mapToJson(JsonUtils.objToStrMap(props.tags)) == JsonUtils.mapToJson(JsonUtils.objToStrMap([]))){
        //     this.state={
        //         lectureTags:[
        //             {id:1,value:""}
        //         ]
        //     }
        //     counter = 1
        // }
        // else{
        //     console.log("hhhh")
        //     const newtags = []
        //     for(let i=0;i < props.tags.length;i++){
        //         newtags.push({id:i,value:this.props.tags[i]})
        //     }
        //     this.state= {lectureTags:newtags}
            
        // }
        // console.log(this.state.lectureTags)
        this.state={
            lectureTags:[
                {id:1,value:""}
            ]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    componentWillReceiveProps(nextProps){
        // console.log(typeof(nextProps.tags))
        if (JsonUtils.mapToJson(JsonUtils.objToStrMap(nextProps.tags)) == JsonUtils.mapToJson(JsonUtils.objToStrMap([]))){
            this.setState({lectureTags:[{id:1,value:""}]})
            counter = 1
        }
        else{
            console.log(nextProps.tags)
        const newtags = []
        for(let i=0;i < nextProps.tags.length;i++){
            newtags.push({id:i,value:nextProps.tags[i]})
        }
        this.setState({lectureTags:newtags})
        // console.log(newtags)
    }
    }

    // componentDidUpdate(prevProps){
    //     if(this.props.lectureTags)
    //     if (JsonUtils.mapToJson(JsonUtils.objToStrMap(this.props.tags)) == JsonUtils.mapToJson(JsonUtils.objToStrMap([]))){
    //         this.setState({lectureTags:[{id:1,value:""}]})
    //         counter = 1
    //     }
    //     else{
    //         console.log(this.props.tags)
    //     const newtags = []
    //     for(let i=0;i < this.props.tags.length;i++){
    //         newtags.push({id:i,value:this.props.tags[i]})
    //     }
    //     this.setState({lectureTags:newtags})
    //     console.log(newtags)
    // }

    // }
    // componentDidUpdate(){
    //     render()
    // }
    handleChange(event)
    {

        // console.log("change!")
        const {id,value} = event.target
        // console.log(id)
        // console.log(value)
        this.setState(prevState=> {
           const newtags = (
                prevState.lectureTags.map(item =>{
                    // console.log(item.id)
                    if(item.id == id){
                        item.value = value
                    }
                    return item
                })
            )
            const tags = (
                newtags.map(item =>
                    {return item.value}
                    )
            )
            this.props.setState({lectureTags: tags})    
            // console.log(newtags)
            return {
                lectureTags: newtags
            }
        })
        // this.props.setState({lectureTags: newtags})    
    }
    handleDelete(id){
        this.setState(prevState => {
            const newtags = (
                prevState.lectureTags.filter(item => item.id != id)
            )
            const tags = (
                newtags.map(item =>
                    {return item.value}
                    )
            )
            this.props.setState({lectureTags: tags})    
            return{
                lectureTags: newtags
            }
        })
        // eventProxy.trigger("lectureTags", newtags)
    }
    handleAdd(){
        counter ++
        // console.log(counter)
        // const newtags = (this.state.map(item => {return item}),{id:counter,value:""})
        // console.log(newtags)
        this.setState(prevState =>{

            const newtags = (
                prevState.lectureTags.map( item => {return item})
            )
            newtags.push({id:counter,value:""})
            return {
                lectureTags:newtags
            }
            // const newtags = (
            //     prevState.lectureTags.map(item => {return item})
            //     ,{id:counter,value:""}
            // )
            // console.log(newtags)
            // return {
            //     lectureTags: newtags
            // }

        })
        // eventProxy.trigger("lectureTags", newtags)
        // counter ++
        // this.setState(
        //     prevState => {
        //         return(
        //             prevState.lectureTags
        //         )
        //     }
        // )
    }
    // componentDidUpdate(){
    //     eventProxy.trigger("lectureTags", this.state.lectureTags)
    // }
    render(){
        // console.log(tags)
        // console.log(this.props)
        // console.log(this.props.tags)
        console.log(this.state.lectureTags)
        
        const lecturetaglist = this.state.lectureTags.map(tag => (
                <LectureTag 
                key={tag.id}
                id={tag.id} 
                value={tag.value} 
                handleChange={(event) => {this.handleChange(event);
                    }}//this.props.setState({lectureTags: tags});
                handleDelete={this.handleDelete}
                />
        ))
        return(
            <div>
                    {lecturetaglist}
                    <button 
                    type ="button" 
                    onClick={this.handleAdd} 
                    style={{marginTop:"5px"}}
                    className="btn btn-primary btn-sm"
                    >添加标签</button>
            </div>
        )
    }


}
export default LectureInfoTagsContainer;