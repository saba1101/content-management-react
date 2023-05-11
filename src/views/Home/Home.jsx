import { useDispatch, useSelector } from "react-redux"
import Popup from "@/components/reusable/modal/Popup";
import { Set_UserName } from "../../redux/user/userStore";

const Home = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <Popup
                visible={true}
                title=""
            />
            
        </div>
    )
}

export default Home