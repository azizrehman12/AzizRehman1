import {motion} from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}
//calculate the revrse  index for staggred delay
const reversIndex =(index)=>{
const totalSteps =6;
return totalSteps-index-1 ;
}
const Stairs = () =>{
    return <>
    
    {/* render 6 motion divs, each representing a step of the stairs
      each div will have the same animation  defined by the  stairaAnimation
      object the delay for each div is calculated sinamicolly based on its  revresed index 
      creating a  staerd effect with decreasing delay for subusequent step .*/}
    {[...Array(6)].map((_,index)=>
    {return (
        <motion.div  key={index} 
        variants={stairAnimation} 
        initial=" initial"
        animate = "animate"
        exit="exit"
        transition={{
            duration:0.4,
            ease:"easeInOut",
            delay:reversIndex(index)*0.1,
        }}
        className="h-full w-full bg-white relative"
        />
    )
        
    }
    )}
    </>
       
}


export default Stairs ;