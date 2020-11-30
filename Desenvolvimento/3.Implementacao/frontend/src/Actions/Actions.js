import React from 'react';

import api from '../service/api';

class Actions extends React.Component {
  state = {
    items: []
  }

  fetchItems = () => {
    api.get('all-items.php')
      .then(({ data }) => {
        if (data.success === 1) {
          this.setState({
            items: data.items.reverse()
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  editMode = (id) => {
    let items = this.state.items.map(item => {
      if (item.id === id) {
        item.isEditing = true;
        return item;
      }
      item.isEditing = false;
      return item;
    });

    this.setState({
      items
    });
  }

  cancelEdit = (id) => {
    let items = this.state.items.map(item => {
      if (item.id === id) {
        item.isEditing = false;
        return item;
      }
      return item

    });
    this.setState({
      items
    });
  }

  handleUpdate = (id, nome, local, date, descricao, categoria, contido) => {
    api.post('update-item.php',
      {
        id: id,
        nome: nome,
        local: local,
        data: date,
        descricao: descricao,
        categoria: categoria,
        contido: contido,
      })
      .then(({ data }) => {
        if (data.success === 1) {
          let items = this.state.items.map(item => {
            if (item.id === id) {
              item.nome = nome;
              item.local = local;
              item.data = date;
              item.descricao = descricao;
              item.categoria = categoria;
              item.contido = contido;
              item.isEditing = false;
              return item;
            }
            return item;
          });
          this.setState({
            items
          });
        }
        else {
          alert(data.msg);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }


  handleDelete = (id) => {
    let deleteItem = this.state.items.filter(item => {
      return item.id !== id;
    });

    api.post('delete-item.php', {
      id: id
    })
      .then(({ data }) => {
        if (data.success === 1) {
          this.setState({
            items: deleteItem
          });
        }
        else {
          alert(data.msg);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  insertItem = (event, nome, local, date, descricao, categoria, contido) => {
    event.preventDefault();
    event.persist();
    api.post('add-item.php', {
      nome: nome,
      local: local,
      data: date,
      descricao: descricao,
      categoria: categoria,
      contido: contido,
    })
      .then(function ({ data }) {
        if (data.success === 1) {
          this.setState({
            items: [
              {
                "id": data.id,
                "nome": nome,
                "local": local,
                "data": date,
                "descricao": descricao,
                "categoria": categoria,
                "contido": contido
              },
              ...this.state.items
            ]
          });
          event.target.reset();
        }
        else {
          alert(data.msg);
        }
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default Actions;