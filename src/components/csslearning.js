import { isValidElement } from "react";
import styled from "styled-components"; //set classname dynamically while working in broowser..
//Helps when LARGE PROJECTS..> Lot of classes, Need to be careful while naming classes...Classes can be same...so css affects all

// const button = styled.button`
//   color: blue;
//   size: large;

//   &:focus {
//     color: red;
//   }

//   &:hover {
//     size: x-large;
//   }
// `;


const FormComponent= styled.div`
    margin:1rem;

    $ label{
        display       : block;
        font-weight   : bold;
    }

    $ input:focus{
        outline : none ;
        border  :2px solid 
        background-color: &{props => (props.invalid ? 'red': 'green')}       //Dynamic way of Changing  Style by using props..coz its an element
    }


    

`

const cssLearning =()=>{


    return(
        <div>
           <FormComponent className={!isValidElement ? 'invalid':''}>
            <FormComponent invalid={!isValidElement}>        </FormComponent>     {/* both ways Works*/}
                <label>
                    Name
                </label>
                <input/>
           </FormComponent>
        </div>
    )
}



export default cssLearning;
