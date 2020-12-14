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
    return {
      id,
      name,
      description,
      date: date.toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
      category_id,
      place_id,
      images: imagesView.renderMany(images),
    };
  },

  renderMany(items: Item[]) {
    return items.map(item => this.render(item));
  }
}