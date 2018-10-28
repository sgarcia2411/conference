import { getManager } from "typeorm";
import Sketch from "../models/mysql/sketchs/Sketch";

export const arraySketchs: Array<Sketch> = [
  {
    id: 1,
    sketchNumber: 1,
    name: '¿Conoce usted bien a Dios?',
    createDate: new Date(),
    updateDate: new Date(),
    deleted: false
  }
];

getManager('mysqlConnection').getRepository(Sketch).count().then(async (cant) => {
  console.log(`cantidad de usuarios: ${cant}`);
  if(cant !== arraySketchs.length) {
    getManager('mysqlConnection').getRepository(Sketch).clear();
    getManager('mysqlConnection').getRepository(Sketch).save(arraySketchs);
  }
});
