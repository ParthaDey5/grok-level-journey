import { useState, useEffect } from 'react'
import Modal from './Modal';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        city: string;
        zipcode: string;
    };
    phone: string;
    website: string;
    company: {
        name: string;
    };
}

function UsersTable() {

    const [fetching, setFetching] = useState<boolean>(true)
    const [users, setUsers] = useState<User[]>([])
    const [selectedUser, setSelectedUser] = useState<User | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = (user: User) => {
        setSelectedUser(user)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedUser(null)
    }

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

                <div className='md:w-[73%] w-[85%] md:space-y-2.5 space-y-5 '>
                    <div className='skeleton w-full md:h-10 h-20'></div>
                    <div className='skeleton w-full md:h-10 h-20'></div>
                    <div className='skeleton w-full md:h-10 h-20'></div>
                    <div className='skeleton w-full md:h-10 h-20'></div>
                    <div className='skeleton w-full md:h-10 h-20'></div>
                    <div className='skeleton w-full md:h-10 h-20'></div>
                    <div className='skeleton w-full md:h-10 h-20'></div>
                    <div className='skeleton w-full md:h-10 h-20'></div>

                </div>

            }

            {!fetching &&

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Company</th>
                            <th>Actions</th>
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
                                <td>
                                    <button
                                        onClick={() => openModal(user)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-md transition text-[0.7rem]"
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>

                        )}



                    </tbody>
                </table>
            }

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={selectedUser ? selectedUser.name : 'User Details'}
                size="md"
            >
                {selectedUser && (
                    <div className="space-y-3">
                        <p><strong className='mr-1'>Website:</strong> {selectedUser.website}</p>
                        <p><strong className='mr-1'>Zipcode:</strong> {selectedUser.address.zipcode}</p>
                        <p><strong className='mr-1'>Phone:</strong> {selectedUser.phone}</p>
                        
                    </div>
                )}
            </Modal>
        </section>
    )
}

export default UsersTable