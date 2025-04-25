import { WalletEntity } from 'src/modules/wallet/entities/wallet.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar', length: 300, nullable: false })
  fullName: string;
  @Column()
  mobile: string;
  @Column({ type: 'numeric', default: 0 })
  balance: number;
  @OneToMany(() => WalletEntity, wallet => wallet.user, { onDelete: 'CASCADE' })
  transactions: WalletEntity[];
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
