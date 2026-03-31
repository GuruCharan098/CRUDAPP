export default function UserTableComponent({ users, onEdit, onDelete }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 &&
                        users.map((u) => {
                            <tr key={u._id} >
                                <td>{u._id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.age}</td>
                                <td>
                                    <button onClick={() => onEdit(u)}>Edit</button>
                                    <button className="delete" onClick={() => onDelete(u._id)}>Delete</button>
                                </td>
                            </tr>
                        })}
                </tbody>
            </table >
        </>
    )
}