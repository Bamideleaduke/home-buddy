import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import AuthLayout from "@/components/Layout/AuthLayout";
import PasswordField from "@/components/shared/form/PasswordField";
import CustomButton from "@/components/shared/Button/CustomButton";
import { Colors } from "@/components/colors";

const CreatePasswordPage = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    router.push("/auth/login");
  };

  return (
    <AuthLayout title="Create Password">
      <Box component="form" onSubmit={handleSubmit}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, marginBottom: "4px" }}
        >
          Create Password
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: Colors.TextGray, marginBottom: "24px" }}
        >
          Create your password to login
        </Typography>

        <Box sx={{ marginBottom: "16px" }}>
          <PasswordField
            name="password"
            label="Password"
            required
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </Box>

        <Box sx={{ marginBottom: "8px" }}>
          <PasswordField
            name="confirmPassword"
            label="Re-set Password"
            required
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
            error={!!error}
            helperText={error}
          />
        </Box>

        <CustomButton
          type="submit"
          fullWidth
          sx={{
            padding: "12px",
            fontSize: "1rem",
            marginTop: "16px",
          }}
        >
          Create Password
        </CustomButton>
      </Box>
    </AuthLayout>
  );
};

export default CreatePasswordPage;
