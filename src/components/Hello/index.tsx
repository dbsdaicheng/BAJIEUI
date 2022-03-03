import * as React from "react";
import styles from "./index.module.styl";

interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps) => {
	let array = [];
	for(let i = 1; i <= 60; i++) {
		array.push(i);
	}
	return (
		<div>
			<div className={styles["now_clock"]} style={{ color: "red"}} >
				<div className={ styles["dynamic"]} >
				 {array.map((item) => {
					 return (
						 <>
							{item % 5 != 0  && <div className={styles["anchor"]} key={item}  style={{ transform: `rotate(${item*6}deg)`}}>
								{<div className={ styles["minute-line"]}></div>}
							</div>}
							{item % 5 == 0 && <div key={item}  className={ styles["minute-text"]} style={{ top: -135 * Math.cos(item / 30 * Math.PI).toFixed(1) + "px", left: 135 * Math.sin(item / 30 * Math.PI).toFixed(1) + "px"}}>{item == 0 ? 60 : item}</div>}
						 </>
					 )
				 })}
				</div>
			</div>
		</div>
	)
}

export default Hello;