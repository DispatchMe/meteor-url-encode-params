describe('URL._encodeParams', function () {
  
  it('serializes params to query correctly', function () {
    var hash = {
      filter: {
        type: 'Foo',
        id_eq: 15,
      },
      array: ['1', 'a', 'dirty[]']
    };
    
    var query = 'filter[type]=Foo&filter[id_eq]=15&array[0]=1&array[1]=a&array[2]=dirty%5B%5D';

    expect(URL._encodeParams(hash)).toEqual(query);
  });
  
});