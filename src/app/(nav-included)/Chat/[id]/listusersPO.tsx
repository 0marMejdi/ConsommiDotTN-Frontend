'use client'
import { useEffect, useState } from "react";
import Contact from "../contact";

interface ListUsersProps {
  productId: string;
  setSelectedUser : any;
  selectedUser : any
}
export function ListUsers({ productId , setSelectedUser , selectedUser }: ListUsersProps) {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cuurentUser , setUser] = useState<any>(null)
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found');
      return;
    }
    setLoading(true);
    const url = `http://localhost:3000/conversation/all/${productId}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) {
          console.log('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setUsers(data);
        console.log(data)
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]);
  useEffect(()=>{
    fetch("http://localhost:3000/users/infos",
      {
        headers:{
          authorization:`Bearer ${localStorage.getItem('token')}`
          }
      }
    )
    .then(res => res.json())
    .then(data => setUser(data))
    },[])

  const handleUserClick = (user: any) => {
    setSelectedUser({...user})
    console.log(user)
  };
  return (
    <div className="space-y-5">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {users && users.length > 0 ? (
        users.map((user: any) => (
          user.client.id != cuurentUser?.id && (
            <Contact
              key={user.conversationId}
              email={user.client.email}
              isSelected={selectedUser?.client?.email === user.client.email}
              onClick={() => handleUserClick(user)}
              name={`${user.client.name} ${user.client.lastname}`}
              avatarFallback={user.client.name[0]}
              avatarSrc=""
              conversationId = {user.conversationId}
            />
          )
        ))
      ) : (
        !loading && <div>No users found</div>
      )}
    </div>
  );
}
