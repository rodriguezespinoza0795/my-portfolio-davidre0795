import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import Image from "next/image";

import { GET_AVOCADOS, GET_AVOCADO } from "./avocados.graphql";

const AvocadoImage = ({ id }: { id: string }): any => {
  const { loading, data } = GET_AVOCADO(id);

  const url = "https://platzi-graphql.herokuapp.com";

  return (
    !loading && (
      <Image
        src={url + data.avo.image}
        alt={data.avo.name}
        width={500}
        height={500}
      />
    )
  );
};

const ProjectItem = () => {
  const { loading: loadingAvocados, data: avocados } = GET_AVOCADOS();
  const [value, setValue] = useState<string>("0");

  const handleSelect = (event: any) => {
    setValue(event.target.value);
  };

  console.log("loadingAvocados", loadingAvocados, avocados);

  return (
    <Box sx={{ width: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Avocado</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Select Avocado"
          onChange={handleSelect}
        >
          {!loadingAvocados &&
            avocados.avos.map((avo: any) => (
              <MenuItem key={avo.id} value={avo.id}>
                {avo.name}
              </MenuItem>
            ))}
        </Select>
        {value !== "0" && <AvocadoImage id={value} />}
      </FormControl>
    </Box>
  );
};

export default ProjectItem;
