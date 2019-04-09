import React, {Component} from "react"
import LectureTagDelete from "../Component/LectureTagDelete"
var counter = 2
class LectureTagsDeleteContainer extends Component{
    constructor(props){
       
        super(props)
        this.state={
            lectureTags:[
            ]
        }
    }

    componentWillReceiveProps(nextProps){
    const newtags = []
    for(let i=0;i < nextProps.tags.length;i++){
        newtags.push({id:i,value:nextProps.tags[i]})
    }
    this.setState({lectureTags:newtags})
    }

    render(){
        const lecturetaglist = this.state.lectureTags.map(tag => (
                <LectureTagDelete
                key={tag.id}
                id={tag.id} 
                value={tag.value}
                />
        ))
        return(
            <div>
                    {lecturetaglist}
            </div>
        )
    }


}
export default LectureTagsDeleteContainer