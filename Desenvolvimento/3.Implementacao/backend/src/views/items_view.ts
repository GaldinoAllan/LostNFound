import Item from '../models/Item';
import imagesView from './images_view';

export default {
  render({
    id,
    name,
    description,
    date,
    category_id,
    place_id,
    images
  }: Item) {
    const formatDate = (dateToFormat: Date) => {
      var d = new Date(dateToFormat),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;

      return [year, month, day].join('-');
    }

    return {
      id,
      name,
      description,
      date: formatDate(date),
      category_id,
      place_id,
      images: imagesView.renderMany(images),
    };
  },

  renderMany(items: Item[]) {
    return items.map(item => this.render(item));
  }
}