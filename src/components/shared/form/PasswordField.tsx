import React, { ChangeEvent, useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface PasswordFieldProps {
  name: string;
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  sx?: object;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = "Min. 8 characters",
  helperText,
  error = false,
  required = false,
  name,
  sx = {},
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

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
          {required && (
            <Typography
              component="span"
              sx={{ color: "#CF2A2A", marginLeft: "2px" }}
            >
              *
            </Typography>
          )}
        </Typography>
      )}
      <TextField
        id={`${name}-password-input`}
        name={name}
        type={showPassword ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        helperText={helperText}
        error={error}
        variant="outlined"
        fullWidth
        {...props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleToggleVisibility}
                edge="end"
                size="small"
              >
                {showPassword ? (
                  <VisibilityOff sx={{ fontSize: 20, color: "#828282" }} />
                ) : (
                  <Visibility sx={{ fontSize: 20, color: "#828282" }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
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

export default PasswordField;
