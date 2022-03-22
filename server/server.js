import express from "express";

const app = express();
const port = process.env.PORT || 8000;
import cors from "cors";
 app.use(cors());
app.use(express.json());

import rpsPlayerRoutes from "./rpsPlayerRoutes.js";
import memory from "./memory.js";

app.use("/rpsplmayer", rpsPlayerRoutes);
app.use("/memory", memory);
app.use("/test",(req,res)=>{
	res.json({test:"abc"})
})
app.listen(port, () => {
	console.log("Server on!")
})