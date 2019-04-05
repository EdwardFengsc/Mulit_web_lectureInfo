import React from 'react';
import TopMenu from './Component/TopMenu';
function App ({children}){
  return(
    <div>
        <TopMenu />
        <div>{children}</div>
    </div>
  )
}
// const App=({children})=>{
//     return (
//         <div>
//             <TopMenu />
//             <div>{children}</div>
//         </div>
//     )
// }
export default App;
