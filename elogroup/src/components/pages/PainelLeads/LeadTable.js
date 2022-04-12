import React, { Component } from "react";
import styles from './LeadTable.module.css'

const leads = JSON.parse(localStorage.getItem('listaLeads'))


export default class LeadTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        List: leads,
      };
    };

    componentDidMount(){
        this.setState(this.state.List, ()=>{
            JSON.parse(localStorage.getItem('listaLeads'));
        });
    }

    
    atualiza(lista, index){
        
        if(lista[index].status === 'Cliente em Potencial'){
            // so acontecia com o primeiro Lead que era cadastrado, era preciso dar F5 para mostrar que ele passou de 
            //cliente em potencial para dados confirmados, foi a unica maneira que encontrei para que isso não acontecesse
            //porem cada vez que é adicionado um novo lead, a pagina home da um refresh, não é a melhor solução mas foi a que eu encontrei
            window.location.reload(false); 
            lista[index].status = 'Dados Confirmados';
            localStorage.setItem('listaLeads', JSON.stringify(lista));
            this.setState(this.state.List, ()=>{JSON.parse(localStorage.getItem('listaLeads'))})
            return;
        }
        else if(lista[index].status === 'Dados Confirmados'){
            lista[index].status = 'Reunião Agendada';
            localStorage.setItem('listaLeads', JSON.stringify(lista));
            this.setState(this.state.List, ()=>{JSON.parse(localStorage.getItem('listaLeads'))})
            return;
        }
    }

    render(){
        const lista = JSON.parse(localStorage.getItem('listaLeads'));
        
        return(
            <div className={styles.painel}>
                <table className={styles.table}>
                    <tr className={styles.row}>
                        <th className={styles.title}>Cliente em Potencial</th>
                        <th className={styles.title}>Dados Confirmados</th>
                        <th className={styles.title}>Reunião Agendada</th>
                    </tr>
                    {lista.map((lead, index) => (
                            <tr className={styles.row} onClick={()=>this.atualiza(lista,index)}>
                                <td className={styles.tableItem}> {lead.status === 'Cliente em Potencial' ? lead.nome : ''}</td>
                                <td className={styles.tableItem}> {lead.status === 'Dados Confirmados' ? lead.nome : ''}</td>
                                <td className={styles.tableItem}> {lead.status === 'Reunião Agendada' ? lead.nome : ''}</td>
                            </tr>
                        )
                    )}
                </table>
            </div>
        );
    };
}