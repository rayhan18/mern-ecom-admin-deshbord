import CoustomLayout from "../Components/CoustomLayout"
import {Form ,Button} from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch,useSelector} from 'react-redux';
import { login } from "../features/auth/AuthSlice";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate()
  let userSchema = Yup.object().shape({
    
    email: Yup.string().email('email should be valid').required('email is required'),
    password: Yup.string().required('password is required')
    
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    validationSchema:userSchema ,
    onSubmit: (values) => {
      dispatch(login(values))
      alert(JSON.stringify(values, null, 2));
    },
  });
  const {user,isLoding,isError,isSuccess,message} = useSelector((state)=>state.auth)
  useEffect(()=>{
  //console.log(user)
  if(!user ===null || isSuccess){
    navigate("admin")
  }else{
    alert("You are not logged in")
  }
  },[user,isLoding,isError,isSuccess,message])
  return (
    <div className="py-5" style={{background:"#ffd333",minHeight:"100vh"}}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
       
       <h4 className="text-center">Login</h4>
       <h4 className="text-center">LOgin to your account to continue</h4>
        <Form action="" onSubmit={formik.handleSubmit}>
        <CoustomLayout 
        type="text"
       
          name="email"
          onCng={formik.handleChange("email")}
          val={formik.values.email}
          onBl={formik.values.email}
          label="email Address "email />
          <div className="text-danger">
          {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
          </div>
        <CoustomLayout
         type="password"
         onCng={formik.handleChange("password")}
         val={formik.values.password}
         onBl={formik.values.password}
        name="password" 
        label="password "pass />
       <div className="text-danger">
       {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
       </div>
     <div>
      <Link to="/forget-password">Forget password</Link>
     </div>
      {/* <Link to="/admin"> */}
        <Button type="submit" className="bg-warning px-3 py-2 text-white fw-bold w-100 text-decoration-none fs-5">Login</Button>

      {/* </Link> */}
        </Form>

      </div>
     
    </div>
  )
}

export default Login
