import { ProductoTalla } from "../../productotalla/entities/productotalla.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Talla {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nombre: string

  @OneToMany(
    () => ProductoTalla,
    (productoTalla) => productoTalla.talla,
  )
  productoTallas: ProductoTalla[]
}
