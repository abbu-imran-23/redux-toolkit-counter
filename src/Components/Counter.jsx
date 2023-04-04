import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from '../Redux/Slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.Counter.value);
    const dispatch = useDispatch();

  return (
    <div className='flex flex-col bg-slate-200 p-3 pt-1 rounded-md'>

        <div className='flex flex-row gap-3 items-center p-2'>
            <button
            onClick={() => dispatch(decrement())}
            className="text-5xl bg-slate-300 rounded-md px-3 pb-1">-</button>

            <h1
            className='text-3xl'>{count}</h1>

            <button
            onClick={() => dispatch(increment())}
            className='text-3xl bg-slate-300 rounded-md px-3 py-2'>+</button>
        </div>

        <button
        onClick={() => dispatch(reset())}
        className='text-2xl bg-slate-300 py-1 rounded'>Reset</button>

    </div>
  )
}

export default Counter