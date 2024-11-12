import bodyParser from 'body-parser'
import express from 'express';
import { PrismaClient } from '@prisma/client';
import { randomUUID } from "crypto";
//Implementando o Prisma
const prisma = new PrismaClient()

const app = express()
const port = 3000 //Aqui define em qual porta vai rodar o app

app.use(express.json());
//Usando o bodyParser para receber o body da request
app.use(bodyParser.json());

const baseUrl = '/api/students'

//Rota para o get (read) dos alunos
app.get(`${baseUrl}`, async (req, res) => {
  const students = await prisma.students.findMany()
  res.json(students)
})

//Rota para o post (create) do alunos
app.post(`${baseUrl}`, async (req, res) => {
  const student = await prisma.students.create({
    data: {
      id: randomUUID(),
      name: req.body.name,
      email: req.body.email,
      age: req.body.age
      //O req.body é para captar o corpo da request
    }
  })
  
  res.json(student)
})

//Rota para o put (update) dos alunos
app.put(`${baseUrl}/:id`, async (req, res) => {
  const { id } = req.params; // Capturando o ID diretamente dos parâmetros da URL

  const updatedStudent = await prisma.students.update({
    where: {id: id},
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age
    }
  })
  res.json(updatedStudent)
})

//Rota para o delete dos alunos
app.delete(`${baseUrl}/:id`, async (req, res) => {
  const { id } = req.params; // Capturando o ID diretamente dos parâmetros da URL

  const deletedStudent = await prisma.students.delete({
    where: {id: id}
  })
  res.json("Aluno deletado com sucesso!")
})

app.listen(port);
//localhost:3000