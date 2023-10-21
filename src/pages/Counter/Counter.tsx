import React, { useState, useEffect } from "react"

import { useAppSelector, useAppDispatch } from "../../utils/hooks"
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "../../app/store/counter/counterSlice"
import styles from "./Counter.module.css"

import { SecondCounter } from "../SecondCounter/SecondCounter"

interface incrementAmount {
  amount: number
  value: number
}

export function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  const [incrementAmount, setIncrementAmount] = useState("2")

  const [incrementAmount2, setIncrementAmount2] = useState(100)

  useEffect(() => {
    setIncrementAmount2(Number(incrementAmount2 - Number(count)))
  }, [count, incrementAmount])

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <SecondCounter
          amount={incrementAmount2}
          setAmount={setIncrementAmount2}
        />
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => {
            setIncrementAmount(e.target.value)
          }}
        />
        <input
          className={styles.textbox}
          aria-label="Set increment amount 2"
          value={incrementAmount2}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}
