import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () =>{
    const formInitialDetails = {
        firstName: "",
        lastNAme: "",
        email: "",
        phone: "",
        message: ""
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category , value) => {
        setFormDetails({
            ...formDetails,
            [category] : value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setButtonText("Sending...");
        let response = await
        fetch("http://localhost:500/contact", {
            method: "POST"
            header: {
                "Content-Type":
                "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        
         if (result.code == 200) {
            setStatus({succes: true, message: "Message sent successfully"});
         } else {
            setStatus({succes: false, message: "Something went wrong, please try again later"})
         }
    }

    return (

    )
}