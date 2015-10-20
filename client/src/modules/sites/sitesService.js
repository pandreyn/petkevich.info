export class SitesService{
  /*@ngInject*/
  constructor($resource){
    var uri = '/api/sites/:id';

    return $resource(uri,
        {
          id: '@id'
        },
        {
          query:  {method:'GET', isArray:true},
          get: {method: 'GET'},
          save: {method: 'POST'},
          update: {method: 'PUT'}
        });
  }

}
