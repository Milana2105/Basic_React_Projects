import React from "react";

export default function Home(props) {  // instead of name u can use props also
    return(
    <div>Welcome {props.name} {props.age} </div> // welcome{props.name} {props.age}
    )
}