import { Test } from "./test.interface";

export interface User {
  Id: string;
  Name: string;
  Level: number;
  Tests: Test[];
}
