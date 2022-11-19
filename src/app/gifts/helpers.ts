import { TSetState } from '@shared/types/_globals';
import CopyToClipboard from 'copy-to-clipboard';

export const copyKey =
  (key: string, setTextCopied: TSetState<string>) => () => {
    CopyToClipboard(key);
    setTextCopied(key);
  };
