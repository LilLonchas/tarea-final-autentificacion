import { Producto } from "../../producto/entities/producto.entity"
import { Talla } from "../../talla/entities/talla.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ProductoTalla {
  @PrimaryGeneratedColumn()
  id: number

  @Column("decimal", { precision: 10, scale: 2 })
  precio: number

  @ManyToOne(
    () => Producto,
    (producto) => producto.productoTallas,
  )
  producto: Producto

  @ManyToOne(
    () => Talla,
    (talla) => talla.productoTallas,
  )
  talla: Talla
}
