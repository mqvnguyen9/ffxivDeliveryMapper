import {TraversalService} from './traversal.service';

describe('TraversalService', () => {
  let service: TraversalService;
  beforeEach(() => {
    service = new TraversalService();
  });

  it('should be created', () => {
    expect(service.printGraph()).toBe('Limsa Lominsa');
  });
});
