import React, { useState, FormEvent } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import AuthLayout from "@/components/Layout/AuthLayout";
import OtpField from "@/components/shared/form/OtpField";
import CustomButton from "@/components/shared/Button/CustomButton";
import { Colors } from "@/components/colors";

const VerifyOtpPage = () => {
  const router = useRouter();
  const { email } = router.query;
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length === 6) {
      router.push("/auth/create-password");
    }
  };

  const handleResend = () => {
    setOtp(Array(6).fill(""));
  };

  return (
    <AuthLayout title="Verify OTP">
      <Box component="form" onSubmit={handleSubmit}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, marginBottom: "8px" }}
        >
          Enter Verification Code
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: Colors.TextGray, marginBottom: "4px" }}
        >
          We just sent a 6-digit code to your email address:
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, color: Colors.Primary, marginBottom: "28px" }}
        >
          {email || "boxx@gmail.com"}
        </Typography>

        <Box sx={{ marginBottom: "28px" }}>
          <OtpField value={otp} onChange={setOtp} />
        </Box>

        <CustomButton
          type="submit"
          fullWidth
          sx={{
            padding: "12px",
            fontSize: "1rem",
            marginBottom: "20px",
          }}
        >
          Verify
        </CustomButton>

        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: Colors.TextGray }}
        >
          Didn&apos;t see code{" "}
          <Typography
            component="span"
            variant="body2"
            sx={{
              color: Colors.BackroundOrTitle,
              fontWeight: 600,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={handleResend}
          >
            Resend code
          </Typography>
        </Typography>
      </Box>
    </AuthLayout>
  );
};

export default VerifyOtpPage;
