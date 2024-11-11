const express = require('express')
import { PrismaClient } from '@prisma/client/extension'

//Implementando o Prisma
const prisma = new PrismaClient()

const app = express()
const port = 3000 //Aqui define em qual porta vai rodar o app

const baseUrl = '/api/students'

//Rota para o get (read) dos alunos
app.get(`${baseUrl}`, (req, res) => {
  res.send('Aqui é o get dos alunos')
})

//Rota para o post (create) do alunos
app.post(`${baseUrl}`, (req, res) => {
  res.send('Aqui é o post dos alunos')
})

//Rota para o put (update) dos alunos
app.put(`${baseUrl}/:id`, (req, res) => {
  res.send('Aqui é o put dos alunos')
})

//Rota para o delete dos alunos
app.delete(`${baseUrl}/:id`, (req, res) => {
  res.send('Aqui é o delete dos alunos')
})

app.listen(port);
//localhost:3000