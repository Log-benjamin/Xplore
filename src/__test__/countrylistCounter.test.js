import counterHomepage from '../modules/counter.js';

describe('counterHomepage', () => {
  test('should count the country list', () => {
    const data = [
      {
        comment: 'best city ever ',
        creation_date: '2023-07-07',
        username: 'fares',
      },
      {
        comment: 'best city ever ',
        creation_date: '2023-07-07',
        username: 'fares',
      },
      {
        comment: "do not move to helsinki it's to cold ",
        creation_date: '2023-07-07',
        username: 'fares',
      },
      {
        comment: 'best city ever',
        creation_date: '2023-07-07',
        username: 'fares',
      },
      {
        comment: 'we all love filnland ',
        creation_date: '2023-07-07',
        username: 'fares',
      },
      {
        comment: 'we all love filnland ',
        creation_date: '2023-07-07',
        username: 'fares',
      },
      {
        comment: '',
        creation_date: '2023-07-07',
        username: '',
      },
    ];
    const result = counterHomepage(data);
    expect(result).toBe(7);
  });

  test('should count the country list', () => {
    const data = [
      {
        comment: 'best city ever ',
        creation_date: '2023-07-07',
        username: 'fares',
      },

    ];
    const result = counterHomepage(data);
    expect(result).toBe(1);
  });

  test('should count the country list', () => {
    const data = [];
    const result = counterHomepage(data);
    expect(result).toBe(0);
  });
});