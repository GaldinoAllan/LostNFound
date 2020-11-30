import React, { Component } from 'react';

import { AppContext } from '../Context';

import Button from './Button';
import Input from './Input';

class GetUsers extends Component {
  static contextType = AppContext;

  componentDidMount() {
    this.context.get_items();
  }

  handleUpdate = (id) => {
    this.context.handleUpdate(
      id,
      this.name.value,
      this.local.value,
      this.data.value,
      this.descricao.value,
      this.categoria.value,
      this.contido.value,
    );
  }

  render() {
    let allItems;
    let mainData;

    allItems = this.context.all_items.map(({
      id,
      nome,
      local,
      data,
      descricao,
      categoria,
      contido,
      isEditing
    }) => {
      return isEditing === true ? (
        <tr key={id}>
          <td>
            <Input
              type='text'
              inputRef={(item) => this.name = item}
              defaultValue={nome}
            />
          </td>
          <td>
            <Input
              type='text'
              inputRef={(item) => this.local = item}
              defaultValue={local}
            />
          </td>
          <td>
            <Input
              type='date'
              inputRef={(item) => this.data = item}
              defaultValue={data}
            />
          </td>
          <td>
            <Input
              type='text'
              inputRef={(item) => this.descricao = item}
              defaultValue={descricao}
            />
          </td>

          <td>
            <Input
              type='text'
              inputRef={(item) => this.categoria = item}
              defaultValue={categoria}
            />
          </td>
          <td>
            <Input
              type='text'
              inputRef={(item) => this.contido = item}
              defaultValue={contido}
            />
          </td>

          <td>
            <Button
              className="btn btn-success mr-2"
              onClick={() => this.handleUpdate(id)}
              text="Salvar"
            />
            <Button
              className="btn btn-light"
              onClick={() => this.context.cancelEdit(id)}
              text="Cancelar"
            />
          </td>
        </tr>
      ) : (
          <tr key={id}>
            <td>{nome}</td>
            <td>{local}</td>
            <td>{data}</td>
            <td>{descricao}</td>
            <td>{categoria}</td>
            <td>{contido}</td>
            <td>
              <Button
                className="btn btn-primary mr-2"
                onClick={() => this.context.editMode(id)}
                text="Editar"
              />
              <Button
                className="btn btn-danger"
                onClick={() => this.context.handleDelete(id)}
                text="Deletar"
              />
            </td>
          </tr>
        );
    });

    if (this.context.all_items.length > 0) {
      mainData = (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Objeto</th>
              <th>Local</th>
              <th>Data</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Contido</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allItems}
          </tbody>
        </table>
      );
    }
    else {
      mainData = (
        <div className="alert alert-light" role="alert">
          <h4 className="alert-heading">No Items Found!</h4>
          <hr />
          <p>Please Insert Some Items.</p>
        </div>
      );
    }
    return (
      <>
        {mainData}
      </>
    );
  }

}
export default GetUsers;