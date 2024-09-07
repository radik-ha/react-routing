import {useNavigate} from "react-router-dom";

export default function Animals() {
	const navigate = useNavigate();
	return (
		<div Class="animals">
			<button onClick={()=>{navigate("/rat")}}>RAT</button>
			<button onClick={()=>{navigate("/fox")}}>FOX</button>
			<button onClick={()=>{navigate("/cat")}}>CAT</button>
			<button onClick={()=>{navigate("/cheetah")}}>CHEETAH</button>
			<button onClick={()=>{navigate("/dog")}}>DOG</button>
			<button onClick={()=>{navigate("/elephant")}}>ELEPHANT</button>
			<button onClick={()=>{navigate("/hyena")}}>HYENA</button>
			<button onClick={()=>{navigate("/monkey")}}>MONKEY</button>
			<button onClick={()=>{navigate("/rabbit")}}>RABBIT</button>
			<button onClick={()=>{navigate("/tiger")}}>TIGER</button>
		</div>
	);
}