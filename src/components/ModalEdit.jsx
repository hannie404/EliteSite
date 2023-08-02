import React, { useState } from 'react';
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter } from 'mdbreact';
import Swal from 'sweetalert2';
import { MDBInput } from 'mdbreact';


const ModalEdit = ({ user, onSave, onCancel }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Implement the logic to save the edited user data and update localStorage
    onSave(editedUser);
    Swal.fire({
      icon: 'success',
      title: 'User Edited Successfully',
      text: 'The user has been edited successfully!',
    });
    onCancel();
  };

  return (
    <MDBModal isOpen={true} toggle={onCancel}>
      <MDBModalHeader toggle={onCancel}>Edit User</MDBModalHeader>
      <MDBModalBody>
        <MDBInput
          label="Username"
          name="username"
          value={editedUser.username}
          onChange={handleInputChange}
        />
        <MDBInput
          label="Password"
          name="password"
          type="text"
          value={editedUser.password}
          onChange={handleInputChange}
        />
      </MDBModalBody>
      <MDBModalFooter>
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default ModalEdit;
