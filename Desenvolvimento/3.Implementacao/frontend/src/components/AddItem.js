import React, { Component } from 'react';

import { AppContext } from '../Context';

import Button from './Button';
import Input from './Input';

class AddItem extends Component {
  static contextType = AppContext;

  insertItem = (event) => {
    this.context.insertItem(
      event,
      this.nome.value,
      this.local.value,
      this.data.value,
      this.descricao.value,
      this.categoria.value,
      this.contido.value
    );
  }

  render() {
    return (
      <form onSubmit={this.insertItem}>
        <div className="form-row">

          <Input
            label='Objeto'
            type='text'
            name='nome'
            inputRef={val => (this.nome = val)}
          />
          <Input
            label='Local'
            type='text'
            name='local'
            inputRef={val => (this.local = val)}
          />
          <Input
            label='Data'
            type='date'
            name='data'
            inputRef={val => (this.data = val)}
          />
          <Input
            label='Descrição'
            type='text'
            name='descricao'
            inputRef={val => (this.descricao = val)}
          />
          <Input
            label='Categoria'
            type='text'
            name='categoria'
            inputRef={val => (this.categoria = val)}
          />
          <Input
            label='Contido'
            type='text'
            name='contido'
            inputRef={val => (this.contido = val)}
          />
          <div className="form-group col-12 text-right">
            <Button
              type="submit"
              className="btn btn-success"
              text="Adicionar Item"
            />
          </div>
        </div>
      </form>
    );
  }
}
export default AddItem;