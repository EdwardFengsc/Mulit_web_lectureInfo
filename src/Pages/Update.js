import React,{Component} from "react" 
import LectureInfoContainer from "../Container/LectureInfoContainer"
import "./Update.css"
class Update extends Component{
    render(){
        return(
            <div className="Update">
                <header className="Update-header"> 
                <LectureInfoContainer />
                </header>
            </div>
        )
    }
    

}
export default Update