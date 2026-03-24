import React, { useRef, KeyboardEvent, ClipboardEvent, ChangeEvent } from "react";
import { Box, TextField } from "@mui/material";

interface OtpFieldProps {
  value: string[];
  onChange: (otp: string[]) => void;
  length?: number;
  error?: boolean;
}

const OtpField: React.FC<OtpFieldProps> = ({
  value,
  onChange,
  length = 6,
  error = false,
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length > 1) return;
    if (inputValue && !/^\d$/.test(inputValue)) return;

    const newOtp = [...value];
    newOtp[index] = inputValue;
    onChange(newOtp);

    if (inputValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!pastedData) return;

    const newOtp = [...value];
    for (let i = 0; i < Math.min(pastedData.length, length); i++) {
      newOtp[i] = pastedData[i];
    }
    onChange(newOtp);

    const focusIndex = Math.min(pastedData.length, length) - 1;
    inputRefs.current[focusIndex]?.focus();
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: "8px", sm: "12px" },
        justifyContent: "center",
      }}
    >
      {Array.from({ length }).map((_, index) => (
        <TextField
          key={index}
          inputRef={(el) => {
            inputRefs.current[index] = el;
          }}
          value={value[index] || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(index, e)
          }
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(index, e)
          }
          onPaste={index === 0 ? handlePaste : undefined}
          inputProps={{
            maxLength: 1,
            inputMode: "numeric",
            pattern: "[0-9]*",
            style: {
              textAlign: "center",
              fontSize: "1.25rem",
              fontWeight: 600,
              padding: "12px 0",
            },
          }}
          variant="outlined"
          error={error}
          sx={{
            width: { xs: 44, sm: 56 },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: error ? "#CF2A2A" : "#6E5DCF50",
                borderRadius: "8px",
              },
              "&:hover fieldset": {
                borderColor: error ? "#CF2A2A" : "#6E5DCF",
              },
              "&.Mui-focused fieldset": {
                borderColor: error ? "#CF2A2A" : "#6E5DCF",
              },
            },
          }}
        />
      ))}
    </Box>
  );
};

export default OtpField;
