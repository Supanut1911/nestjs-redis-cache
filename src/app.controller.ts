import { CACHE_MANAGER, Controller, Get, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager'
import { Profile } from './profile'


@Controller()
export class AppController {
  fakeValue = "my name is name"
  fakeModel: Profile = {
    username: "user1",
    email: "user@gmail.com"
  }

    constructor(
      @Inject(CACHE_MANAGER) private cacheManager: Cache
    ){}

    @Get('get-string-cache')
    async getSimpleString() {
      var value = await this.cacheManager.get('my-string')
      if(value) {
        return {
          data: value,
          loadsFrom: 'redis cache'
        }
      } 
      await this.cacheManager.set('my-string', this.fakeValue, {ttl: 300})
      return {
        data: this.fakeValue,
        loadsFrom: 'fake database'
      }
    }

  



}
