import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems";
function ProblemPage(){
    const {id}= useParams();
    const navigate = useNavigate();

    const [currentProblemId,setCurrentProblemId] = useState("two-sum")
     const [selectedLanguage,setselectedLanguage] = useState("javascript")
      const [code,setcode] = useState(PROBLEMS[currentProblemId].starterCode.javascript)
    return
    <div>ProblemPage</div>;
}
export default ProblemPage;