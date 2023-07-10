import { FiArrowUpRight,FiArrowDownRight } from "react-icons/fi";

import { Button, Col } from "react-bootstrap"
import { Row} from 'react-bootstrap'

const Dehsbord = () => {
  return (
    <div>
    
         <div className="d-flex ">
            <h4 className="border ">  dashboard</h4>
           
            <Button variant="warning " className="" size='sm'>
            Primary
          </Button>
           
           
         </div>
    
      <Row className="my-5">
       <Col className="mx-2" style={{background:'rgb(238 240 233)'}}>
          <p> Total sells <span className="float-end">:</span></p>
          <div className="">
           <h4>$3475.00</h4>
            <div className="justify-content-between">
              <p className="text-success text-end"><FiArrowUpRight/>34.70%</p>
              <p className="text-info text-end">compared to April 2023</p>
            </div>
          </div>
       </Col>
       <Col className="mx-2" style={{background:'rgb(238 240 233)'}}>
          <p> Avarage order value<span className="float-end">:</span></p>
          <div className="justify-content-center">
           <h4>$3475.00</h4>
            <div className="justify-content-between">
              <p className="text-danger text-end"><FiArrowDownRight />34.70%</p>
              <p className="text-info text-end">compared to April 2023</p>
            </div>
          </div>
       </Col>
       <Col className="mx-2" style={{background:'rgb(238 240 233)'}}>
          <p> Total orders <span className="float-end">:</span></p>
          <div className="justify-content-center">
           <h4>$3475.00</h4>
            <div className="align-items-end">
              <p className="text-success text-end"><FiArrowUpRight/>34.70%</p>
              <p className="text-info text-end">compared to April 2023</p>
            </div>
          </div>
       </Col>
      </Row>
    
   
    </div>
  )
}

export default Dehsbord
