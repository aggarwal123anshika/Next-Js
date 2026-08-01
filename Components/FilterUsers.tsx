"use client"
type User = {
    id:number;
    name:string;
    username:string;
}
import { useState } from "react";
export default function FilterUsers({users} : {users : User[]}) {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredUsers = users.filter(User => {
        return User.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return (
        <div>
            <input 
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredUsers.map((user : User) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
    
}