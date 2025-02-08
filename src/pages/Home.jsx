import React, { useState, useEffect } from "react";
import userService from "../services/userService";
import AddUser from "./AddUser";
import {
  StyledTable,
  StyledTableHead,
  TableWrapper,
  HeaderContainer,
  AddButton,
  EditButton,
  DeleteButton,
} from "../styles/Styled";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const data = await userService.getUsers();
      setUsers(data);
    } catch (err) {
      console.error(err);
      setError("Error fetching users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await userService.deleteUser(id);
        setUsers(users.filter((user) => user.id !== id));
      } catch (err) {
        console.error(err);
        alert("Error deleting user");
      }
    }
  };

  const handleUserAdded = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>User Management</h2>
      <HeaderContainer>
        <AddButton onClick={() => setIsModalOpen(true)}>Add Member</AddButton>
      </HeaderContainer>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isModalOpen && (
        <AddUser
          onClose={() => setIsModalOpen(false)}
          onUserAdded={handleUserAdded}
        />
      )}
      <TableWrapper>
        <StyledTable border="1" cellPadding="10">
          <StyledTableHead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </StyledTableHead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <EditButton to={`/users/${user.id}/edit`}>Edit</EditButton>
                    <DeleteButton onClick={() => handleDelete(user.id)}>
                      Delete
                    </DeleteButton>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No users found.</td>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </div>
  );
};

export default Home;
