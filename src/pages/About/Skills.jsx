import "./Skills.css";

import {
FaRegFileExcel,
FaTasks,
FaUsers,
FaDatabase,
FaRegCalendarAlt,
FaEnvelope,
FaCloud
} from "react-icons/fa";

function Skills(){

return(

<div className="skills">
<div className="skills-slider">
<div className="skills-track">

{/* Admin & Accounting */}
<FaRegFileExcel />
<FaDatabase />
<FaTasks />
<FaUsers />
<FaRegCalendarAlt />
<FaEnvelope />
<FaCloud />

</div>

</div>

</div>

)

}

export default Skills;