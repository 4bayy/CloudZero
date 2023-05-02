import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/adminsidebar/Sidebar';
import axios from 'axios';
import { base_url } from '../../../Constants';

function UserPage() {
    const [users,getUsers]=useState([]);

    useEffect(()=>{
        getUserInfo();
    },[]);

    const getUserInfo=()=>{
        try {
            axios.get(base_url+`Accounts/UserProfiles`)
            .then((res)=>{
                if (res.data)
                {
                    console.log(res.data);
                    getUsers(res.data);
                }
                else
                 console.log("data not found");
 
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Sidebar></Sidebar>
            <div  className='content ml-6 mt-2'>
             <h4 className='' style={{fontSize:"10px ",fontWeight:"bold"}}>User Information </h4>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((i,idx)=>(
                         <tr>
                         <th scope="row" index={idx}>{i.id}</th>
                         <td>{i.fname}</td>
                         <td>{i.email}</td>
                         <td>{i.phoneNumber}</td>
                         {/* <td><button className='btn-sm btn-danger rounded'>Delete</button></td> */}
                     </tr>
                    ))}
                   
                </tbody>
            </table>

            </div>
        </div>
    );
}
export default UserPage;
