export interface Employee {
  id: number
  nome: string,
  cargo: string,
  cpf: string,
  salario: number,
  dataAdmissao: Date,
  dataDemissao: Date,
  status: StatusEmployee
}