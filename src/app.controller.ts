import { CacheInterceptor, CacheKey, CacheTTL, CACHE_MANAGER, Controller, Get, Inject, UseInterceptors } from '@nestjs/common';
import { Cache } from 'cache-manager'
import { Profile } from './profile'

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {

  fakeModel: Profile = {
    username: 'yalol',
    email: 'yalo@gmail.com'
  }

  @Get('auto-cache')
  @CacheKey('my-auto-cache')
  @CacheTTL(240)
  getCache() {
    return this.fakeModel
  }










  // fakeValue = "my name is name"
  // fakeModel: Profile = {
  //   username: "user1",
  //   email: "user@gmail.com"
  // }

  //   constructor(
  //     @Inject(CACHE_MANAGER) private cacheManager: Cache
  //   ){}

  //   @Get('get-string-cache')
  //   async getSimpleString() {
  //     var value = await this.cacheManager.get('my-string')
  //     if(value) {
  //       return {
  //         data: value,
  //         loadsFrom: 'redis cache'
  //       }
  //     } 
  //     await this.cacheManager.set('my-string', this.fakeValue, {ttl: 300})
  //     return {
  //       data: this.fakeValue,
  //       loadsFrom: 'fake database'
  //     }
  //   }

  //   @Get('regis-object-cache')
  //   async getObject() {
  //     var profile = await this.cacheManager.get<Profile>('my-object')
  //     if(profile) {
  //       return {
  //         data: profile,
  //         loadsFrom: 'redis cache'
  //       }
  //     }

  //     await this.cacheManager.set<Profile>('my-object', this.fakeModel, {ttl:300})
  //     return {
  //       data: this.fakeModel,
  //       loadsFrom: 'fake database'
  //     }
  //   }

  //   @Get('delete')
  //   async deleteCache() {
  //     // await this.cacheManager.del('my-object')
  //     await this.cacheManager.reset()
  //   }


}
