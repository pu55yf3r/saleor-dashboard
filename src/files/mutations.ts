import { uploadErrorFragment } from "@saleor/fragments/errors";
import makeMutation from "@saleor/hooks/makeMutation";
import gql from "graphql-tag";

import { FileUpload, FileUploadVariables } from "./types/FileUpload";

const fileUploadMutation = gql`
  ${uploadErrorFragment}
  mutation FileUpload($file: Upload!) {
    fileUpload(file: $file) {
      uploadedFile {
        url
        contentType
      }
      uploadErrors {
        ...UploadErrorFragment
      }
    }
  }
`;
export const useFileUploadMutation = makeMutation<
  FileUpload,
  FileUploadVariables
>(fileUploadMutation);
