import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WalletType } from '../enums/wallet.enum';
import { UserEntity } from 'src/modules/user/entities/user.entity';

@Entity('wallet')
export class WalletEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'enum', enum: WalletType })
  type: string;
  @Column()
  invoice_number: string;
  @Column()
  userId: number;
  @ManyToOne(() => UserEntity, (user) => user.transactions, {onDelete: 'CASCADE'})
  user: UserEntity;
}
