import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SelecionaOportunidade from './SelecionaOportunidade';
import styles from './RegistrarLead.module.css'
import logo from '../../../img/Elogp.png'

export default function RegistrarLead(){
    const [nome, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [oportunidades, setOportunidades] = useState([]);

    const navigate = useNavigate();

    
    const handleOportunidades = data => setOportunidades(data.SelectedList);

    
    function handleSalvar(event){
        event.preventDefault();
        
        
        if(oportunidades.length === 0){
            alert('Selecione pelo menos uma oportunidade!');
            return;
        }

        const lead = {
            "nome" : nome,
            "telefone" : telefone,
            "email" : email,
            "status" : "Cliente em Potencial",
            "oportunidades": oportunidades,
        };
        
        if(!nome || !telefone|| !email){
            alert("Preencha todos os campos!");
        }
        else{
        const listaLeads = JSON.parse(localStorage.getItem('listaLeads'));
        listaLeads.push(lead);
        localStorage.setItem('listaLeads', JSON.stringify(listaLeads));
        alert('Lead incluido com sucesso!');
        navigate('/home');}
    }
    
    return(
        <div className={styles.main}>
            <div className={styles.cabecalho}>
                <img className={styles.logo} src={logo} alt="Elogp" />
                <h1 className={styles.title}>Novo Lead</h1>
            </div>
            <form className={styles.form} onSubmit={handleSalvar}>
                <div className={styles.coluna}>
                <p className={styles.paragraph}>
                    <label className={styles.label}>
                        Nome*
                        <input className={styles.input} type='text' value={nome} placeholder='Nome da Empresa' onChange={(event) => setName(event.target.value)} />
                    </label>
                </p>
                <p className={styles.paragraph}>
                    <label className={styles.label}>
                        Telefone*
                        <input className={styles.input} type='text'  value={telefone} placeholder='(ddd) xxxxx-xxxx' onChange={(event) => setTelefone(event.target.value)} />
                    </label>
                </p>
                <p className={styles.paragraph}>
                    <label className={styles.label}>
                        Email*
                        <input className={styles.input} type='text'  value={email} placeholder='email@email.com' onChange={(event) => setEmail(event.target.value)} />
                    </label>
                </p>
                </div>
                <div className={styles.coluna}>
                <p className={styles.paragraph}>
                    <label className={styles.label}>Oportunidades* </label>
                    <SelecionaOportunidade onChange={handleOportunidades}/>
                </p>
                <button className={styles.btn} type='submit' value='Salvar'>Salvar</button>
                </div>
            </form>
        </div>
    );
}