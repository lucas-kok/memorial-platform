import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MemorialDto } from './memorial.dto';
import { Memorial, MemorialDocument } from './memorial.model';
import { Driver } from 'neo4j-driver';

@Injectable()
export class MemorialsService {
  constructor(
    @Inject('NEO4J') private readonly neo4jDriver: Driver,
    @InjectModel('memorial')
    private readonly memorialModel: Model<MemorialDocument>
  ) {}

  async addMemorial(
    MemorialDto: MemorialDto,
    userId: string
  ): Promise<Memorial> {
    Logger.log(
      '[MemorialsService] addMemorial called with userId: {' + userId + '}'
    );
    Logger.log(MemorialDto);

    const memorial = {
      userId,
      ...MemorialDto,
    };

    return await this.memorialModel.create(memorial);
  }

  async getAllMemorials(): Promise<Memorial[]> {
    Logger.log('[MemorialsService] getAllMemorials called');

    return await this.memorialModel.find({});
  }

  async getTopMemorialsByMessageReactions(
    memorialId: string
  ): Promise<string[]> {
    Logger.log(
      '[MemorialsService] getTopMemorialsByMessageReactions(' +
        memorialId +
        ') called'
    );

    const session = this.neo4jDriver.session();

    const result = await session.run(
      `
      MATCH (m:Memorial { memorialId: $memorialId })<-[r1:REACTED_TO]-(u1:User)-[r2:REACTED_TO]->(m2:Memorial)
      WHERE m <> m2
      WITH m2.memorialId AS memorialId, count(*) AS reactions
      ORDER BY reactions DESC
      RETURN memorialId
      LIMIT 3
    `,
      { memorialId }
    );

    session.close();

    return result.records.map((record) => record.get('memorialId'));
  }

  async getMemorialById(_id: string): Promise<Memorial | null> {
    Logger.log('[MemorialsService] getMemorialById(' + _id + ') called');

    return await this.memorialModel.findById({ _id: new Types.ObjectId(_id) });
  }

  async getMemorialFromFuneralId(funeralId: string): Promise<Memorial | null> {
    Logger.log(
      '[MemorialsService] getMemorialFromFuneralId(' + funeralId + ') called'
    );

    return await this.memorialModel.findOne({ funeralId: funeralId });
  }

  async updateMemorial(
    _id: string,
    userId: string,
    memorialDto: MemorialDto
  ): Promise<Memorial | null> {
    Logger.log(
      '[MemorialsService] updateMemorial(' +
        _id +
        ') called with userId: {' +
        userId +
        '}'
    );
    Logger.log(memorialDto);

    const memorial = {
      userId,
      ...memorialDto,
    };

    return await this.memorialModel.findOneAndUpdate({ _id: _id }, memorial, {
      new: true,
    });
  }

  async removeMemorialById(_id: string): Promise<Memorial | null> {
    Logger.log('[MemorialsService] removeMemorialById(' + _id + ') called');

    return await this.memorialModel.findOneAndDelete({ _id: _id });
  }
}
