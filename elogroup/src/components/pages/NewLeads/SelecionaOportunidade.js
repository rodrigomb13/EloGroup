import React, { Component } from "react";
import styles from './SelecionaOportunidade.module.css'

const Oportunidades = [
  {
    id: 1,
    selected: false,
    name: "RPA",
  },
  {
    id: 2,
    selected: false,
    name: "Produto Digital",
  },
  {
    id: 3,
    selected: false,
    name: "Analytics",
  },
  {
    id: 4,
    selected: false,
    name: "BPM",
  },
];


export default class SelecionaOportunidade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Oportunidades,
      MasterChecked: false,
      SelectedList: [],
    };
  }


  onMasterCheck(e) {
    let tempList = this.state.List;
    tempList.map((oportunities) => (oportunities.selected = e.target.checked));


    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }


  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((oportunities) => {
      if (oportunities.id === item.id) {
        oportunities.selected = e.target.checked;
      }
      return oportunities;
    });

    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  componentDidUpdate(){
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  }


  componentDidMount(){
    let tempList = this.state.List;
    tempList.map((oportunities) => {
      oportunities.selected = false;
      return oportunities;
    });
      
    this.setState({
      List: tempList,
      MasterChecked: false,
      SelectedList: [],});
  }

  render() {

    return (
            <div>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.row}>
                    <th className={styles.title}>
                      <input
                        type="checkbox"
                        checked={this.state.MasterChecked}
                        id="mastercheck"
                        onChange={(e) => this.onMasterCheck(e)}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.List.map((oportunities) => (
                    <tr key={oportunities.id} className={styles.row && oportunities.selected ? "selected" : ""}>
                      <th className={styles.title}>
                        <input
                          type="checkbox"
                          checked={oportunities.selected}
                          id="rowcheck{oportunities.id}"
                          onChange={(e) => this.onItemCheck(e, oportunities)}
                        />
                      </th>
                      <td className={styles.tableItem}>{oportunities.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>  
    );
  }
}
