import express from "express";
import { v4 as uuidv4 } from "uuid";

let users = [
  //   {
  //     firstname: "Sid",
  //     lastname: "Shan",
  //     age: 24,
  //   },
  //   {
  //     firstname: "John",
  //     lastname: "Doe",
  //     age: 24,
  //   },
];

export const getuser = (req, res) => {
  console.log(users);

  res.send(users);
};

//POST
export const createuser = (req, res) => {
  const user = req.body;

  const userwithID = { ...user, id: uuidv4() };

  users.push(userwithID);

  res.send(`User with the name ${user.firstname} added to database`);
};

export const userid = (req, res) => {
  const { id } = req.params;

  const found = users.find((user) => user.id === id);
  res.send(found);
};

//DELETE
export const deleteduser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);
  res.send(`User with the ${id} deleted from database`);
};

//UPDATE
export const updateuser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstname) {
    user.firstname = firstname;
  }
  if (lastname) {
    user.lastname = lastname;
  }
  if (age) {
    user.age = age;
  }

  res.send(`User with id :${id} has been updated`);
};
