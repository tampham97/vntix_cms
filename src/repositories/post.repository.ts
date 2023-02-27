import {inject} from '@loopback/core'
import {DefaultCrudRepository, juggler} from '@loopback/repository'
//import {VntixCmsDataSource} from '../datasources'
import {Post, PostRelations} from '../models'
import {CMSServiceBindings} from '../keys'

export class PostRepository extends DefaultCrudRepository<
  Post,
  typeof Post.prototype.id,
  PostRelations
> {
  constructor(
    @inject(`datasources.${CMSServiceBindings.DATASOURCE_NAME}`)
    dataSource: juggler.DataSource,
  ) {
    super(Post, dataSource)
  }
}
