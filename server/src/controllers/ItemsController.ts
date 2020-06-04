import { Response, Request } from 'express';
import knex from '../database/connection';


class ItemsController {
  async index (req: Request, res: Response): Promise<Response> {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.123:3333/uploads/${item.image}`,
      }
    })

    return res.json(serializedItems);
  }
}

export default ItemsController;
