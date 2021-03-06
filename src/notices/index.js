export default [
  {
    path: 'notice/:bulletinId',
    name: 'notice',
    component: require('../views/notice.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '',
    name: 'notice-list',
    component: require('../views/notice-list.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: 'change',
    name: 'change',
    component: require('../views/change.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: 'personal',
    name: 'personal',
    component: require('../views/personal.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: 'unHandle',
    name: 'unHandle',
    component: require('../views/unHandle.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: 'handle',
    name: 'handle',
    component: require('../views/handle.vue'),
    meta: {
      requireAuth: true
    }
  },
  //eip跳转链接
  {
      path: 'eip-link',
      name: 'eip-link',
      component: require('../views/eiplink.vue'),
      meta: {
          requireAuth: true
      }
  }
]
