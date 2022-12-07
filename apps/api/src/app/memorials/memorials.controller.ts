import { Controller } from '@nestjs/common';
import { MemorialsService } from './memorials.service';

@Controller('memorials')
export class MemorialsController {
  constructor(private memorialsService: MemorialsService) {}
}
