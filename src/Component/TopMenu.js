import React from 'react';
import {Link} from 'react-router';
function TopMenu(){
    return (
        <div>
            <ul className="nav">
                <li className="nav-item"><Link to='/home' className="nav-link">主页面</Link></li>
                <li className="nav-item"><Link to='/upload' className="nav-link">上传文件</Link></li>
                <li className="nav-item"><Link to='/update' className="nav-link">编辑文件</Link></li>
                <li className="nav-item"><Link to='/delete' className="nav-link">删除文件</Link></li>
            </ul>
        </div>
    )

}
export default TopMenu