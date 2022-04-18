import { useEffect } from "react";
import CardForm from "../Views/Forms/CardForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getUsers } from "../../redux/actions/userActions";

const CardView: React.FunctionComponent<{}> = () => {

    // Redux kullanımını daha belirgin gösterebilmek için burada kullanıcıları store'a kaydedip daha sonra CardForm component'ı içinden eriştim.
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <CardForm  />
    )
}

export default CardView;