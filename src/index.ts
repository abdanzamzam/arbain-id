const hadits = require("../data/hadits.json");

import { Hadits } from "./interface";

class HaditsArbain {
  constructor() {}

  public async getAllHadits(): Promise<Hadits[]> {
    return hadits;
  }

  public async getOneHadits(no: number): Promise<Hadits[]> {
    const result = await hadits.filter((val: Hadits, index: number) => {
      return val.no === no;
    });

    return result;
  }
}

export = HaditsArbain;
