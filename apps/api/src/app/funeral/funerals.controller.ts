import { Controller } from '@nestjs/common';
import { FuneralsService } from './funerals.service';

@Controller('funerals')
export class FuneralsController {
  constructor(private funeralsService: FuneralsService) {}
}
