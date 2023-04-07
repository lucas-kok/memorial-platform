import { Request } from 'express';

export interface IGetUserAuthInfoReqeust extends Request {
  user: {
    _id: string;
    email: string;
  };
}
