// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class JQueryService {

//   constructor() { }
// }


import { InjectionToken } from '@angular/core';

export let JQ_TOKEN = new InjectionToken<Object>('jQuery')