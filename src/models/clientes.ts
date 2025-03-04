//src/models/clientes.ts

import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Empresa } from "./Empresas"; // Import do model Empresa

export class Cliente extends Model {
  public idCliente!: number;
  public Nome!: string;
  public CPF_CNPJ!: string;
  public CEP!: string;
  public Rua!: string | null;
  public Numero!: string | null;
  public Bairro!: string | null;
  public Estado!: string | null;
  public Cidade!: string | null;
  public Celular!: string | null;
  public Celular2!: string | null;
  public RG!: string | null;
  public Tipo_Cliente!: string | null;
  public Email!: string;
  public Grupo!: string | null;
  public StatusAutoRastrear!: string | null;
  public StatusEmpresa!: string | null;
  public Data_Nascimento!: Date | null;
  public Sexo!: string | null;
  public Estado_Civil!: string | null;
  public Empresas_idEmpresa!: number;


}

Cliente.init(
  {
    idCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    CPF_CNPJ: {
      type: DataTypes.STRING(18),
      allowNull: false,
      unique: true,
    },
    Rua: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    CEP: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    Numero: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    Bairro: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    Estado: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    Cidade: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    Celular: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    Celular2: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    RG: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    Tipo_Cliente: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    Grupo: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    StatusAutoRastrear: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    StatusEmpresa: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Data_Nascimento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Sexo: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Estado_Civil: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    
    Empresas_idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Empresa, // Relacionamento com a tabela Empresas
        key: "idEmpresa",
      },
    },
  },
  {
    sequelize,
    modelName: "Cliente",
    tableName: "Clientes",
    timestamps: true,
  }
);

// Relacionamento com Empresas (Um cliente pertence a uma empresa)
Cliente.belongsTo(Empresa, {
  foreignKey: "Empresas_idEmpresa",
  as: "empresa",
});
