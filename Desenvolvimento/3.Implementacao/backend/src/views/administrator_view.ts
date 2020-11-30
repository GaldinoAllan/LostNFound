import Administrator from '../models/Administrator';
import imagesView from './images_view';

export default {
  render({
    id,
    name,
    email,
    position_id,
  }: Administrator) {
    return {
      id,
      name,
      email,
      position_id,
    };
  },

  renderMany(administrators: Administrator[]) {
    return administrators.map(administrator => this.render(administrator));
  }
}