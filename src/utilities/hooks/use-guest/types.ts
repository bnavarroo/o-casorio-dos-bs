import { IHttpResponse } from '@utilities/http/types';
import { IGuest } from '@shared/types/guest';

export type TGuestData = IHttpResponse<IGuest> | null;
