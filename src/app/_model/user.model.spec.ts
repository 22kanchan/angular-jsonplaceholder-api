import { User } from './user.model';

describe('RegisteredUser', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});
