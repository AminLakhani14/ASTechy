import React, { useEffect, useState } from 'react'

export const RequestInfo = (params) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        debugger;
        let getData = localStorage.getItem("userInfo") || "";
        getData = getData === "" ? [] : JSON.parse(getData);
        if (getData.length !== 0) {
            setUsers(getData)
        }
    }, [])

    return (
        <>
            <div style={{height:"500px"}}>
                {users.length !== 0 &&
                    <table className='w-100'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Company Name</th>
                            <th>Message</th>
                        </tr>
                        {users.map(users => (
                            <tr>
                                <td>{users?.name}</td>
                                <td>{users?.email}</td>
                                <td>{users?.phone}</td>
                                <td>{users?.companyName}</td>
                                <td>{users?.message}</td>
                            </tr>
                        ))}
                    </table>}
            </div>
        </>
    )
}
