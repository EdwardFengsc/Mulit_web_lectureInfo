import React,{Component} from "react" 
import DeleteLectureInfoContainer from "../Container/DeleteLectureInfoContainer"
import "./Delete.css"
class Delete extends Component{
    render(){
        return(
            <div className="Delete">
            <header className="Delete-header">
              <DeleteLectureInfoContainer />
            </header>
          </div>
        )
    }

}
export default Delete