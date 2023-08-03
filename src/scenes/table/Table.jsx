import React, { useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import ModalEdit from '../../components/ModalEdit';
import penFill from 'react-bootstrap-icons';


const EditButton = styled.button`
  background-color: #f0ad4e; /* Warning color */
  margin-right: 5px;
  padding: 0.5rem;
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  background-color: #d9534f;
  padding: 0.5rem;
  border-radius: 5px; /* Danger color */
`;

const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [usersData, setUsersData] = useState(() => {
    const storedData = localStorage.getItem('listOfUsers');
    return storedData ? JSON.parse(storedData) : [];
  });

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true); // Open the modal when Edit button is clicked
  };

  const data = {
    columns: [
      {
        label: 'Date',
        field: 'id',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Username',
        field: 'username',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Password',
        field: 'password',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Action',
        field: 'action',
        width: 150,
        // Disable sorting for the "Action" column
        sort: false,
      },
    ],
    rows: usersData.map((user) => ({
      id: user.id,
      username: user.username,
      password: user.password,
      email: user.email,
      action: (
        <>
          <EditButton onClick={() => handleEdit(user)}><penFill />Edit</EditButton>
          <DeleteButton onClick={() => handleDelete(user)}>Delete</DeleteButton>
        </>
      ),
    })),
  };

  const handleDelete = (user) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You are about to delete this user.',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d9534f',
      cancelButtonColor: '#4caf50',
    }).then((result) => {
      if (result.isConfirmed) {
        // const updatedUsers = usersData.filter((u) => u.id !== user.id);
        const updatedUsers = usersData
        localStorage.setItem('listOfUsers', JSON.stringify(updatedUsers));
        setUsersData(updatedUsers);
      }
    });
  };

  const handleSaveModal = (editedUser) => {
    const updatedUsers = usersData.map((u) =>
      u.id === editedUser.id ? editedUser : u
    );
    localStorage.setItem('listOfUsers', JSON.stringify(updatedUsers));
    setIsModalOpen(false); // Close the modal when saving changes
    setUsersData(updatedUsers);
  };

  return (
    <>
      <MDBDataTable striped bordered small data={data} className='bg-grey p-4 rounded-3' />

      {isModalOpen && (
        <ModalEdit
          user={selectedUser}
          onSave={handleSaveModal}
          onCancel={() => setIsModalOpen(false)} // Close the modal when canceling
        />
      )}
    </>
  );
};

export default Table;
