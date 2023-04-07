import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonsService } from './persons.service';
import { Person, PersonDocument } from './person.model';
import { PersonDto } from './person.dto';
import { Gender } from '../shared/gender.model';

describe('PersonsService', () => {
  let service: PersonsService;
  let model: Model<PersonDocument>;

  const mockModel = {
    find: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    findOneAndUpdate: jest.fn(),
    findOneAndDelete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PersonsService,
        {
          provide: getModelToken('person'),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<PersonsService>(PersonsService);
    model = module.get<Model<PersonDocument>>(getModelToken('person'));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('addPerson', () => {
    it('should add a new person', async () => {
      const userId = '123';
      const personDto: PersonDto = {
        name: 'John Doe',
        birthday: new Date('2000-01-01'),
        deathday: new Date('2050-01-01'),
        gender: Gender.male,
        imageBase64: 'aW1hZ2VCYXNlNjQ=',
      };
      const createdPerson: Person = {
        _id: 'abc',
        userId: userId,
        ...personDto,
      };
      mockModel.create.mockResolvedValue(createdPerson);

      const result = await service.addPerson(personDto, userId);

      expect(result).toEqual(createdPerson);
      expect(mockModel.create).toBeCalledWith({
        userId,
        ...personDto,
      });
    });
  });

  describe('getAllPersonsFromUser', () => {
    it('should return all persons from the user', async () => {
      const userId = '123';
      const persons: Person[] = [
        {
          _id: 'abc',
          userId: userId,
          name: 'John Doe',
          birthday: new Date('2000-01-01'),
          deathday: new Date('2050-01-01'),
          gender: Gender.male,
          imageBase64: 'aW1hZ2VCYXNlNjQ=',
        },
      ];
      mockModel.find.mockResolvedValue(persons);

      const result = await service.getAllPersonsFromUser(userId);

      expect(result).toEqual(persons);
      expect(mockModel.find).toBeCalledWith({ userId: { $eq: userId } });
    });
  });
});
