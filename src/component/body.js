import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import {useState} from "react";


function Body(){
const [QuestionNumber,SetQuestionNumber]= useState(1);
const [nextdisable, setNextDisable] = useState(false);
const [prevtdisable, setPrevDisable] = useState(false);

const NextQuestion = ()=>{

  SetQuestionNumber(QuestionNumber + 1)
  BtnEnableDisable();
}

const PrevQuestion = ()=>{
  SetQuestionNumber(QuestionNumber - 1)
  
}

const BtnEnableDisable =()=>{

  const btnPrev =  document.getElementById("btn-prev");
  const btnNext =  document.getElementById("btn-next");

  if(QuestionNumber >=9){
    btnNext.disabled= setNextDisable(true);
  }

  if(QuestionNumber <= 1){
   btnPrev.disabled= setPrevDisable(true);
  }

}


    return(
        <div>
     
<Navbar className="fs-4" variant="dark"  >
  <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="#home" >Home</Nav.Link>
        
        <NavDropdown title="Quizzes" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<h1 className="text-center text-white">Quiz Created in React JS</h1>

<div className="container text-white w-50 border border-dark mt-4 p-4 border-3 bg-dark" style={{height:"25rem"}}>
<div className="row">
  <div className="col-md-6">
    <h2>Question {QuestionNumber}/10</h2>
    <h3>CSS stands for</h3>
  </div>
  <div className="col-md-6">

    <p className="border bg-primary p-2 border-2">Color and Style sheets</p>
    <p className="border bg-primary p-2 border-2">Cascade style sheet</p>
    <p className="border bg-primary p-2 border-2">Cascading Style sheet</p>
    <p className="border bg-primary p-2 border-2">None of above</p>
  </div>
  <div className="col-md-12 mt-5 d-flex justify-content-between">
    <button className="btn btn-primary" onClick={PrevQuestion} disabled={prevtdisable} id ="btn-prev">Prev Question</button>
    <button className="btn btn-primary" onClick={NextQuestion} disabled={nextdisable} id="btn-next">Next Question</button>
  </div>
</div>
</div>

        </div>
    );
}

export default Body;