import Arrangement from "../models/mysql/arrangements/Arrangement";
import { getManager } from "typeorm";
import Congregation from "../models/mysql/congregations/Congregation";
import Speaker from "../models/mysql/speakers/Speaker";

export default class ArrangementService {

  async create(data: any) {
    const arrangement = new Arrangement();
    arrangement.active = true;
    arrangement.confirmed = false;
    arrangement.createDate = new Date();
    arrangement.date = data.date;
    arrangement.deleted = false;
    arrangement.destinationCongregation = await getManager('mysqlConnection')
                                                  .getRepository(Congregation)
                                                  .findOne(data.destinationCongregation);
    arrangement.originCongregation = await getManager('mysqlConnection')
                                                  .getRepository(Congregation)
                                                  .findOne(data.originCongregation);
    arrangement.speaker = await getManager('mysqlConnection')
                                  .getRepository(Speaker)
                                  .findOne(data.speaker);
    const saved = await getManager('mysqlConnection').getRepository(Arrangement).save(arrangement);

    return saved;
  }

  async findAllByOriginCongregation(congregationOriginId: number) {
    return await  getManager('mysqlConnection')
                    .getRepository(Arrangement)
                    .createQueryBuilder('arrangement')
                    .leftJoinAndSelect('arrangement.congregationOrigin', 'congregationOrigin')
                    .leftJoinAndSelect('arrangement.destinationCongregation', 'destinationCongregation')
                    .leftJoinAndSelect('arrangement.speaker', 'speaker')
                    .where('congregationOrigin.id = :congregationOrigin', { congregationOrigin: congregationOriginId })
                    .getOne();
  }

  async findAllBySpeaker(speakerId: number) {
    return await  getManager('mysqlConnection')
                    .getRepository(Arrangement)
                    .createQueryBuilder('arrangement')
                    .leftJoinAndSelect('arrangement.congregationOrigin', 'congregationOrigin')
                    .leftJoinAndSelect('arrangement.destinationCongregation', 'destinationCongregation')
                    .leftJoinAndSelect('arrangement.speaker', 'speaker')
                    .where('speaker.id = :speakerId', { speakerId: speakerId })
                    .getOne();
  }
}
