import {Binding, Component} from '@loopback/core'
import {CMSServiceBindings} from './keys'

export class CMSComponent implements Component {
  bindings?: Binding[] = [
    Binding.bind(CMSServiceBindings.DATASOURCE_NAME).to(
      process.env.DATASOURCE_NAME ?? 'nextix_cms',
    ),
  ]
}
