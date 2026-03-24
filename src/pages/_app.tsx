import { GlobalTheme } from "@/Utils/material-themes";
import Layout from "@/components/Layout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAuthPage = router.pathname.startsWith("/auth") || router.pathname.startsWith("/user");

  return (
    <ThemeProvider theme={GlobalTheme}>
      <CssBaseline />
      {isAuthPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
}
