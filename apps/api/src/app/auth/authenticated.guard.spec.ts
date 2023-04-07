import { ExecutionContext } from '@nestjs/common';
import { AuthenticatedGuard } from './authenticated.guard';

describe('AuthenticatedGuard', () => {
  let authenticatedGuard: AuthenticatedGuard;

  beforeEach(() => {
    authenticatedGuard = new AuthenticatedGuard();
  });

  it('should return true if request is authenticated', async () => {
    const context = {
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({ isAuthenticated: () => true }),
      }),
    } as unknown as ExecutionContext;

    const result = await authenticatedGuard.canActivate(context);

    expect(result).toBe(true);
  });

  it('should return false if request is not authenticated', async () => {
    const context = {
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({ isAuthenticated: () => false }),
      }),
    } as unknown as ExecutionContext;

    const result = await authenticatedGuard.canActivate(context);

    expect(result).toBe(false);
  });
});
