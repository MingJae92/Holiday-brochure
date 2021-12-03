import { useState } from 'react';
import './App.css';

const PostSender = ()=>{
    const [input, setInput]=useState("")

    const handleSubmit =(e)=>{
        e.preventDefault();
        setInput
    }
        return(
        <div className="App">
    
    <h1>Hello! </h1>
     <h1>Write a review about your holiday!</h1>
     
     <button type="button" className="btn btn-success">Success</button>
     <div className="container">
    <div className="row d-flex justify-content-center">
        <div className="col-md-6">
            <div className="card p-3 border-0">
                <div className="commentarea mt-3"> <textarea className="form-control"></textarea> </div>
                <form>
            <div class="form-group">
                <input  m-3 type="file" class="form-control-file" id="exampleFormControlFile1" placeholder={`Write a review about your holiday!`}></input>
            </div>
            </form>
                <div  className="button mt-3 pt-2"> <button className="btn btn-danger w-100">Submit</button> </div>
            </div>
        </div>
    </div>
    
    
</div>
     
    </div>
    );
}

export default PostSender