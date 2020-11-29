export default function getById(id, data) {
  const fileName = data.map(file => {
    const name = Number(id) === file.id ? file.name : '';
    return name
  });


  const file = fileName.filter(name => {
    let nameOfFile = '';

    if (name !== '') {
      nameOfFile = name;
    }

    return nameOfFile;
  })

  return file[0];
}
