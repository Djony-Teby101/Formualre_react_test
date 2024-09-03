import React, { useState } from 'react'

function Formulaire() {


    // Globale des valeurs section => Creer / Modifier / Supprimer.

    const [action, setAction]=useState("")


    // Globale des valeur du formulaire=> Renseignement principaux .
    const [date, setDate]=useState("");
    const [nom, setNom]=useState("");
    const [prenom, setPrenom]=useState("")
    const [service, setService]= useState("")
    const [PosteOccupe, setPosteOccupe]= useState("")
    const [nomDemandeur, setNomDemandeur]= useState("")


    const [comment, setComment]= useState("");

    function toggleAction(e){
        setAction(e.target.value)
    }

    function Validation(e){
        e.preventDefault()
       console.log(action)

        setDate(date);
        setNom(nom);
        setPrenom(prenom);
        setService(service);
        setPosteOccupe(PosteOccupe);
        setNomDemandeur(nomDemandeur);

        setComment(comment);
        

    }

  return (
    <>
        <h3>Fiche DE DEMANDE D'HABILITATIONS <br />INFORMATIQUES</h3>


        {/* Formulaire à remplir */}
        <form onSubmit={Validation} className='form-container'>
            {/* section 1 */}

            <div className="section-1">
                <label htmlFor="">Création </label>
                <input type="checkbox"  value='creation'
                    checked={action=== "creation"}
                onChange={toggleAction}/>

                <label htmlFor="">Modification </label>
                <input type="checkbox"  value='modifier'
                    checked={action==="modifier"}
                onChange={toggleAction}/>

                <label htmlFor="">Suppression </label>
                <input type="checkbox" value='supprimer'
                        checked={action==='supprimer'}
                        onChange={toggleAction}
                        />
            </div>

            <h4 className="title">Renseignements principaux</h4>

            <div className="section-2">
                <label htmlFor="Date_de_la_demande">Date de la demande:  </label>
                <input type="date" value={date}
                onChange={(e)=>setDate(e.target.value)}/> 

                <label htmlFor="Nom">Nom:  </label>
                <input type="text" value={nom}
                onChange={(e)=>setNom(e.target.value)} /><br/>

                <label htmlFor="Prenom">Prenom:  </label>
                <input type="text" value={prenom}
                 onChange={(e)=>setPrenom(e.target.value)} />

                <label htmlFor="Service">Service:  </label>
                <input type="text" value={service}
                 onChange={(e)=>setService(e.target.value)} /><br/>

                <label htmlFor="Poste_occupé">Poste Occupé:  </label>
                <input type="text" value={PosteOccupe}
                 onChange={(e)=>setPosteOccupe(e.target.value)} />

                <label htmlFor="Nom du demandeur">Nom du demandeur:  </label>
                <input type="text" value={nomDemandeur}
                onChange={(e)=>setNomDemandeur(e.target.value)} />


            </div>
            <h4 className="title">Acces Demande</h4>

            <div className="section-3">
                <label htmlFor="">SANTYMED </label>
                <input type="radio" />

                <label htmlFor="">Médecin </label>
                <input type="radio" />

                <label htmlFor="">Imagerie </label>
                <input type="radio" />
                <br />
                <label htmlFor="">Infirmiere </label>
                <input type="radio" />
                <label htmlFor="">Secretariat Med </label>
                <input type="radio" />

                <label htmlFor="">Admissions </label>
                <input type="radio" /> <br />

                <label htmlFor="">Acceuil </label>
                <input type="radio" />

                <label htmlFor="">Caissiere </label>
                <input type="radio" />

                <label htmlFor="">Remboursement </label>
                <input type="radio" /> <br />

                <label htmlFor="">Facturation </label>
                <input type="radio" />
                <label htmlFor="">Stock </label>
                <input type="radio" />   

                <label htmlFor="">Comptabilité </label>
                <input type="radio" />  <br />

                <label htmlFor="">Marketing/ com </label>
                <input type="radio" />        

                <label htmlFor="">Informatique </label>
                <input type="radio" />    

                <label htmlFor="">Administrateur IT </label>
                <input type="radio" /> 

                
            </div>

            <h4 className="title">Informations complementaire:</h4>


            <div className="section-4">
                <label htmlFor="">Ecrire ici:</label><br />
                <textarea value={comment}  placeholder='Information Supplementaire...'
                onChange={(e)=>setComment(e.target.value)} ></textarea>
            </div>

            <h4 className="title">Circuit de validation</h4>
            <h4 className="title">Cadre reservé à l'Information</h4>



            

        <div className="form-validate">
            <input  type="submit" value="Submit" />
        </div>

        </form>
    </>

  )
}

export default Formulaire