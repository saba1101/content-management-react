import { useDispatch, useSelector } from "react-redux"
import Popup from "@/components/reusable/modal/Popup";
import { Set_UserName } from "../../redux/user/userStore";
import Input from "../../components/reusable/input/Input";
const Home = () => {
    const dispatch = useDispatch();
    // const { count } = useSelector((state) => state.counter);

    return (
        <div>
            <div className="div" style={{width: "250px"}}>
                <Input 
                    Typing={(value) => null}
                    placeholder="Input"
                />

            </div>
        </div>
    )
}

export default Home