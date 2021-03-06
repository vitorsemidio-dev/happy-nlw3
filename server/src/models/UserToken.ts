import { Column, Entity, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity('user_tokens')
class UserToken {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  token: string;

  @Column()
  user_id: number;
}

export default UserToken;
