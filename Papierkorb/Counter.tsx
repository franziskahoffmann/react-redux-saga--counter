// import React,{Component} from "react";
// import { useSelector , useDispatch} from "react-redux";
// import { EmptyObject } from "redux";
// import type { RootState, AppDispatch } from './store'

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>()
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// export const Counter = ()=>{
//   const dispatch = useDispatch()
//   const counter = useAppSelector((state)=>{return state.counter.counter})
//   const counting = useAppSelector((state)=>{return state.counter.counting})
//   if(counting ){
//     setTimeout(()=>{dispatch({ type: 'INCREMENT' })}, 1000)
//   }
//   const countingStr:string = counting ? 'true':'false'
//   return (
//     <div>
//       <h2>Counter: {counter}</h2>
//       <h2>Counting: {countingStr}</h2>
//     </div>
//   );
// }

// export const CounterButtons = ()=>{
//   const dispatch = useDispatch()
//   const counting = useAppSelector((state)=>{return state.counter.counting})
//   const start =() =>{
//     if(!counting){
//       dispatch({ type: 'START' })
//     }
//   }
//   const reset =() =>{
//     dispatch({ type: 'RESET' })
//   }
//   const pause =() =>{
//     dispatch({ type: 'PAUSE' })
//   }
//   return (
//     <div>
//       <button onClick={start}> start</button>
//       <button onClick={reset}>reset</button>
//       <button onClick={pause}>pause</button>
//     </div>
//   );
// }