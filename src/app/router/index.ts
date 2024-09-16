import { Router } from "express";

const router=Router();
const modulesRouer=[
    {
        path:'/user'
        router:,
    }
]
modulesRouer.forEach((route)=>router.use(route.path,route.router));

export default router;