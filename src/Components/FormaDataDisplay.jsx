import React, { useState } from 'react'


function FormaDataDisplay() {

// Les variables d'Etat.
const [name, setName]=useState("lorince");
const [email, setEmail]=useState("");
const [phone, setPhone]=useState("");

const handleSubmit=(e)=>{
    e.preventDefault()

    // Verifier que la data est bien récupérer?
    console.log({name},{email},{phone})
    setName(name);
    setEmail(email);
    setPhone(phone);
};




  return (

    // Formulaire de Contact
    <>
   <form onSubmit={handleSubmit}>

        <label htmlFor="">Creation</label>
        <input type="radio" />

        <label htmlFor="">Modifier</label>
        <input type="radio" />

        <label htmlFor="">Supprimer</label>
        <input type="radio" />

        <br /><br />

        <label htmlFor="">Name:</label>
        <input type="text" value={name} 
        onChange={(e)=>{setName(e.target.value)}} /> 
        <br /><br />

        <label htmlFor="">Email:</label>
        <input type="email" value={email} 
        onChange={(e)=>{setEmail(e.target.value)}} />

        <br /><br />
        <label htmlFor="">Phone:</label>
        <input type="text" value={phone} 
        onChange={(e)=>{setPhone(e.target.value)}} />

    <br /><br /><br />
    <input type="submit" value="submit" />
   </form>

   {/* Afficher la data Récuperer */}
   <div>
    <h4>verifier la data avant impression</h4>
    <p>{`Votre nom c'est ${name}.`}</p>
    <p>{`Ceci est votre email: ${email}`}</p>
    <p>{`Votre contact telephonique: ${phone}`}</p>

    
   </div>
   </>
  )
}

export default FormaDataDisplay