import React from "react";
import cars from "../cars.json";
// import material ui components here //
// Container, Paper, Chip //
import { Container, Paper, Chip } from "@material-ui/core";

const Car = (props) => {
  let id = props.match.params.id;
  let car = cars.find((car) => car.id === Number(id));
  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <Chip label={`id: ${car.id}`} />
        <Chip label={`Car Name: ${car.Name}`} />
        <Chip label={`Year: ${car.Year}`} />
        <Chip label={`Origin: ${car.Origin}`} />
        <Chip label={`Cylinders: ${car.Cylinders}`} />
        <Chip label={`Horsepower: ${car.Horsepower}`} />
        <Chip label={`Miles Per Gallon: ${car.Miles_per_Gallon}`} />
        <Chip label={`Displacement: ${car.Displacement}`} />
        <Chip label={`Weight: ${car.Weight_in_lbs}`} />
      </Paper>
    </Container>
  );
};

export default Car;

// <h2>{car.Name}</h2>;
// {
//   Object.keys(car).map((key, idx) => {
//     return <Chip label={`${key}: ${car[key]}`}></Chip>;
//   });
// }
