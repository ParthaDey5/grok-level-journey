import { useState, useEffect } from 'react'

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        city: string;
    };
    company: {
        name: string;
    };
}

function Table() {

    const [fetching, setFetching] = useState<boolean>(true)
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const fetchData = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
            .then((data) => 
                setTimeout(() => {

                    setFetching(false)
                    setUsers(data)
                }, 3000)
            
            )
    }, []) // 👈 runs ONLY once



    return (
        <section className='flex flex-col items-center'>
            {fetching &&

                <div className='w-[60rem] space-y-2.5 '>
                    <div className='skeleton w-full h-10'></div>
                    <div className='skeleton w-full h-10'></div>
                    <div className='skeleton w-full h-10'></div>
                    <div className='skeleton w-full h-10'></div>
                    <div className='skeleton w-full h-10'></div>
                    <div className='skeleton w-full h-10'></div>
                    <div className='skeleton w-full h-10'></div>
                    <div className='skeleton w-full h-10'></div>
                    
                </div>

            }

            {!fetching &&

                <table className='custom-table'>
                    <thead>
                        <tr className='border border-5 border-green-400 w-0'>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user) =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>{user.company.name}</td>
                            </tr>

                        )}



                    </tbody>
                </table>
            }
        </section>
    )
}

export default Table