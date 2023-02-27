import {Entity, model, property} from '@loopback/repository'

@model()
export class Post extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number

  @property({
    type: 'string',
  })
  store?: string

  @property({
    type: 'string',
  })
  model?: string

  @property({
    type: 'string',
  })
  field?: string

  @property({
    type: 'string',
  })
  value?: string

  @property({
    type: 'string',
  })
  content?: string

  @property({
    type: 'number',
    name: 'event_id',
  })
  eventId?: string

  @property({
    type: 'number',
    name: 'organizer_id',
  })
  organizerId?: string

  constructor(data?: Partial<Post>) {
    super(data)
  }
}

export interface PostRelations {
  // describe navigational properties here
}

export type PostWithRelations = Post & PostRelations
