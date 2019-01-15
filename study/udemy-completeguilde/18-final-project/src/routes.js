import Home from './components/Home.vue'
import Postfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
  {path:'/',component:Home},
  {path:'/postfolio',component:Postfolio},
  {path:'/stocks',component:Stocks},
]