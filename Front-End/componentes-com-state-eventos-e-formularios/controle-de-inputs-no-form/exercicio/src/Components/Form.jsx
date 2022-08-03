import React, { Component } from 'react';
import './form.css';
// Componentes HTML controlados pelo React
export default class Form extends Component {

  constructor() {
    super();
    this.state = {
      algo: '',
      email: '',
      nft: '',
      detail: ''
    }
  }

  handleInfo = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="escreva algo" name="algo" onChange={this.handleInfo} />
          <input type="email" name="email" placeholder="escreva o email"  onChange={this.handleInfo} />
          <select name="nft" onChange={this.handleInfo}>
            <option value="axie">Axie Infinity</option>
            <option value="pvu">Plant vs Undead</option>
            <option value="ccar">CriptoCars</option>
          </select>
          <textarea name="detail" cols="30" rows="10" onChange={this.handleInfo}></textarea>
        </form>
      </div>
    );
  }
}