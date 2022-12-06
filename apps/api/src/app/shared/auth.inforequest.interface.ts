import { Request } from 'express';
import { User } from '../user/user.model';

export interface IGetUserAuthInfoReqeust extends Request {
  user: {
    _id: string;
    email: string;
  };
}
