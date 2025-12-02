import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems";
function ProblemPage(){
    const {id}= useParams();
    const navigate = useNavigate();

    const [currentProblemId,setCurrentProblemId] = useState("two-sum");
     const [selectedLanguage,setselectedLanguage] = useState("javascript");
      const [code,setcode] = useState(PROBLEMS[currentProblemId].starterCode.javascript);
       const [output, setOutput] = useState(null);
        const [isRunning, setIsRunning] = useState(false);

      

        const currentProblem = PROBLEMS[currentProblemId]
        // update problem when url param changes
        useEffect(()=>{
          if(id&&PROBLEMS[id]){
            setCurrentProblemId(id)
            setcode(PROBLEMS[id].starterCode[selectedLanguage])
            setOutput(null)
          }
        },[id,selectedLanguage])

        const handleProblemChange= (e)=>{}
        const handleProblemChange = ()=>{}

        const triggerConfett=()=>{}

        const checkIfTestsPassed=()=>{}

        const handleRunCode=()=>{}
    return
    <div>ProblemPage</div>;
}
export default ProblemPage;