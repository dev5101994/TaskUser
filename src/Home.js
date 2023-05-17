import React from 'react';

const data = [
    {
        "_id": "645e0cd2bf6be031f1d3df20",
        "providerData": [],
        "userId": "FB-0000179",
        "name": "arti",
        "email": "kartik@gmail.com",
        "mobileNumber": "9428137843",
        "address": "assd",
        "password": "$2a$10$KRGqEYVOM2dlmRaDT27V/OIfaIvZuwY14znybN4P/2EEaj.wNzZ.a",
        "status": "0",
        "termsCondition": true,
        "profileImage": "",
        "deletedStatus": false,
        "created_at": "2023-05-12T09:54:26.766Z",
        "updated_at": "2023-05-12T09:54:26.766Z",
        "__v": 0
    }
];

const ListComponent = () => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-primary">
                <a class="navbar-brand" href="#">Navbar</a>

                <a class="navbar-brand" href="#">Logout</a>



            </nav >
            <h1>User List</h1>
            <ul>
                {data.map(user => (
                    <li key={user._id}>
                        <strong>Name:</strong> {user.name}<br />
                        <strong>Email:</strong> {user.email}<br />
                        <strong>Mobile Number:</strong> {user.mobileNumber}<br />
                        <strong>Address:</strong> {user.address}<br />
                        <strong>password:</strong> {user.password}<br />
                        <strong>status:</strong> {user.status}<br />
                        <strong>termsCondition:</strong> {user.termsCondition}<br />
                        <strong>ProfileImage :</strong> {user.profileImage}<br />
                        <strong>DeleteStatus:</strong> {user.deletedStatus}<br />
                        <button type="button" class="btn btn-primary">Edit</button>

                        {/* Render other properties as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListComponent;
