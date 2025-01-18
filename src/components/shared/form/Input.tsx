import React, { ChangeEvent } from "react";
import { FormControl, InputLabel, TextField, Typography } from "@mui/material";

interface InputProps {
  name: string;
  label?: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  helperText?: string;
  sx?: object;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder = "None",
  helperText,
  name,
  sx = {},
  ...props
}) => {
  return (
    <FormControl sx={{ ...sx, width: "100%" }}>
      {label && (
        <Typography
          variant="subtitle2"
          sx={{
            marginBottom: "4px",
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          {label}
        </Typography>
      )}
      <TextField
        id={`${name}-input`}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        helperText={helperText}
        variant="outlined"
        fullWidth
        {...props}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#6E5DCF50",
            },
            "&:hover fieldset": {
              borderColor: "#6E5DCF",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#6E5DCF",
            },
          },
        }}
      />
    </FormControl>
  );
};

export default Input;
