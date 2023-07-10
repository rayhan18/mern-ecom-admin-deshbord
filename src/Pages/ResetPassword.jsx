
import CoustomLayout from "../Components/CoustomLayout"
import {Form ,Button} from 'react-bootstrap'
const ResetPassword = () => {
  return (
    <div className="py-5" style={{background:"#ffd333",minHeight:"100vh"}}>
    <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
     
     <h4 className="text-center">Reset password</h4>
     <h4 className="text-center">Enter your new password</h4>
      <Form action="">
      <CoustomLayout type="password" label="new password" id ="pass" />
      <CoustomLayout type="password" label="confirm password" id ="confirmpass" />
      <Button type="submit" className="bg-warning px-3 py-2 text-white fw-bold w-100">Login</Button>
      </Form>

    </div>
   
  </div>
  )
}

export default ResetPassword
