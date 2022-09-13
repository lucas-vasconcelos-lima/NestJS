import { IsNotEmpty, MaxLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_produto' })
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    nome: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    descricao: string

    @IsNotEmpty()
    @Column({ nullable: false})
    quantidade: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    laboratorio: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    foto: string
    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {

        onDelete: "CASCADE"
    })
       categoria: Categoria

}