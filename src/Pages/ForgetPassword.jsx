import CoustomLayout from "../Components/CoustomLayout"
import {Form ,Button} from 'react-bootstrap'

const ForgetPassword = () => {
  return (
    <div className="py-5" style={{background:"#ffd333",minHeight:"100vh"}}>
    <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
     
     <h4 className="text-center">Forget password</h4>
     <p className="text-center">plase enter yoour register email to get reset password</p>
      <Form action="">
      <CoustomLayout type="email" label="new password/ id ="email />
    
      <Button type="submit" className="bg-warning px-3 py-2 text-white fw-bold w-100">Send</Button>
      </Form>

    </div>
   
  </div>
  )
}

export default ForgetPassword
