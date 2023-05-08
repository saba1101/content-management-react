import { useDispatch, useSelector } from "react-redux"
import { increment ,incrementByAmount,decrement} from "@/redux/counter"

const Home = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
        <h1> The count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(33))}>
          Increment by 33
        </button>
      </div>
    )
}

export default Home