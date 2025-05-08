import React, { useState } from 'react'
import { Button, Card } from "react-bootstrap";
import UserDelete from './UserDelete';

const User = ({ user, onShowDetails }) => {
  
  const [deleteUser, setDeleteUser] = useState(false)

  return (
    <div>

    <Card style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>{ user.name }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Button variant = 'success' onClick = {() => {onShowDetails(user._id)}} style={{margin: '15px'}}> Show</Button>
        <Button variant = 'danger' onClick = {() => {setDeleteUser(true)}}>Delete</Button>
      </Card.Body>
    </Card>
    <UserDelete show = {deleteUser} handleClose = {() => {setDeleteUser(false)}} userId = {user._id} />

    </div>
  )
}

export default User
