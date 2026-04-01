import { useEffect, useState } from "react";
import UserModelPopup from "../Components/UserPopup";
import UserTableComponent from "../Components/UserTable";
import { fetchUsers, addUsers, editUser, deleteUser } from "../Redux/userSlice";
import { setPage } from "../Redux/pageSlice";
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
    const dispatch = useDispatch();
    const users = useSelector(s => s.users.list)
    const [showPopup, setShowPopup] = useState(false);
    const [editUserId, setEditUserId] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(setPage("Home Page"))
    }, [])


    const handleAdd = () => {
        setShowPopup(true);
        setEditUserId(null);
    }

    const save = (data) => {
        if (editUserId) {
            dispatch(editUser({ id: editUserId._id, data }))
        } else
            dispatch(addUsers(data));

        setShowPopup(false);
        setEditUserId(null);
    }
    return (
        <>
            <div>
                <button className="add-user-btn" onClick={handleAdd} >Add Users</button>

                <UserTableComponent
                    users={users}
                    onEdit={(u) => { setEditUserId(u); setShowPopup(true); }}
                    onDelete={(id) => dispatch(deleteUser(id))} />

                {showPopup && <UserModelPopup
                    user={editUserId}
                    onSave={save}
                    onClose={() => setShowPopup(false)}
                />}
            </div>
        </>
    )
}

export default HomePage;