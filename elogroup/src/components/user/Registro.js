import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Elogp from '../../img/Elogp.png';
import styles from './Registro.module.css';

function Registro() {

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    function NovoUsuario(user){
        let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
        listaUsuarios.push(user);
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
        navigate('/Login');
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
        const user = {"usuario":usuario, "password":password};

        for(let i = 0; i < listaUsuarios.length; i++){
            if(listaUsuarios[i].usuario === usuario){
                alert("Usuário já cadastrado!");
                return;
            }
        }

        if(!usuario || !password || !confirmpassword){
            alert("Preencha todos os campos!");
        }
        else if (confirmpassword !== password){
            alert("As senhas devem ser iguais!");
        }
        else {
           NovoUsuario(user);
        }
    }
  
    function handleClick() {
        navigate('/Login');
    }

    return (  
            <div > 
                <form onSubmit={handleFormSubmit}>
                    <img className={styles.img} src={Elogp} alt="Elogp" />
                    <div className={styles.form_control}>
                        <label>Usuário</label>
                        <input type="text" placeholder="Digite seu usuário" name="name" onChange={(event) => setUsuario(event.target.value)} />
                
                        <label>Password</label>
                        <input type="password" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#]).{8,}" title="Password deve possuir ao menos 8 caracteres, contendo ao menos um carácter especial, um carácter numérico, um carácter alfanumérico"/>
                
                        <label>Confirmar Password</label>
                        <input type="password" placeholder="Confirmar password" onChange={(event) => setConfirmPassword(event.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#]).{8,}" title="Password deve possuir ao menos 8 caracteres, contendo ao menos um carácter especial, um carácter numérico, um carácter alfanumérico"/>
                    </div>
                        <button type="submit" value="registrar" className={styles.btn_registrar} >Registrar</button>
                        <p className={styles.possui_login}>
                            Ja possui login?  <button onClick={handleClick} className={styles.btn_login}>Login </button> 
                        </p>
                </form> 
            </div>    
    )
}

export default Registro
