import { useAppSelector } from "../../../utils/hooks";
import { selectCount } from "../../../app/store/counter/counterSlice";

import { styles } from "./style"

interface SecondCounterProps {
    amount: number;
    setAmount: (amount: number) => void;
}

export function SecondCounter(props: SecondCounterProps) {
    const count = useAppSelector((selectCount))
    return (
        <div>
            <span style={styles.value} >{count}</span>
            <span style={styles.value} >{props.amount}</span>
            <input
                style={styles.textbox}
                aria-label="Set increment amount"
                value={props.amount}
                onChange={(e) => { props.setAmount(Number(e.target.value))}}
            />
        </div>
    )
}