import {
  DocumentHeadTags,
  documentGetInitialProps,
} from "@mui/material-nextjs/v13-pagesRouter";
import type { DocumentHeadTagsProps } from "@mui/material-nextjs/v13-pagesRouter";
import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import { BasicTable } from "./basic-table.component";
import { Typography, Box } from "@mui/material";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html>
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Box padding={2}>
          <Typography variant="h5" marginBottom={2}>
            {`Create an application to show a list of people`}
          </Typography>
          <BasicTable />
        </Box>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
