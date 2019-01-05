import User from './components/User.vue'
import UserStart from './components/UserStart.vue'
import UserDetail from './components/UserDetail.vue'
import UserEdit from './components/UserEdit.vue'
import Home from './components/Home.vue'
export const routes = [
    {path: '/',component: Home , name:'home'},
    {path: '/user/',component: User , children:[
        {path:'',component:UserStart},
        {path:':id',component:UserDetail},
        {path:':id/edit',component:UserEdit, name:'userEdit'},
    ]},
];