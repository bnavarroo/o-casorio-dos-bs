import { Dispatch, SetStateAction } from 'react';
import CopyToClipboard from 'copy-to-clipboard';

export const copyKey =
  (key: string, setTextCopied: Dispatch<SetStateAction<string>>) => () => {
    CopyToClipboard(key);
    setTextCopied(key);
  };
