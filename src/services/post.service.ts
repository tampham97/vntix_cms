import {repository, Filter} from '@loopback/repository'
import {Post} from '../models'
import {PostRepository} from '../repositories'

export class PostService {
  constructor(
    @repository(PostRepository) public postRepository: PostRepository,
  ) {}

  async addPost(post: Omit<Post, 'id'>): Promise<Post> {
    const created = await this.postRepository.create(post)
    return created
  }

  async getPosts(filter: Filter<Post>): Promise<Post[]> {
    const posts = await this.postRepository.find(filter)
    return posts
  }
}
