import { useEffect, useState } from "react"

const UserModelPopup = (user, onSave, onClose) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        age: "",
    })

    useEffect(() => {
        if (user) {
            setForm(user)
        }
    }, [user]);

    return (
        <>
            <div className="modal">
                <div className="modal-box">
                    <h3>{user ? "Edit" : "Add"} USER POPUP</h3>

                    <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    <input placeholder="Age" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} G />

                    <button onClick={() => onSave(form)}>Save</button>
                    <button className="delete" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default UserModelPopup 