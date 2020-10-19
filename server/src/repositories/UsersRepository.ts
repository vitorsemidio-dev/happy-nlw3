import { getRepository, Repository } from 'typeorm';

import User from '../models/User';

class UsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }
}
