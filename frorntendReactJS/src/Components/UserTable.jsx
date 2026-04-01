export default function UserTableComponent({ users, onEdit, onDelete }) {
    return (
        <>
            <div className="table-container">
                <table border={5} cellPadding={1} cellSpacing={10} className="user-table" >
                    <thead >
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ?
                            (users.map((u) => {
                                <tr key={u._id} >
                                    <td>{u._id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.age}</td>
                                    <td className="actions">
                                        <button className="btn edit-btn" onClick={() => onEdit(u)}>Edit</button>
                                        <button className="btn delete-btn" onClick={() => onDelete(u._id)}>Delete</button>
                                    </td>
                                </tr>
                            })) :
                            (
                                <tr>
                                    <td colSpan="5" className="no-data">
                                        NO USERS FOUND
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table >
            </div>

        </>
    )
}