import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import Elogp from '../../img/Elogp.png';
import styles from './Login.module.css';

function Login() {

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleLogin(e) {
        
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('listaUsuarios'));
        let existe = 0;
        for(let i = 0; i < users.length; i++){
           
            if(users[i].usuario === usuario){
                existe = 1;
                if(users[i].password === password){
                    navigate('/home');
                }
                else{
                    alert('Senha incorreta !');
                }
                return;
            }
        }
        
        if(existe === 0){
            alert('Usuário não encontrado!');
            return;
        }
    }


    return (
        <div>
             <form onSubmit={handleLogin}>
            <img className={styles.img} src={Elogp} alt="Elogp" />
                <div className={styles.form_control} >
                    <label>Usuário</label>
                    <input type="text"  placeholder="Digite seu usuário" onChange={(event) => setUsuario(event.target.value)} />
               
                    <label>Password</label>
                    <input type="password" placeholder="Digite a senha" onChange={(event) => setPassword(event.target.value)}  />
                </div>
                <button type="submit" className={styles.btn_login}>Login</button>
            </form>
        </div>
    )
}

export default Login