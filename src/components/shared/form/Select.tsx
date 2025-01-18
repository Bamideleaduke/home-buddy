import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface CustomSelectProps {
  label: string;
  value: string | number;
  options: { label: string; value: string | number }[];
  onChange: (event: SelectChangeEvent) => void;
  placeholder?: string;
  sx?: object; // To allow custom styles
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  options,
  onChange,
  placeholder = "None",
  sx = {},
}) => {
  return (
    <FormControl sx={{ minWidth: 120, ...sx }}>
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        value={value ? String(value) : ""}
        onChange={onChange}
        // autoWidth
        label={label}
      >
        <MenuItem value="">
          <em>{placeholder}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
