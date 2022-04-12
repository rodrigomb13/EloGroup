import React from 'react';
import { useNavigate } from 'react-router-dom';
import LeadTable from './LeadTable';
import styles from './Home.module.css'
import logo from '../../../img/Elogp.png'

export default function Home(){
    const navigate = useNavigate();
        
    function handleNovoLead(){
        navigate('/registroLead');
    }
    
    return(

        <div className={styles.main}>
            <div className={styles.cabecalho}>
                <img className={styles.img} src={logo} alt="Elogp" />
                <h1 className={styles.titulo}>Painel de Leads</h1>
            </div>
            <div>
                <button className={styles.btn} onClick={handleNovoLead}>Novo Lead (+)</button>
            </div>
            <div>
                <LeadTable/>
            </div>
        </div>
    );
}