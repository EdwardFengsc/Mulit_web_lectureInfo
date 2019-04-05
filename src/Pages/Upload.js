import React,{Component} from "react" 
import MetadataContainer from "../Container/MetadataContainer"
import "./Upload.css"
class Upload extends Component{
    render(){
        // console.log("ID:",this.state.Id)
        return(
          <div className="Upload">
          {/* //       // <div> */}
            <header className="Upload-header">
          {/* //         <header> */}
              <MetadataContainer />
              {/* <PicturedataContainer /> */}
            </header>
          </div>
    
        )
      }
}
export default Upload